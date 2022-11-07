const printBarRatio = (preparedData) => {
  const max = maxRatioRange(preparedData);
  return preparedData.reduceRight((acc, el, index) => {
    if (index > 0) {
      const height = +(((el.pos - el.neg) / max) * 100).toFixed(0) || 0;
      const pos = +((el.pos / max) * 100).toFixed(0) || 0;
      const neg = height - pos;
      acc += `<li class="an_ratio__empty-bar" style="height: ${height}%" data-month=${el.date}>
        <ul class="an_ratio__col">
          <li class="an_ratio__pos" style="height: ${pos}%"></li>
          <li class="an_ratio__neg" style="height: ${neg}%"></li>
        </ul>
      </li>`;
    }
    return acc;
  }, '');
};

const maxRatioRange = (preparedData) => {
  const temp = preparedData.map((el) => {
    if (el.pos || el.neg) {
      return el.pos - el.neg;
    }
    return 0;
  });
  return (Math.max.apply(null, temp)).toFixed(2);
};

export default printBarRatio;
