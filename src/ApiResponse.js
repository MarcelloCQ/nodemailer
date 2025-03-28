class ApiResponse {
  constructor(success, message, data, error = null) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  static success(message, data = null) {
    return new ApiResponse(true, message, data);
  }

  static error(message, error = null) {
    return new ApiResponse(false, message, null, error);
  }
}

export default ApiResponse;
