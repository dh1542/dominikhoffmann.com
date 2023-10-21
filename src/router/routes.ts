import Home from "@/views/Home.vue"
import Pomodoro from "@/views/PomodoroTimer.vue"

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/pomodoroTimer',
        component: Pomodoro
    }
  
]

export default routes;