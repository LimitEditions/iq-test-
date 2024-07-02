<template>
    <div class="question">
        <div><img class="question-bar" src="../assets/img/Bar (8).png" alt="Bar"></div>
        <h2 class="question-headding">Выберите правильную фигуру из четырёх пронумерованных.</h2>
        <img src="../assets/img/human.png" alt="human">
        <div class="question-group-square">
                <div v-for="item in chooses" :key="item.choose"
                    :class="{ 'question-square': true, 'selected-square': selectedGender === item.choose }"
                    @click="selectedGender = item.choose">{{ item.choose }}</div>
        </div>
        <router-link to="/question10">
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
                    choose: '1'
                },
                {
                    choose: '2'
                },
                {
                    choose: '3'
                },
                {
                    choose: '4'
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
.question-group-square {
    display: flex;
    gap: 28px;
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
</style>