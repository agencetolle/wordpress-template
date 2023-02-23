import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
