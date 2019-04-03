'use strict';

const Adapter = require('@frctl/fractal').Adapter;
const Thymeleaf = require('thymeleaf');
const fs = require('fs');

class ThymeleafAdapter extends Adapter {
  render(path, str, context, meta) {
    let views = {};
    this.views.forEach(view => (views[view.handle] = view.content));
    return this.engine.process(str, context);
  }
}

module.exports = function() {
  return {
    register(source, app) {
      let templateEngine = new Thymeleaf.TemplateEngine({
         ...Thymeleaf.STANDARD_CONFIGURATION,
        templateResolver: (templateName) => {
          return fs.readFileSync(`./src/${templateName}.html`);
        }
      });
      return new ThymeleafAdapter(templateEngine, source);
    }
  }
};
