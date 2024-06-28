<template>
  <header>
    <div class="heading">
      <div @click="toggleMenu">
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div>
      </div>
      <div v-if="showImageAndText" class="heading">
        <img src="../assets/img/brain.png" alt="brain" />
        <p class="menu-text">{{ test }}</p>
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
    },
    toggleMenu: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
        showImageAndText: true,
    };
  },
  mounted() {
      if (this.$route.path === '/') {
      this.showImageAndText = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.heading {
    height: 46px;
  display: flex;
  align-items: center;
  gap: 9px;
}

.menu {
  width: 24px;
  height: 2.67px;
  margin-left: 15px;
  margin-bottom: 4px;
  background: rgb(218, 218, 218);
  cursor: pointer;
}

.menu-text{
    color:rgb(255, 199, 0);
font-size: 12px;
text-transform: uppercase;
}

.spacer {
  width: 270px;
}
</style>
