<template>
    <Header />
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (5).png" alt="Bar"></div>
        <h2 class="question-headding">Выберите цвет, который сейчас наиболее Вам приятен:</h2>
        <div class="question-input">
            <img v-for="choose in chooses" :key="choose.id" :class="{ 'question-choose': true, 'selected': selectedGender === choose.img }" :img="choose.img" :alt="choose.img" @change="checkSelection"/>
        </div>
        <router-link to="/question7">
            <MainBtn :button="button" backgroundColor='#DADADA' textColor="#8E8E8E" border="none" borderRadius="50px"
                boxSizing="border-box" :disabled="!selectedGender" @click="handleNext"
                :isActive="selectedGender !== null" />
        </router-link>
    </div>
</template>

<script>
import Header from './Header.vue'
import MainBtn from './MainBtn.vue'
import '../assets/qutstionStyle.css'

export default {
    data() {
        return {
            button: "Далее",
            selectedGender: null,
            chooses:[
                {
                    id: 1,
                    img: require('@/assets/img/Rectangle1.png')
                },
                {
                    id: 2,
                    img: require('@/assets/img/Rectangle2.png')
                },
                {
                    id: 3,
                    img: require('@/assets/img/Rectangle3.png')
                },
                {
                    id: 4,
                    img: require('@/assets/img/Rectangle4.png')
                },
                {
                    id: 5,
                    img: require('@/assets/img/Rectangle5.png')
                },
                {
                    id: 6,
                    img: require('@/assets/img/Rectangle6.png')
                },
                {
                    id: 7,
                    img: require('@/assets/img/Rectangle7.png')
                },
                {
                    id: 8,
                    img: require('@/assets/img/Rectangle8.png')
                },
                {
                    id: 9,
                    img: require('@/assets/img/Rectangle9.png')
                }
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

</style>