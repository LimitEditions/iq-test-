<template>
  <menu>
    <div :class="{ 'menu-visible': isVisible, 'menu-hidden': !isVisible }">
      <div class="menu-close">
        <img src="../assets/img/close.png" alt="close" @click="toggleMenu"/>
      </div>
      <div class="point">
        <router-link to="/" ><h2 class="point-text">Главная</h2></router-link>
        <h2 class="point-text">Информация о тесте</h2>
        <router-link to="/question1"><h2 class="point-text">пройти тест</h2></router-link>
      </div>
    </div>
  </menu>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    toggleMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu-hidden {
  display: none;
}
.menu-visible {
  position: relative;
  height: 568px;
  display: block;
  background: rgb(24, 24, 24);
  display: flex;
  flex-direction: column;
}

.menu-close {
margin-top: 18px;
margin-left: 279px;
margin-bottom: 64px;
cursor: pointer;
}

.point{
display: flex;
flex-direction: column;
gap: 27px;
margin: 0;
}

.point-text{
    color: rgb(255, 255, 255);
font-family: Roboto;
font-size: 16px;
font-weight: 300;
line-height: 22px;
text-align: left;
text-transform: uppercase;
margin-left: 23px;
}

.point-text:hover{
    color: rgb(244, 206, 12);
    cursor: pointer;
}
</style>
