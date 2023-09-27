/**
 * Http Response Status Constants
 */


/**
 * HTTP Response Status Class
 */
class HttpStatusClass {
  #code;
  #name;
  description;
  http_ref;

  constructor(code, name) {
    this.#code = code;
    this.#name = name;
  }

  get code() {
    return this.#code;
  }

  get name() {
    return this.#name;
  }

  toString() {
    return `${this.#code} ${this.#name}`
  }

  toJSON() {
    return {
      code: this.code,
      name: `${this.name}`,
      description: this?.description || undefined,
      http_ref: this?.http_ref || undefined,
    }
  }
}

const HttpStatus = {
  HTTP_100_CONTINUE: new HttpStatusClass(100, "Continue"),
  HTTP_101_SWITCHING_PROTOCOL: new HttpStatusClass(101, "Switching Protocol"),
  HTTP_102_PROCESSING: new HttpStatusClass(102, "Processing"),
  HTTP_103_EARLY_HINTS: new HttpStatusClass(103, "Early Hints"),
  HTTP_200_OK: new HttpStatusClass(200, "OK"),
  HTTP_201_CREATED: new HttpStatusClass(201, "Created"),
  HTTP_202_ACCEPTED: new HttpStatusClass(202, "Accepted"),
  HTTP_203_NON_AUTHORITATIVE_INFORMATION: new HttpStatusClass(203, "Non-Authoritative Information"),
  HTTP_204_NO_CONTENT: new HttpStatusClass(204, "No Content" ),
  HTTP_205_RESET_CONTENT: new HttpStatusClass(205, "Reset Content"),
  HTTP_206_PARTIAL_CONTENT: new HttpStatusClass(206, "Partial Content"),
  HTTP_207_MULTI_STATUS: new HttpStatusClass(207, "Multi-Status"),
  HTTP_208_ALREADY_REPORTED: new HttpStatusClass(208, "Already Reported"),
  HTTP_226_IM_USED: new HttpStatusClass(226, "IM Used"),
  HTTP_300_MULTIPLE_CHOICE: new HttpStatusClass(300, "Multiple Choice"),
  HTTP_301_MOVED_PERMANENTLY: new HttpStatusClass(301, "Moved Permanently"),
  HTTP_302_FOUND: new HttpStatusClass(302, "Found"),
  HTTP_303_SEE_OTHER: new HttpStatusClass(303, "See Other"),
  HTTP_304_NOT_MODIFIED: new HttpStatusClass(304, "Not Modified"),
  HTTP_305_USE_PROXY: new HttpStatusClass(305, "Use Proxy"),
  HTTP_307_TEMPORARY_REDIRECT: new HttpStatusClass(307, "Temporary Redirect"),
  HTTP_308_PERMANENT_REDIRECT: new HttpStatusClass(308, "Permanent Redirect"),
  HTTP_400_BAD_REQUEST: new HttpStatusClass(400, "Bad Request"),
  HTTP_401_UNAUTHORIZED: new HttpStatusClass(401, "Unauthorized"),
  HTTP_402_PAYMENT_REQUIRED: new HttpStatusClass(402, "Payment Required"),
  HTTP_403_FORBIDDEN: new HttpStatusClass(403, "Forbidden"),
  HTTP_404_NOT_FOUND: new HttpStatusClass(404, "Not Found"),
  HTTP_405_METHOD_NOT_ALLOWED: new HttpStatusClass(405, "Method Not Allowed"),
  HTTP_406_NOT_ACCEPTABLE: new HttpStatusClass(406, "Not Acceptable"),
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED: new HttpStatusClass(407, "Proxy Authentication Required"),
  HTTP_408_REQUEST_TIMEOUT: new HttpStatusClass(408, "Request Timeout"),
  HTTP_409_CONFLICT: new HttpStatusClass(409, "Conflict"),
  HTTP_410_GONE: new HttpStatusClass(410, "Gone"),
  HTTP_411_LENGTH_REQUIRED: new HttpStatusClass(411, "Length Required"),
  HTTP_412_PRECONDITION_FAILED: new HttpStatusClass(412, "Precondition Failed"),
  HTTP_413_PAYLOAD_TOO_LARGE: new HttpStatusClass(413, "Payload Too Large"),
  HTTP_414_URI_TOO_LONG: new HttpStatusClass(414, "URI Too Long"),
  HTTP_415_UNSUPPORTED_MEDIA_TYPE: new HttpStatusClass(415, "Unsupported Media Type"),
  HTTP_416_RANGE_NOT_SATISFIABLE: new HttpStatusClass(416, "Range Not Satisfiable"),
  HTTP_417_EXPECTATION_FAILED: new HttpStatusClass(417, "Expectation Failed"),
  HTTP_418_IM_A_TEAPOT: new HttpStatusClass(418, "I'm a teapot"),
  HTTP_421_MISDIRECTED_REQUEST: new HttpStatusClass(421, "Misdirected Request"),
  HTTP_422_UNPROCESSABLE_CONTENT: new HttpStatusClass(422, "Unprocessable Content"),
  HTTP_423_LOCKED: new HttpStatusClass(423, "Locked"),
  HTTP_424_FAILED_DEPENDENCY: new HttpStatusClass(424, "Failed Dependency"),
  HTTP_425_TOO_EARLY: new HttpStatusClass(425, "Too Early"),
  HTTP_426_UPGRADE_REQUIRED: new HttpStatusClass(426, "Upgrade Required"),
  HTTP_428_PRECONDITION_REQUIRED: new HttpStatusClass(428, "Precondition Required"),
  HTTP_429_TOO_MANY_REQUESTS: new HttpStatusClass(429, "Too Many Requests"),
  HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE: new HttpStatusClass(431, "Request Header Fields Too Large"),
  HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS: new HttpStatusClass(451, "Unavailable For Legal Reasons"),
  HTTP_500_INTERNAL_SERVER_ERROR: new HttpStatusClass(500, "Internal Server Error"),
  HTTP_501_NOT_IMPLEMENTED: new HttpStatusClass(501, "Not Implemented"),
  HTTP_502_BAD_GATEWAY: new HttpStatusClass(502, "Bad Gateway"),
  HTTP_503_SRVICE_UNAVAILABLE: new HttpStatusClass(503, "Service Unavailable"),
  HTTP_504_GATEWAY_TIMEOUT: new HttpStatusClass(504, "Gateway Timeout"),
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED: new HttpStatusClass(505, "HTTP Version Not Supported"),
  HTTP_506_VARIANT_ALSO_NEGOTIATES: new HttpStatusClass(506, "Variant Also Negotiates"),
  HTTP_507_INSUFFICIENT_STORAGE: new HttpStatusClass(507, "Insufficient Storage"),
  HTTP_508_LOOP_DETECTED: new HttpStatusClass(508, "Loop Detected"),
  HTTP_510_NOT_EXTENDED: new HttpStatusClass(510, "Not Extended"),
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED: new HttpStatusClass(511, "Network Authentication Required")
};

export default HttpStatus;