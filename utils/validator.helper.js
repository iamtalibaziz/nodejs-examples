const Validator = {
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isAlphaNumeric: function(pValue) {
      return /^[A-Za-z0-9]+$/i.test(pValue);
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isDecimal: function(pValue) {
      return /^\d+(\.\d)?\d*$/i.test(pValue);
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isNumber: function(pValue) {
      return !isNaN(pValue);
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isInteger: function(pValue) {
      return Number.isInteger(pValue);
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isTableName: function(pValue) {
      return /^[a-z0-9_]+$/i.test(pValue);
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isValidEpocTime: function(pValue) {
      const tempValue = (parseInt(pValue, 10) * 1000);
      const valid = (new Date(tempValue)).getTime() > 0;
      return valid;
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isArray: function(pValue) {
      return Array.isArray(pValue);
    },
    /**
     * 
     * @param {*} value 
     * @returns 
     */
    isBoolean(value) {
      try {
        if (typeof value === 'boolean') {
          return true;
        }
        if (typeof value === 'string') {
          if (value.toLowerCase() === 'false' || value.toLowerCase() === 'true') {
            return true;
          }
          if (value === '0' || value === '1') {
            return true;
          }
        }
        return (typeof value === 'number' && (value === 0 || value === 1));
      } catch (error) {
        return false;
      }
    },
    /**
     * 
     * @param {*} str 
     * @param {*} len 
     * @returns 
     */
    isValidString(str, len) {
      if (!str || typeof str !== 'string' || str.trim().length === 0) return false;
      if (len && str.trim().length < len) return false;
      return true;
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isAlphaNum(pValue) {
      if (!pValue) return false;
      const exp = /^([a-zA-Z0-9 _-]+)$/;
      if (exp.test(pValue)) {
        return true;
      }
      return false;
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isNotUndefinedAndNull(pValue) {
      let value = pValue;
      if (typeof value === 'string') {
        value = pValue.trim();
      }
      return (value !== undefined && value !== null && value !== '' && value !== 'null' && value !== 'undefined');
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isNotUndefinedAndNullObject(pValue) {
      let value = pValue;
      if (typeof value === 'string') {
        value = pValue.trim();
      }
      return (value !== undefined && value !== null && value !== '' && value !== 'null' && value !== 'undefined' && typeof value === 'object');
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isNullOrUndefined(pValue) {
      return (pValue === undefined || pValue === null || (typeof pValue === 'string' && pValue.trim() === '') || pValue === 'null' || pValue === 'undefined');
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isOnlyNumber(pValue) {
      const exp = /^\d+$/;
      return exp.test(pValue);
    },
    /**
     * 
     * @param {*} email 
     * @returns 
     */
    isValidEmail(email) {
      if (!email) return false;
      const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
      return REGEX_EMAIL.test(String(email.trim()).toLowerCase());
    },
    /**
     * 
     * @param {*} pValue 
     * @returns 
     */
    isJson: function(pValue) {
        try {
            JSON.parse(pValue);
        } catch (e) {
            return false;
        }
        return true;
    },
  };
        
  module.exports = Validator;
    
  