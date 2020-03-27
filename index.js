const postcss = require('postcss')
const globalStyles = require('postcss-svelte-global-styles')

const style = async ({content, attributes}) => {
  if (attributes.scoped) return
  let code
  await postcss([globalStyles])
    .process(content, {from: undefined})
    .then(result => {
      result.warnings().forEach(warn => console.warn(warn.toString()));
      code = result.css
    });
  return { code }
}

const globalStylesPlugin = () => ({style})
globalStylesPlugin.style = style

module.exports = globalStylesPlugin