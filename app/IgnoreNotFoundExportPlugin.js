/**
 *
 * `ts-loader` has a bug where it produces false-positives about missing
 *  exports. The `IgnoreNotFoundExportPlugin` omits those warnings.
 *
 * Take a look at: https://github.com/TypeStrong/ts-loader/issues/653#issuecomment-390889335
 *
 */
// eslint-disable-next-line import/order
const ModuleDependencyWarning = require('webpack/lib/ModuleDependencyWarning');
class IgnoreNotFoundExportPlugin {
  apply(compiler) {
    const messageRegExp = /export '.*'( \(reexported as '.*'\))? was not found in/;
    const doneHook = (stats) => {
      // eslint-disable-next-line no-param-reassign
      stats.compilation.warnings = stats.compilation.warnings.filter((warn) => {
        if (warn instanceof ModuleDependencyWarning && messageRegExp.test(warn.message)) {
          return false;
        }
        return true;
      });
    };

    if (compiler.hooks) {
      compiler.hooks.done.tap('IgnoreNotFoundExportPlugin', doneHook);
    } else {
      compiler.plugin('done', doneHook);
    }
  }
}

module.exports = IgnoreNotFoundExportPlugin;
