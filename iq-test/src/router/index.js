import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import FirstQuestion from "@/components/FirstQuestion.vue";


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/question1',
        component: FirstQuestion
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes, 
    scrollBehavior(){
        return {
            top: 0
        }
    }
});

export default router;