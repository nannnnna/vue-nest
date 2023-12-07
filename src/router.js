import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import ListBooks from './components/ListBooks.vue';
import FeedbackForm from './components/FeedbackForm.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/list-books', component: ListBooks },
    { path: '/feedback', component: FeedbackForm}
  ]
});
