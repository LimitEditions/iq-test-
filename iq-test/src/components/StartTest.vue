<template>
  <div class="start-test">
    <h3 class="start-test-text">
      Также по результатам теста <span class="start-test-b">вы получите</span> подробные советы по
      определению наиболее перспективной
      <span class="start-test-b">для вашего типа</span> <strong>интеллекта</strong> <span class="start-test-b">сферы деятельности,</span>
      которая принесет вам скорейший финансовый результат.
    </h3>
    <img class="start-test-img" src="../assets/img/analisBrain.png" alt="analisBrain" />
    <router-link to="/question1"><MainBtn isActive='true'/></router-link>
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
.start-test {
  height: 500px;
  padding-top: 38px;
  background: rgb(249, 248, 248);
}

.start-test-text{
    width: 298px;
    font-family: PT Serif;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.05em;
font-weight: 400;
text-align: left;
margin-bottom: 38px;
}

.start-test-b{
    text-transform: uppercase;
    font-weight: 700;
}

.start-test-img{
    display: flex;
}
</style>
