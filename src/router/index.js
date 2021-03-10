import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/board",
    name: "board-container",
    component: () => import("@/layouts/board.vue"),
    redirect: { name: "board-overview", },
    children: [
      {
        path: 'overview',
        name: 'board-overview',
        component: () => import("@/views/board/overview.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router
