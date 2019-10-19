import asyncComponent from '../../../AsyncComponent';

const LazyHomeInnerTwo = asyncComponent(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      import(
        /* webpackChunkName: "HomeInnerTwo" */
        /* webpackMode: "lazy" */
        './HomeInnerTwo'
      ).then(module => resolve(module.default))
    }, 1500)
  }))
});

export default LazyHomeInnerTwo
