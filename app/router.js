import EmberRouter from '@ember/routing/router';
import config from 'ssr-memory-leak-repro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('leak');
  this.route('no-leak');
});
