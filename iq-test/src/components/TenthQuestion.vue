<template>
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (9).png" alt="Bar"></div>
        <h2 class="question-headding">Вам привычнеее и важнее:</h2>
        <div class="question-input">
            <label v-for="choose in chooses" :key="choose.choose"
                :class="{ 'question-choose question-choose-manytext': true, 'selected': selectedGender === choose.choose }">
                <input class="question-choose-radio" type="radio" :value="choose.choose" v-model="selectedGender"
                    @change="checkSelection" /> <span> {{ choose.choose }}</span> </label>
        </div>
        <router-link to="/question11">
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
            chooses: [
                {
                    choose: 'Наслаждаться каждой минутой проведенного времени'
                },
                {
                    choose: 'Быть устремленными мыслями в будущее'
                },
                {
                    choose: 'Учитывать в ежедневной практике прошлый опыт'
                },
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
.question-choose-manytext {
    height: 78px;

}

.question-choose-manytext input[type="radio"]+span {
    margin: 0;
    line-height: 20px;
    text-transform: none;
}
</style>