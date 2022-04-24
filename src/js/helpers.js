export const formDataToObject = (formData) => Array
  .from(formData.entries())
  .reduce((acc, pair) => {
    acc[pair[0]] = pair[1];
    return acc;
  }, {});

export const ff = () => {};
