const transactionHistoryChunk = (array, currentAccount) => {
  return array
    .slice(-10)
    .sort((a, b) => { a.date - b.date })
    .reduceRight((acc, line) => {
      acc += transactionComponent(line, currentAccount);
      // eslint-disable-next-line prefer-template
      return '<li>' + acc + '</li>';
    }, '');
};

export default transactionHistoryChunk;
