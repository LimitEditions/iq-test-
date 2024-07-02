<template>
    <div v-if="result" class="api-result-text api-result">
      <h3>{{ result.name }}</h3>
      <p>Рост: {{ result.height }} см</p>
      <p>Вес: {{ result.mass }} кг</p>
      <p>Цвет волос: {{ result.hair_color }} </p>
      <p>Цвет кожи: {{ result.skin_color }} </p>
      <p>Цвет глаз: {{ result.eye_color }}</p>
      <p>День рождения: {{ result.birth_year }}</p>
      <p>Пол: {{ result.gender }} </p>
      <p>Дом: {{ homeworldName }} </p>
      <p v-for="(film, index) in films" :key="index">Фильм: {{ film }}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      result: null,
       films: [],
      homeworldName: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://swapi.dev/api/people/1/");
        this.result = response.data;
        const homeworldResponse = await axios.get(this.result.homeworld);
        this.homeworldName = homeworldResponse.data.name;
        const filmPromises = this.result.films.map(filmUrl => axios.get(filmUrl));
        const filmResponses = await Promise.all(filmPromises);
        this.films = filmResponses.map(filmResponse => filmResponse.data.title);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    },
  },
};
</script>

<style scoped>
.api-result {
    width: 320px;
  height: 568px;
  background: url(../assets/img/backgroundfooter.png);
  text-align: center;
  margin-top: 20px;
}

.api-result-text {
    margin-top: 0;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
