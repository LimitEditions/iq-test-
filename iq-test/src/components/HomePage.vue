<template>
  <div class="cont">
    <Main :test="test" />
    <MainDescription />
    <StartTest />
    <StartTestDecs />
  </div>
</template>

<script>
import Main from "./Main.vue";
import MainDescription from "./MainDescription.vue";
import StartTest from "./StartTest.vue";
import StartTestDecs from "./StartTestDecs.vue";

export default {
  data() {
    return {
      test: "тест на определение IQ",
    };
  },
  components: {
    Main,
    MainDescription,
    StartTest,
    StartTestDecs,
  },
};
</script>

<style lang="scss" scoped></style>
