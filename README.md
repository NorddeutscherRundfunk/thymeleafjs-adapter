# Thymeleaf Adapter

Use [ThymeleafJs](https://github.com/ultraq/thymeleafjs) templates with [Fractal](http://github.com/frctl/fractal).

## Usage

Install via NPM:

```bash
npm i thymeleafjs-adapter
```

Then configure your Fractal instance:

```js
fractal.components.engine('thymeleafjs-adapter');
// register the thymeleaf engine adapter for your components

fractal.components.set('ext', '.html');
// look for files with a .html file extension
```
