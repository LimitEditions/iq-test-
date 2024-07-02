<template>
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (4).png" alt="Bar"></div>
        <h2 class="question-headding">Продолжайте числовой ряд: <br> 18 20 24 32</h2>
        <div class="question-input">
            <label v-for="choose in chooses" :key="choose.choose" :class="{ 'question-choose': true, 'selected': selectedGender === choose.choose }"> <input class="question-choose-radio" type="radio" :value="choose.choose" v-model="selectedGender" @change="checkSelection"/> <span > {{ choose.choose }}</span> </label>
        </div>
        <router-link to="/question6">
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
            chooses:[
                {
                    choose: '62'
                },
                {
                    choose: '48'
                },
                {
                    choose: '74'
                },
                {
                    choose: '57'
                },
                {
                    choose: '60'
                },
                {
                    choose: '77'
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