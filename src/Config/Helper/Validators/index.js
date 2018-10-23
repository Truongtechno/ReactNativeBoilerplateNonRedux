import string from './string';
import _ from 'lodash';
import { Alert } from 'react-native';
import moment from 'moment';

export default function validate(value, format) {
  if (format === undefined || value === undefined) {
    return [];
  }
  if (_.isObject(value)) {
    const validate_keys = Object.keys(value).filter(key => format[key] !== undefined);
    return validate_keys.reduce((results, key) => _.concat(results, validate(value[key], format[key])), []);
  } else {
    var results = [];
    if (_.isFunction(format)) {
      results.push(format());
    } else {
      if (format.validations) {
        results = format.validations.map(validator => validator(value));
      }
      if (format.email && value.length) {
        results.push(email(value))
      }

      if (format.max && value.length) {
        results.push(max(format.max)(value));
      }

      if (format.min && value.length) {
        results.push(min(format.min)(value));
      }

      if (format.required && required(value) !== true) {
        results.push(required(value));
      }

      if (format.isPast && value && value.length > 0) {
        results.push(isPast(value));
      }
    }

    if (format.number && value.length && isNumber(value) !== true) {
      results.push(isNumber(value));
    }

    return results.filter(result => result !== true).map((result) => result(format.label));
  }
}

// predefine validation

export function email(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = re.test(String(email).toLowerCase());
  if (result === true) {
    return true;
  } else {
    return string.email;
  }
}

export const max = (length) => (value) => {
  if (!value || value.length <= length) {
    return true;
  } else {
    return string.max(length);
  }
}

export const min = (length) => (value) => {
  if (!value || value.length >= length) {
    return true;
  } else {
    return string.min(length);
  }
}

export const required = (value) => {
  if (value && (value.length > 0 || value > 0)) {
    return true;
  } else {
    return string.required;
  }
}

export const isNumber = (value) => {
  if (!isNaN(value)) {
    return true;
  } else {
    return string.isNumber;
  }
}

export const isPast = (value) => {
  const duration = moment().diff(moment(value), 'days', true);
  if (duration >= 1) {
    return true;
  } else {
    return string.isPast;
  }
}
