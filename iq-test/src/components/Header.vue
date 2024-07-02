<template>
  <header>
    <div class="heading">
      <div @click="toggleMenu" class="menu">
        <div class="menu-bread"></div>
        <div class="menu-bread"></div>
        <div class="menu-bread"></div>
      </div>
      <div class="show" v-if="showImageAndText">
        <img src="../assets/img/brain.png" alt="brain" />
        <p :class="['menu-text', { 'menu-text-finish': isFinishPage }]">
          {{ displayText }}
        </p>
      </div>
      <div v-else class="spacer"></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    test: {
      type: String,
      default: "тест на определение IQ",
    },
    toggleMenu: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showImageAndText: true,
      displayText: this.test,
    };
  },
  computed: {
    isFinishPage() {
      return this.$route.path === "/finish";
    },
  },
  mounted() {
    this.updateShowImageAndText();
  },
  watch: {
    $route() {
      this.updateShowImageAndText();
    },
  },
  methods: {
    updateShowImageAndText() {
      this.showImageAndText = this.$route.path !== "/";
      this.displayText = this.$route.path === "/finish" ? "ГОТОВО!" : this.test;
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  width: 320px;
  height: 46px;
  display: flex;
  align-items: center;
  background: rgb(24, 24, 24);
}

.menu {
  margin-left: 15px;
  margin-right: 9px;
  cursor: pointer;
}

.menu-bread {
  width: 24px;
  height: 2.67px;
  background: rgb(218, 218, 218);
}

.menu-bread:not(:last-child) {
  margin-bottom: 4px;
}

.show {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}
.menu-text {
  color: rgb(255, 199, 0);
  font-family: Yeseva One;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-transform: uppercase;
}

.menu-text-finish {
  color: rgb(255, 199, 0);
  font-family: Yeseva One;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  text-transform: uppercase;
}

.spacer {
  width: 270px;
}
</style>
