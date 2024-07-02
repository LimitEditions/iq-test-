<template>
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (1).png" alt="Bar"></div>
        <h2 class="question-headding">Укажите ваш возраст:</h2>
        <div class="question-input">
            <label v-for="age in ages" :key="age.age" :class="{ 'question-choose': true, 'selected': selectedGender === age.age }"> <input class="question-choose-radio" type="radio" :value="age.age" v-model="selectedGender" @change="checkSelection"/> <span > {{ age.age }}</span> </label>
        </div>
        <router-link to="/question3">
            <MainBtn :button="button" backgroundColor='#DADADA' textColor="#8E8E8E" border="none" borderRadius="50px"
                boxSizing="border-box" :disabled="!selectedGender" :isActive="selectedGender !== null" />
        </router-link>
    </div>
</template>

<script>
import MainBtn from './MainBtn.vue'
import '../assets/qutstionStyle.css'

export default {
    data() {
        return {
            button: "Далее",
            selectedGender: null,
            ages:[
                {
                    age: 'До 18'
                },
                {
                    age: 'От 18 до 28'
                },
                {
                    age: 'От 29 до 35'
                },
                {
                    age: 'От 36'
                }
            ]
        }
    },
    components: {
        MainBtn,
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