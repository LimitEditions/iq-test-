<template>
    <Header :test="test"/>
    <div class="question load">
        <div><img class="question-bar" src="../assets/img/Bar (13).png" alt="Bar"></div>
        <h1 class="question-headding-load">Обработка <br>результатов</h1>
        <img src="../assets/img/load.png" alt="load">
        <h2 class="load-text">Определение стиля мышления...........
            ........... ............................................</h2>
    </div>
</template>

<script>
import Header from './Header.vue'
import '../assets/qutstionStyle.css'

export default {
    data() {
        return {
            button: "Далее",
            selectedGender: null,
        }
    },
    components: {
        Header
    },
    methods: {
        checkSelection() {
            if (this.selectedGender !== null) { }
        }
    }
}
</script>

<style scoped>
.load {
    justify-content: normal;
}

.question-headding-load {
    margin-top: 49px;
    margin-bottom: 33px;
    color: rgb(255, 255, 255);
    font-family: PT Serif;
    font-size: 23px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
}

.load-text {
    margin: 49px 22px 33px;
    color: rgb(255, 255, 255);
    font-family: PT Serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
}
</style>