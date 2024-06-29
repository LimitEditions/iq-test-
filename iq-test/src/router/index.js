import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import FirstQuestion from "@/components/FirstQuestion.vue";
import SecondQuestion from '@/components/SecondQuestion.vue';
import ThirdQuestion from '@/components/ThirdQuestion.vue';
import FourthQuestion from '@/components/FourthQuestion.vue';
import FifhtQuestion from '@/components/FifhtQuestion.vue';
import SixthQuestion from '@/components/SixthQuestion.vue';
import SeventhQuestion from '@/components/SeventhQuestion.vue';
import EighthQuestion from '@/components/EighthQuestion.vue';
import NinthQuestion from '@/components/NinthQuestion.vue';
import TenthQuestion from '@/components/TenthQuestion.vue';
import EleventhQuestion from '@/components/EleventhQuestion.vue';
import TwelfthQuestion from '@/components/TwelfthQuestion.vue';
import ThirteenthQuestion from '@/components/ThirteenthQuestion.vue';


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/question1',
        component: FirstQuestion
    },
    {
        path: '/question2',
        component: SecondQuestion
    },
    {
        path: '/question3',
        component: ThirdQuestion
    },
    {
        path: '/question4',
        component: FourthQuestion
    },
    {
        path: '/question5',
        component: FifhtQuestion
    },
    {
        path: '/question6',
        component: SixthQuestion
    },
    {
        path: '/question7',
        component: SeventhQuestion
    },
    {
        path: '/question8',
        component: EighthQuestion
    },
    {
        path: '/question9',
        component: NinthQuestion
    },
    {
        path: '/question10',
        component: TenthQuestion
    },
    {
        path: '/question11',
        component: EleventhQuestion
    },
    {
        path: '/question12',
        component: TwelfthQuestion
    },
    {
        path: '/question13',
        component: ThirteenthQuestion
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