<template>
  <div class="start-test-desc">
    <h3 class="start-test-desc-time">
      Прохождение теста займет у вас не более
      <span class="start-test-desc-time-color">12 минут</span>, а его результаты
      вы сможете
      <span class="start-test-desc-time-color"> использовать всю жизнь.</span>
    </h3>
    <div class="img-container">
      <img class="img-right" src="../assets/img/lightning.png" alt="lightning" />
      <img class="img-left" src="../assets/img/lightning.png" alt="lightning" />
    </div>
    <div class="start-test-desc-block">
      <h4 class="start-test-desc-text">
        Профессиональная интерпретация и детально
        <strong>проработанные рекомендации</strong> позволят вам качественно
        <strong>изменить все аспекты своей жизни:</strong> от финансового до
        любовного.
      </h4>
    </div>
    <router-link to="/question1"
      ><MainBtn
        backgroundColor="none"
        textColor="white"
        border="1px solid rgb(255, 255, 255)"
        borderRadius="50px"
        boxSizing="border-box"
    /></router-link>
    <div class="footer">
      <img class="copirait" src="../assets/img/copirait.png" alt="copirait" />
      <p>2019</p>
    </div>
  </div>
</template>

<script>
import MainBtn from "./MainBtn.vue";
export default {
  components: {
    MainBtn,
  },
};
</script>

<style scoped>
.start-test-desc {
  background: url(../assets/img/backgroundfooter.png) no-repeat center/cover;
  width: 320px;
  height: 533px;
  padding-top: 56px;
  position: relative;
  overflow: hidden;
}

.start-test-desc-time {
  width: 262px;
  font-family: Merriweather;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}

.start-test-desc-time-color {
  font-family: Merriweather;
  font-weight: 900;
  color: rgb(255, 199, 0);
}

.img-container {
  position: relative; 
}

.img-right {
  position: absolute;
  width: 200px;
  height: 256px;
  right: -75px;
  top: -115px;
  transform: rotate(74.42deg);
}

.img-left {
  position: absolute;
  width: 185px;
  height: 207px;
  top: 130px;
  left: -64px;
  transform: rotate(4.42deg);
}

.start-test-desc-block {
  position: sticky;
  border-radius: 20px;
  background: rgba(243, 243, 242, 0.8);
  width: 303px;
  height: 216px;
  margin-bottom: 33px;
  z-index: 1;
}

.start-test-desc-text {
  color: rgb(24, 24, 24);
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  padding: 29px 15px 31px 15px;
}

.color-btn {
  box-sizing: border-box;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50px;
  color: rgb(255, 255, 255);
  z-index: 1;
}

.footer {
  margin-top: 52px;
  width: 44px;
  height: 18px;
  gap: 5px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
}

.copirait {
  width: 8px;
  height: 8px;
}
</style>
