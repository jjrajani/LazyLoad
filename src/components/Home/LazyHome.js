import asyncComponent from '../../AsyncComponent';

const LazyHome = asyncComponent(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      import(
        /* webpackChunkName: "Home" */
        /* webpackMode: "lazy" */
        './Home'
      ).then(module => resolve(module.default))
    }, 1500)
  }))
});

export default LazyHome
