<template>
  <div>
    <Header />
    <div v-if="result" class="api-result-text api-result">
      <h3>{{ result.name }}</h3>
      <p>Рост: {{ result.height }} см</p>
      <p>Вес: {{ result.mass }} кг</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      result: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://swapi.dev/api/people/1/")
        .then((response) => {
          this.result = response.data;
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
        });
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
