// Import ES6 Promise
import 'es6-promise/auto';

// Import System requirements
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import store from './store';

// Import Views - Top level
import AppView from './components/App.vue';

Vue.use(VueRouter);

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
});
