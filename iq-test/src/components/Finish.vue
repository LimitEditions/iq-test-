<template>
  <div class="question finish">
    <h1 class="finish-headding">Ваш результат рассчитан:</h1>
    <h2 class="finish-subheadding">
      <u>Вы относитесь к 3% </u>респондентов, чей уровень интеллекта более чем
      на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </h2>
    <h2 class="finish-result">Скорее получите свой результат!</h2>
    <div class="finish-desc">
      <h3 class="finish-desc-text">
        В целях защиты персональных данных результат теста, их подробная
        интерпретация и рекомендации доступны в виде голосового сообщения по
        звонку с вашего мобильного телефона
      </h3>
    </div>
    <h4 class="finish-call">
      Звоните скорее, запись доступна всего <br />
      <span class="finish-call-big">10:00 </span>минут
    </h4>
    <div class="img-container">
      <img
        class="result-img-left"
        src="../assets/img/lightning.png"
        alt="lightning"
      />
      <img
        class="result-img-right"
        src="../assets/img/lightning.png"
        alt="lightning"
      />
    </div>
    <router-link to="/call"
      ><div class="finish-tel" @click="call">
        <img src="../assets/img/tel.png" alt="tel" />
        <h3 class="finish-tel-text">Позвонить и прослушать результат</h3>
      </div></router-link
    >
    <h6 class="agree">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
    </h6>
  </div>
</template>

<script>
import "../assets/qutstionStyle.css";

export default {
  data() {
    return {
      button: "Далее",
      selectedGender: null,
      test: "ГОТОВО!",
    };
  },
  methods: {
    checkSelection() {
      if (this.selectedGender !== null) {
      }
    },
    call() {
      this.$router.push("/call");
    },
  },
};
</script>

<style scoped>
.finish {
  height: 610px;
  display: block;
  position: relative;
  overflow: hidden;
}

.finish-headding {
  margin-top: 8px;
  margin-bottom: 9px;
  color: rgb(255, 255, 255);
  font-family: PT Serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
}

.finish-subheadding {
  width: 268px;
  color: rgb(255, 255, 255);
  font-family: PT Serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
}

.finish-result {
  margin-top: 22px;
  margin-bottom: 12px;
  color: rgb(59, 222, 124);
  font-family: PT Serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
}

.finish-desc {
  width: 256px;
  height: 114px;
  border-radius: 6px;
  background: rgb(28, 39, 65);
}

.finish-desc-text {
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

.finish-call {
  margin-top: 8px;
  margin-bottom: 6px;
  color: rgb(59, 222, 124);
  font-family: PT Serif;
  font-size: 11px;
  font-weight: 400;
  text-align: center;
}

.finish-call-big {
  font-size: 20px;
}

.img-container {
  position: relative;
}

.result-img-left {
  position: absolute;
  width: 200px;
  height: 200px;
  right: -130px;
  top: 6px;
}

.result-img-right {
  position: absolute;
  top: -62px;
  right: 203px;
}

.finish-tel {
  z-index: 1;
  padding-left: 15px;
  width: 290px;
  height: 92px;
  border-radius: 5px;
  background: rgb(235, 27, 0);
  display: flex;
  align-items: center;
  gap: 18px;
  cursor: pointer;
  margin-bottom: 120px;
  position: sticky;
}

.finish-tel-text {
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 5%;
  text-align: left;
}

.agree {
  width: 294px;
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
