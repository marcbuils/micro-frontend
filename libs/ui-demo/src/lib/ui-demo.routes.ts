const URL = 'http://127.0.0.1:8080/apps/app-todolist/main.esm.js';

export const routes = [
  {
    path: '/',
    redirect: '/todolist',
  },
  {
    path: '/todolist',
    action: async () => {
      // await import('@micro-frontend/todolist');
      await import(/* webpackIgnore: true */ URL);
    },
    component: 'mf-todolist',
  },
];
