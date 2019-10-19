import asyncComponent from '../../../AsyncComponent';

const LazyHomeInner = asyncComponent(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      import(
        /* webpackChunkName: "HomeInner" */
        /* webpackMode: "lazy" */
        './HomeInner'
      ).then(module => resolve(module.default))
    }, 1500)
  }))
});

export default LazyHomeInner
