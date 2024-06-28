<template>
  <div>
    <button class="main-btn" :style="buttonStyle">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'MainBtn',
  props: {
    backgroundColor: {
      type: String,
      default: 'rgb(255, 199, 0)'
    },
    textColor: {
      type: String,
      default: 'rgb(13, 12, 17)'
    },
    border: {
      type: String,
      default: 'none'
    },
    borderRadius: {
      type: String,
      default: '50px'
    },
    boxSizing: {
      type: String,
      default: 'content-box'
    },
    button: {
      type: String,
      default: 'Пройти тест'
    }
  },
  computed: {
    buttonStyle() {
      return {
        '--bg-color': this.backgroundColor,
        '--text-color': this.textColor,
        'border': this.border,
        'border-radius': this.borderRadius,
        'box-sizing': this.boxSizing
      };
    }
  }
};
</script>

<style scoped>
.main-btn {
  width: 189px;
  height: 41px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    var(--bg-color),
    var(--bg-color) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
