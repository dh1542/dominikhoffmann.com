import Home from "../views/Home.vue"

const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/pomodoroTimer',
        component: () => import('@/views/PomodoroTimer.vue')
    }
  
]

export default routes;