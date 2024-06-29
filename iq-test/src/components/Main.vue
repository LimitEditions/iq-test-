<template>
  <main class="main">
    <div>
      <h3 class="main-subheading">Пройдите точный и быстрый</h3>
      <h1 class="main-heading">{{ test }}</h1>
      <router-link to="/question1"><MainBtn isActive='true'/></router-link>
      <p class="main-text">
        <span class="main-colortext"
          >И получите рекомендации по развитию своего интеллекта</span
        > <br/> и улучшению финансового благосостояния и личной жизни
      </p>
      <button class="main-morebtn">
        <img src="../assets/img/icon.png" alt="icon"/>
      </button>
      <p class="main-more">Подробнее</p>
    </div>
  </main>
</template>

<script>
import MainBtn from './MainBtn.vue'
export default {
    components: {
        MainBtn
    },
  props: {
    test: String,
  },
};
</script>

<style scoped>
.main {
  background: url(../assets/img/backgroundMain.png);
  height: 522px;
  display: flex;
}

.main-subheading {
  margin-top: 27px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  font-family: PT Serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

.main-heading {
    width: 252px;
  color: rgb(255, 199, 0);
  font-family: Yeseva One;
  font-size: 30px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 150px;
}

.main-text {
    width: 269px;
    margin-top: 22px;
    font-family: PT Serif;
font-size: 15px;
font-weight: 700;
line-height: 19px;
letter-spacing: 5%;
text-align: center;
color: rgb(255, 255, 255);
}

.main-colortext{
    color: rgb(255, 199, 0);
}

.main-morebtn {
    margin-top: 11px;
    display: flex;
    width: 16px;
    height: 16px;
    border-radius: 25px;
    justify-content: center;
  align-items: center;
}

.main-more{
    color: rgb(255, 255, 255);
font-family: PT Serif;
font-size: 8px;
line-height: 11px;
text-align: center;
margin-top: 3px;
}
</style>
