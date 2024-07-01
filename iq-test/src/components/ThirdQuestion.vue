<template>
<div>
    <Header />
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (2).png" alt="Bar"></div>
        <h2 class="question-headding">Выберите лишнее:</h2>
        <div class="question-input">
            <label v-for="choose in chooses" :key="choose.choose" :class="{ 'question-choose': true, 'selected': selectedGender === choose.choose }"> <input class="question-choose-radio" type="radio" :value="choose.choose" v-model="selectedGender" @change="checkSelection"/> <span > {{ choose.choose }}</span> </label>
        </div>
        <router-link to="/question4">
            <MainBtn :button="button" backgroundColor='#DADADA' textColor="#8E8E8E" border="none" borderRadius="50px"
                boxSizing="border-box" :disabled="!selectedGender" @click="handleNext"
                :isActive="selectedGender !== null" />
        </router-link>
    </div>
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
                    choose: 'Дом'
                },
                {
                    choose: 'Шалаш'
                },
                {
                    choose: 'Бунгало'
                },
                {
                    choose: 'Скамейка'
                },
                {
                    choose: 'Хижина'
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