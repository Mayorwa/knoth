import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "sign-in", },
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import("@/views/auth/sign-in.vue"),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import("@/views/auth/sign-up.vue"),
  },
  {
    path: "/board",
    name: "board-container",
    component: () => import("@/layouts/board.vue"),
    redirect: { name: "board-analysis", },
    children: [
      {
        path: 'analysis',
        name: 'board-analysis',
        component: () => import("@/views/board/analysis.vue"),
      },
      {
        path: 'conversation',
        name: 'board-conversation',
        component: () => import("@/views/board/conversation.vue"),
      },
      {
        path: 'task',
        name: 'board-task',
        component: () => import("@/views/board/task.vue"),
      },
      {
        path: 'chat',
        name: 'board-chat',
        component: () => import("@/views/board/live-chat.vue"),
      },
      {
        path: 'phone',
        name: 'board-phone',
        component: () => import("@/views/board/phone.vue"),
      },
      {
        path: 'inbox',
        name: 'board-inbox',
        component: () => import("@/views/board/inbox.vue"),
      },
      {
        path: 'meetings',
        name: 'board-meetings',
        component: () => import("@/views/board/meeting.vue"),
      },
      {
        path: 'notifications',
        name: 'board-notifications',
        component: () => import("@/views/board/notification.vue"),
      },
      {
        path: 'settings',
        name: 'board-settings',
        component: () => import("@/views/board/settings.vue"),
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
