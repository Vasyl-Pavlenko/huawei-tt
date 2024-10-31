<template>
  <div id="app">
    <MyLoader v-if="isLoading" />
    <RandomQuote v-else />
    
    <footer class="footer">
      by <a class="footer-link" href="https://github.com/Vasyl-Pavlenko">
        Vasyl Pavlenko
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RandomQuote from './components/RandomQuote.vue';
import MyLoader from './components/MyLoader.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
}

body {
  background-color: #333;
  color: #333;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  text-align: center;
  display: block;
  margin: 0 auto 20px;
  font-size: 1em;
  color: #fff;
}

.footer-link {
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  transition: all 0.5s linear;
}

.footer-link:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
