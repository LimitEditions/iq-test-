<template>
<div>
    <Header />
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (11).png" alt="Bar"></div>
        <h2 class="question-headding">Выберите правильную фигуру из четырёх пронумерованных.</h2>
        <img src="../assets/img/star.png" alt="star">
        <div class="line"></div>
        <div class="question-input">
            <div class="question-group-square-min">
                <div v-for="item in chooses" :key="item.choose"
                    :class="{ 'question-square': true, 'selected-square': selectedGender === item.choose }"
                    @click="selectedGender = item.choose">{{ item.choose }}</div>
            </div>
        </div>
        <router-link to="/question13">
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
            chooses: [
                {
                    choose: '34'
                },
                {
                    choose: '36'
                },
                {
                    choose: '53'
                },
                {
                    choose: '44'
                },
                {
                    choose: '66'
                },
                {
                    choose: '42'
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
.question-group-square-min {
    display: flex;
    gap: 8px;
}

.question-square {
    width: 41px;
    height: 41px;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.selected-square {
    box-sizing: border-box;
    border: 6px solid rgb(255, 199, 0);
}

.line {
    width: 320px;
    height: 4px;
    background: rgb(242, 243, 243);
    opacity: 0.15;

}
</style>