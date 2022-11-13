import Router from './router';

const module = ({
  component,
  componentSkeleton,
  getData,
  parent,
}) => async (params) => {
  if (Router.root) {
    parent = Router.root;
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

  const data = typeof getData === 'function' ? await getData() : undefined;
  if (parent.tagName !== 'UL') {
    parent.innerHTML = '';
  }
  const html = component(data, params);
  parent.appendChild(html);

  return html;
};

export default module;
