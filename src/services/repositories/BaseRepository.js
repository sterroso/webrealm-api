export default class BaseRepository {
  #model;
  #dto;

  constructor(model, dto) {
    if (!model) {
      throw new Error("Repository Error: A valid model must be provided.");
    }

    this.#model = model;

    if (!dto) {
      throw new Error("Repository Error: A valid Data Transformation Object must be provided.");
    }

    this.#dto = dto;
  }

  get model() {
    return this.#model;
  }

  get dto() {
    return this.#dto;
  }

  async getMany(query, options) {
    try {
      const results = await this.model.paginate(query, options);

      if (results.totalDocs < 1) {
        throw new Error("Repository getMany Error: No documents found.")
      }

      results.docs = results.docs.map((doc) => this.dto.getListItem(doc));

      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getById(id) {
    try {
      const result = await this.model.findById(id);

      if (!result) {
        throw new Error("Repository getById Error: No document found.");
      }

      return this.dto.getLean(result);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(data) {
    try {
      const newDocument = await this.model.create(this.dto.getCreate(data));

      if (!newDocument) {
        throw new Error("Repository create Error: new docuiment could not be created.");
      }

      return this.dto.getListItem(newDocument);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateById(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(
        id, 
        this.dto.getUpdate(data), 
        { new: true }
      );

      if (!result) {
        throw new Error("Repository update Error: document could not be updated.");
      }

      return this.dto.getLean(result);
    } catch (error) {
      throw new Error(error.message);
    }
 }

  async deleteById(id) {
    try {
      const result = this.model.findByIdAndDelete(id);

      if (!result) {
        throw new Error("Repository deleteById Error: document could not be deleted.");
      }

      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}