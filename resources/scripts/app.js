import Alpine from 'alpinejs';

// eslint-disable-next-line no-undef
window.Alpine = Alpine;

Alpine.start();

// If we have the test_a11y query param, run the a11y tests
if (window.location.search.includes('test_a11y')) {
  import('./utils/test-a11y.js').then(({ default: testA11y }) => {
    testA11y(document).catch((errors) => {
      // Console table the errors without the index
      console.table(errors)
    });
  });
}

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error); // eslint-disable-line no-console
