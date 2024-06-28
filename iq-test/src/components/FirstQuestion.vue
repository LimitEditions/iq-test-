<template>
    <div>
        <Header/>
        <img src="../assets/img/Bar.png" alt="Bar">
        <h2>Ваш пол:</h2>
        <div>
      <label>
        <input type="radio" value="male" v-model="selectedGender" /> Мужской
      </label>
    </div>
    <div>
      <label>
        <input type="radio" value="female" v-model="selectedGender" /> Женский
      </label>
    </div>
        <MainBtn :button="button"
        backgroundColor='#DADADA'
      textColor="#8E8E8E"
      border="none"
      borderRadius="50px"
      boxSizing="border-box"/>
    </div>
</template>

<script>
import Header from './Header.vue'
import MainBtn from './MainBtn.vue'

export default {
    data() {
        return {
            button: "Далее"
        }
    },
    components: {
            Header,MainBtn, 
        }
    }
</script>

<style scoped>

</style>