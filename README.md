# svelte-global-styles
Plugin for make styles in svelte-components global again

## Instalation
```
npm install --save-dev svelte-global-styles
```
or
```
npm i -D HeadMad/svelte-global-styles
```

## Usage
```javascript
// rollup.config.js

import svelte from 'rollup-plugin-svelte';
import globalStyles from 'svelte-global-styles';
...

export default {
  ...
  plugins: [
    svelte({
      preprocess: [
        globalStyles
      ],
      ...
    })
  ]
}
```

## Scope some styles
If you whant use scoped styles in som files,
<br>just add attribute `scoped` to tag `<style>`

```css
<style scoped>
  /* Scoped styles */
</style>
```
## Also
If you don't planing use scope styles, you can use `postcss plugin`
<br>called [postcss-svelte-global-styles](https://github.com/HeadMad/postcss-svelte-global-styles#readme). But for this, you must use `svelte plugin`
<br>like [svelte-postcss](https://github.com/HeadMad/svelte-postcss#readme)


## License
MIT