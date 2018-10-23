/**
 * This function will return a nested element if it existed, or return a null if any level of outer object doesn't existed. 
 * @param {Array<String>} params Array of parameters.
 * @param {Object}        object Object.
 */
export default getNullable = (params, object) => params.reduce((outerParam, innerParam) => (outerParam && outerParam[innerParam] !== undefined) ? outerParam[innerParam] : null, object)

/**
 * This function will return a matrix splitted into block of @size based on target array
 * @param {Array}  target Array to be splitted
 * @param {Number} size   Number of element per chunk
 */
export const chunk = (target, size) => {
  return target.reduce((memo, value, index) => {
    const pageNo = Math.floor(index/size);
    if (!memo[pageNo]) {
      memo[pageNo] = [];
    }
    memo[pageNo].push(value)
    return memo
  }, [[]])
}

export const debug = (identifier) => (item) => {
  object = JSON.parse(JSON.stringify(item))
  console.log(`${identifier || ""}`, object)
  return item
}

export const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

export const filterGraphqlError = (error) => {
  if (error && error.includes('GraphQL error:')) {
    return error.replace('GraphQL error:','');
  }
  return error;
}