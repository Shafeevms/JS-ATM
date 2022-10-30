const currencyOptionsChunk = (arr) => arr.reduce((acc, el) => acc += `<option>${el}</option>`, '');

export default currencyOptionsChunk;
