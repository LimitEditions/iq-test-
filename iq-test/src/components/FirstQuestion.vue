<template>
  <div class="question">
    <div>
      <img class="question-bar" src="../assets/img/Bar.png" alt="Bar">
    </div>
    <div>
      <h2 class="question-headding">Ваш пол:</h2>
      <div class="question-input">
        <label v-for="gender in genders" :key="gender.gender"
          :class="{ 'question-choose': true, 'selected': selectedGender === gender.gender }"> <input
            class="question-choose-radio" type="radio" :value="gender.gender" v-model="selectedGender"
            @change="checkSelection" /> <span> {{ gender.gender }}</span> </label>
      </div>
    </div>
    <div>
      <router-link to="/question2">
        <MainBtn :button="button" backgroundColor='#DADADA' textColor="#8E8E8E" border="none" borderRadius="50px"
          boxSizing="border-box" :disabled="!selectedGender" :isActive="selectedGender !== null" />
      </router-link>
    </div>
  </div>
</template>

<script>
import MainBtn from './MainBtn.vue'
import '../assets/qutstionStyle.css'

export default {
  data() {
    return {
      test: 'тест на определение IQ',
      button: "Далее",
      selectedGender: null,
      genders: [
        {
          gender: 'Мужской'
        },
        {
          gender: "Женский"
        }
      ]
    }
  },
  components: {
MainBtn,
  },
  methods: {
    checkSelection() {
      if (this.selectedGender !== null) { }
    }
  }
}
</script>

<style scoped>

</style>