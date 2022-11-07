const component = ({
  template,
  controller,
  data,
  tag,
}) => {
  const html = template(data);
  const element = document.createElement(tag || 'div');
  element.innerHTML = html;

  if (typeof controller === 'function') {
    controller(element, data);
  }
  return element;
};

export default component;
