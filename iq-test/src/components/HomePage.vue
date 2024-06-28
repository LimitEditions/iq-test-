<template>
    <div class="cont">
        <Header :test="test" :toggleMenu="toggleMenu"/>
        <Menu :isVisible="isMenuVisible" :toggleMenu="toggleMenu" />
        <Main :test="test"/>
        <MainDescription/>
        <StartTest/>
        <StartTestDecs/>
    </div>
</template>

<script>
import Header from './Header.vue';
import Menu from './Menu.vue';
import Main from './Main.vue';
import MainDescription from './MainDescription.vue';
import StartTest from './StartTest.vue';
import StartTestDecs from './StartTestDecs.vue';
import { ref } from 'vue';

export default {
        data() {
            return {
                test: "тест на определение IQ",
            }
        },
    components: {
            Header, Menu, Main, MainDescription, StartTest, StartTestDecs
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
    }
</script>

<style lang="scss" scoped>

</style>