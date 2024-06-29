<template>
  <div>
    <button class="main-btn" :style="buttonStyle" :disabled="disabled"
    @click="handleClick">{{ button }}</button>
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonStyle() {
      return {
        '--bg-color': this.isActive ? 'rgb(255, 199, 0)' : 'rgb(218, 218, 218)',
        '--text-color': this.isActive ? 'rgb(13, 12, 17)' : 'rgb(142, 142, 142)',
        'border': this.border,
        'border-radius': this.borderRadius,
        'box-sizing': this.boxSizing
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
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
