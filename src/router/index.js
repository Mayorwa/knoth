import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router
