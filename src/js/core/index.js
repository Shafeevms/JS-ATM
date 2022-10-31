export const module = ({
  component,
  componentSkeleton,
  getData,
  parent,
}) => async (params) => {
  if (params?.parent) {
    parent = params.parent;
  }

  if (!parent) {
    parent = document.querySelector('#root');
  }
  if (componentSkeleton) {
    parent.innerHTML = '';
    parent.appendChild(componentSkeleton());
  }

  if (typeof component !== 'function') {
    console.error('Module component должен быть функцией!');
  }

  const data = typeof getData === 'function' ? await getData(params) : undefined;

  if (parent.tagName !== 'UL') {
    parent.innerHTML = '';
  }
  const html = component(data, params);
  parent.appendChild(html);

  return html;
};

export const component = ({
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
