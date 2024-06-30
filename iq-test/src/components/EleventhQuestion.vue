<template>
    <Header />
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (10).png" alt="Bar"></div>
        <h2 class="question-headding">Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: </h2>
        <img src="../assets/img/piramide.png" alt="piramide">
        <div class="question-input">
            <label v-for="choose in chooses" :key="choose.choose" :class="{ 'question-choose': true, 'selected': selectedGender === choose.choose }"> <input class="question-choose-radio" type="radio" :value="choose.choose" v-model="selectedGender" @change="checkSelection"/> <span > {{ choose.choose }}</span> </label>
        </div>
        <router-link to="/finish">
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
                    choose: 'Оно остроконечное'
                },
                {
                    choose: 'Оно устойчиво'
                },
                {
                    choose: 'Оно находится в состоянии равновесия'
                },
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
    .question-choose input[type="radio"]+span {
  font-size: 16px;
  font-weight: 400;
  line-height:17px;
  text-transform: none;
}
</style>