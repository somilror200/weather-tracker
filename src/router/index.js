import { createRouter, createWebHistory } from 'vue-router'

import WeatherTable from '../views/WeatherTable.vue'
import WeatherTracker from '../views/WeatherTracker.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: WeatherTracker 
        },
        {
            path: '/overall',
            component: WeatherTable
        }
    ]
})

export default router