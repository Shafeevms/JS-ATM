const root = document.querySelector('#root');

export const module = ({ component, componentSkeleton, getData }) => async () => {
  if (componentSkeleton) {
    root.innerHTML = '';
    root.appendChild(componentSkeleton());
  }
  const data = typeof getData === 'function' ? await getData() : undefined;
  root.innerHTML = '';
  if (typeof component !== 'function') {
    console.error('Module component должен быть функцией!');
  }
  const html = component(data);

  root.appendChild(html);
};

export const component = ({
  template,
  controller,
  data,
}) => {
  const html = template(data);
  const div = document.createElement('div');
  div.innerHTML = html;

  if (typeof controller === 'function') {
    controller(div);
  }
  return div;
};
