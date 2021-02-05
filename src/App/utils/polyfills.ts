const supportsIntersectionObserver = () =>
  'IntersectionObserver' in global &&
  'IntersectionObserverEntry' in global &&
  'intersectionRatio' in IntersectionObserverEntry.prototype;

const createPolyfills = async (): Promise<unknown[]> => {
  const polyfills = [];
  if (!supportsIntersectionObserver()) {
    // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
    polyfills.push(require('intersection-observer'));
  }
  return Promise.all(polyfills);
};

export default createPolyfills;
