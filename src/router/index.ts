import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes= [
  //默认路径一般写在最上面，根路径，重定向到'/money'
  {
    path:'/',
    redirect:'/money'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/labels',
    component: Labels
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
