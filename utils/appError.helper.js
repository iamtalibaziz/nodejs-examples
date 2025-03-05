module.exports = class AppError {
    /**
   * defined a default constructor.
   */
    constructor(code) {
      this.errors = [];
      this.code = code;
    }
    /**
   * 
   */
    getErrorsArray() {
      return this.errors;
    }
    /**
   * 
   */
    isErrors() {
      return this.errors.length > 0;
    }
    /**
   * 
   */
    addParamError(message) {
      this.errors.push({
        reason: 'invalidParameter',
        message,
      });
  
      return this;
    }
    /**
   * 
   */
    addPermError(message) {
      this.errors.push({
        reason: 'invalidPermission',
        message,
      });
  
      return this;
    }
    /**
   * 
   */
    addServerError(message) {
      this.errors.push({
        reason: 'serverError',
        message,
      });
  
      return this;
    }
    /**
   * 
   */
    addMongoError(message) {
      this.errors.push({
        reason: 'dbError',
        message,
      });
  
      return this;
    }
    /**
   * 
   */
    addCustomError(reason, message) {
      this.errors.push({
        reason,
        message,
      });
  
      return this;
    }
  };
  