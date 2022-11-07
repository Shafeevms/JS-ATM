const Router = {
  pathname: '',
  root: undefined,
  query: null,
  configs: null,
  init() {
    const search = getSearchParams();
    const { pathname } = window.location;

    this.query = { ...search };
    this.pathname = pathname;
  },
  create(configs, root = undefined) {
    this.root = root;
    this.configs = configs;

    const { pathname } = window.location;
    update(pathname);
  },
  redirect: (path) => window.history.pushState(null, '', path),
};

(() => {
  const { history } = window;
  const { pushState, replaceState } = history;

  history.pushState = (...args) => {
    update(args[2]);
    pushState.apply(history, args);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  history.replaceState = (...args) => {
    update(args[2]);
    replaceState.apply(history, args);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  window.addEventListener('popstate', (event) => {
    const { location: { pathname } } = event.target;
    update(pathname);
    window.dispatchEvent(new Event('locationchange'));
  });
})();

const update = (pathname) => {
  Router.pathname = pathname;
  const urlParams = pathname.split('/').slice(1);
  const { configs } = Router;

  for (const key in configs) {
    if (Object.hasOwnProperty.call(configs, key)) {
      const { path, module, redirect = undefined } = configs[key];
      const configParams = path.split('/').slice(1);

      let isEqualRoute = true;

      if (configParams.length !== urlParams.length) {
        isEqualRoute = false;
      } else {
        for (const index in urlParams) {
          if (Object.hasOwnProperty.call(urlParams, index)) {
            const param = urlParams[index];

            let isDynamicParam = false;
            if (configParams[index].at(0) === ':') {
              const paramName = configParams[index].slice(1);
              Router.query[paramName] = param;
              isDynamicParam = true;
            }

            if ((param !== configParams[index]) && !isDynamicParam) {
              isEqualRoute = false;
              break;
            }
          }
        }
      }

      if (isEqualRoute) {
        if (redirect) {
          Router.redirect(redirect);
        } else {
          module();
        }

        return;
      }
    }
  }
};

const getSearchParams = () => {
  const { search } = window.location;

  const result = {};
  const urlParams = new URLSearchParams(search);
  for (const [key, value] of urlParams.entries()) {
    result[key] = value;
  }

  return result;
};

export default Router;
