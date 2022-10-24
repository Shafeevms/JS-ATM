const currencyOptionsChunk = (arr) => arr.reduce((acc, el) => acc += `<li>${el}</li>`, '');

export default currencyOptionsChunk;
