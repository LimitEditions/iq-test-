<template>
<div>    
    <Header />
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (5).png" alt="Bar"></div>
        <h2 class="question-headding">Выберите цвет, который сейчас наиболее Вам приятен:</h2>
        <div class="question-img">
            <img v-for="choose in chooses" :key="choose.id" :class="{ 'question-choose-img': true, 'selected-img': selectedGender === choose.img }" :src="choose.img" :alt="choose.img" @click="selectedGender = choose.img"/>
        </div>
        <router-link to="/question7">
            <MainBtn :button="button" backgroundColor='#DADADA' textColor="#8E8E8E" border="none" borderRadius="50px"
                boxSizing="border-box" :disabled="!selectedGender" @click="handleNext"
                :isActive="selectedGender !== null" />
        </router-link>
    </div></div>
</template>

<script>
import Header from './Header.vue'
import MainBtn from './MainBtn.vue'
import '../assets/qutstionStyle.css'
import img1 from '@/assets/img/Rectangle1.png'
import img2 from '@/assets/img/Rectangle2.png'
import img3 from '@/assets/img/Rectangle3.png'
import img4 from '@/assets/img/Rectangle4.png'
import img5 from '@/assets/img/Rectangle5.png'
import img6 from '@/assets/img/Rectangle6.png'
import img7 from '@/assets/img/Rectangle7.png'
import img8 from '@/assets/img/Rectangle8.png'
import img9 from '@/assets/img/Rectangle9.png'

export default {
    data() {
        return {
            button: "Далее",
            selectedGender: null,
            chooses:[
                { id: 1, img: img1 },
                { id: 2, img: img2 },
                { id: 3, img: img3 },
                { id: 4, img: img4 },
                { id: 5, img: img5 },
                { id: 6, img: img6 },
                { id: 7, img: img7 },
                { id: 8, img: img8 },
                { id: 9, img: img9 }
            ]
        }
    },
    components: {
        Header, MainBtn,
    },
    methods: {
        checkSelection() {
            if (this.selectedGender !== null) { }
        }
    }
}
</script>

<style scoped>
.question-img{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 21px;

}

.selected-img{
    box-sizing: border-box;
border: 6px solid rgb(255, 199, 0);
}
</style>