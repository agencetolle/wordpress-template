import Alpine from 'alpinejs';

// eslint-disable-next-line no-undef
window.Alpine = Alpine;

Alpine.start();

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error); // eslint-disable-line no-console
