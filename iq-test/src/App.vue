<template>
  <div class="container">
    <Header :test="test" :toggleMenu="toggleMenu"/>
    <Menu :isVisible="isMenuVisible" :toggleMenu="toggleMenu" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import { ref } from 'vue';
export default {
  name: 'App',
  data() {
    return {
    };
  },
  components: {
    Header, Menu,
  },
  setup() {
    const isMenuVisible = ref(false);

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value;
    };

    return {
      isMenuVisible,
      toggleMenu
    };
  }

};
</script>


<style scoped>
.container {
  width: 320px;
  display: flex;
  align-items: center;
  background-color: #272727;
  display: flex;
  flex-direction: column;
}
</style>
