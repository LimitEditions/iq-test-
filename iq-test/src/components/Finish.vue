<template>
    <Header />
    <div class=" question finish">
        <h1 class="finish-headding">Ваш результат рассчитан:</h1>
        <h2 class="finish-subheadding"><u>Вы относитесь к 3% </u>респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!</h2>
        <h2 class="finish-result">Скорее получите свой результат!</h2>
        <div class="finish-desc">
            <h3 class="finish-desc-text">В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона</h3>
        </div>
        <h4 class="finish-call">Звоните скорее, запись доступна всего <br> <span class="finish-call-big">10:00 </span>минут</h4>
        <img class="result-img-left" src="../assets/img/lightning-left.png" alt="lightning">
        <div class="finish-tel">
            <img src="../assets/img/tel.png" alt="tel">
            <h3 class="finish-tel-text">Позвонить и прослушать результат</h3>
        </div>
        <img class="result-img-right" src="../assets/img/lightning.png" alt="lightning">
        <h6 class="agree">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,</h6>
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
            test: "ГОТОВО!"
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
.finish{

}

.finish-headding{
margin-top: 18px;
margin-bottom: 13px;
    color: rgb(255, 255, 255);
font-family: PT Serif;
font-size: 15px;
font-weight: 700;
line-height: 16px;
letter-spacing: 10%;
text-align: center;
text-transform: uppercase;
}

.finish-subheadding{
    color: rgb(255, 255, 255);
font-family: PT Serif;
font-size: 14px;
font-weight: 400;
line-height: 18px;
text-align: center;
}

.finish-result{
    margin-top: 22px;
    margin-bottom: 12px;
    color: rgb(59, 222, 124);
font-family: PT Serif;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 10%;
text-align: center;
text-transform: uppercase;
}

.finish-desc{
    width: 256px;
    height: 114px;
    border-radius: 6px;
background: rgb(28, 39, 65);
}

.finish-desc-text{
    padding: 15px 12px;
    color: rgb(255, 255, 255);
font-family: Roboto;
font-size: 8px;
font-weight: 500;
line-height: 14px;
letter-spacing: 2px;
text-align: center;
text-transform: uppercase;
}

.finish-call{
    margin-top: 8px;
    margin-bottom: 6px;
    color: rgb(59, 222, 124);
font-family: PT Serif;
font-size: 11px;
font-weight: 400;
line-height: 30px;
letter-spacing: 10%;
text-align: center;
}

.finish-call-big{
font-size: 20px;
}

.result-img-left{
    position: absolute;
width: 165px;
height: 165px;
right: 275px;
top: 390px;
}

.result-img-right{

}

.finish-tel{
    width: 290px;
    height: 92px;
    border-radius: 5px;
background: rgb(235, 27, 0);
}

.finish-tel-text{
    color: rgb(255, 255, 255);
font-family: Roboto;
font-size: 15px;
font-weight: 900;
line-height: 18px;
letter-spacing: 5%;
text-align: left;
}

.agree{
    color: rgba(255, 255, 255, 0.5);
font-family: Roboto;
font-size: 7px;
font-weight: 400;
line-height: 9px;
letter-spacing: 3px;
text-align: center;
text-transform: uppercase;
}
</style>