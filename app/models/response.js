class Response {
  constructor(options = {}) {
    this.data = options.data;
    this.error = options.error;
    this.status = options.status;
  }

  toJSON() {
    return {
      data: this.data,
      error: this.error,
      status: this.status,
    };
  }
}

module.exports = Response;
