'use strict';

const Adapter  = require('@frctl/fractal').Adapter;
const Thymeleaf = require('thymeleaf');
//
// console.log(Thymeleaf);
class ThymeleafAdapter extends Adapter {
    render(path, str, context, meta) {
        let views = {};
        this.views.forEach(view => (views[view.handle] = view.content));
        Thymeleaf.templateEngine.process(str, context)
        return Promise.resolve(this.engine.render(str, context, views));
    }
}

module.exports = function() {
    return {
        register(source, app) {
            return new ThymeleafAdapter(Thymeleaf, source);
        }
    }
};
