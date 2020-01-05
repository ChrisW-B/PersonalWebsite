const supportsIntersectionObserver = () =>
  'IntersectionObserver' in global &&
  'IntersectionObserverEntry' in global &&
  'intersectionRatio' in IntersectionObserverEntry.prototype;

export default () => {
  const polyfills = [];
  if (!supportsIntersectionObserver()) {
    // eslint-disable-next-line global-require
    polyfills.push(require('intersection-observer'));
  }
  return Promise.all(polyfills);
};
