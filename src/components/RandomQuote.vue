<template>
  <div>
    <h1 class="app-title">Random Quote Machine</h1>
    <div v-if="isError">{{ errorMessage }}</div>
    <div v-else class="wrapper quote-box" id="quote-box">
      <div class="quote-text" id="text">
        <FontAwesomeIcon :icon="['fas', 'quote-left']" />
        <span>{{ quote }}</span>
      </div>

      <div class="quote-author" id="author">- {{ author }}</div>

      <div class="buttons">
        <button
          @click="tweetQuoteUrl"
          class="button telegram-quote"
          title="Share this quote on Telegram!"
        >
          <FontAwesomeIcon :icon="['fab', 'twitter']" class="icon" />
        </button>

        <button
          @click="telegramQuoteUrl"
          class="button telegram-quote"
          title="Share this quote on Telegram!"
        >
          <FontAwesomeIcon :icon="['fab', 'telegram']" class="icon" />
        </button>

        <button
          @click="facebookQuoteUrl"
          class="button telegram-quote"
          title="Share this quote on Facebook!"
        >
          <FontAwesomeIcon :icon="['fab', 'facebook']" class="icon" />
        </button>

        <button 
          class="button new-quote" 
          id="new-quote" 
          @click="getQuote"
        >
          New quote
        </button>
      </div>
    </div>

    <h2 class="history-title">Quote History</h2>

    <ul class="history-list">
      <li class="history-item" v-for="(item, index) in history" :key="index">
        {{ item }}
        <button class="copy-button" @click="copyToClipboard(item)">Copy</button>
      </li>
    </ul>

    <div v-if="showToast" class="toast">{{ toastMessage }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faQuoteLeft, faTwitter, faTumblr, faTelegram, faFacebook);

const URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

const quotes = ref([]);
const quote = ref('');
const author = ref('');
const isLoading = ref(true);
const isError = ref(false);
const errorMessage = ref('Oops... Something went wrong');
const history = ref(JSON.parse(sessionStorage.getItem('quoteHistory')) || []);

const showToast = ref(false);
const toastMessage = ref('');

const setRandomQuoteStyles = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = color;
  document.body.style.color = color;
  document.querySelectorAll('.button').forEach((button) => {
    button.style.backgroundColor = color;
  });
};

const fetchData = async () => {
  try {
    isLoading.value = true;

    const response = await fetch(URL);
    const data = await response.json();

    quotes.value = data.quotes;
  } catch (error) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const getQuote = () => {
  if (quotes.value.length > 0) {
    const randomQuote = quotes.value[Math.floor(Math.random() * quotes.value.length)];

    quote.value = randomQuote.quote;
    author.value = randomQuote.author;
    setRandomQuoteStyles();

    const newHistoryEntry = `${quote.value} - ${author.value}`;

    history.value.push(newHistoryEntry);
    sessionStorage.setItem('quoteHistory', JSON.stringify(history.value));
  }
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    toastMessage.value = 'Quote copied to clipboard!';
    showToast.value = true;

    setTimeout(() => {
      showToast.value = false;
    }, 2000);
  });
};

onMounted(async () => {
  await fetchData();

  if (!isError.value && quotes.value.length > 0) {
    getQuote();
  }
});

const tweetQuoteUrl = () => {
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.value)}&text=${encodeURIComponent(author.value)}`
  window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=300')
}

const telegramQuoteUrl = () => {
  const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
    quote.value,
  )}&text=${encodeURIComponent(author.value)}`;
  window.open(shareUrl, '_blank', 'noopener,noreferrer');
};

const facebookQuoteUrl = () => {
  const quoteText = `"${quote.value}" - ${author.value}`;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://random-quote-vue-three.vercel.app/?quote=${quoteText}`)}`;

  window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=300');
};
</script>

<style scoped>
.app-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

.history-title {
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: #fff;
}

.quote-box {
  border-radius: 25px;
  position: relative;
  margin: 0 auto 5%;
  max-width: 600px;
  padding: 40px 50px;
  display: table;
  background-color: #fff;
}

.quote-text {
  text-align: center;
  max-width: 600px;
  height: auto;
  clear: both;
  font-weight: 500;
  font-size: 1.25em;
}

.quote-author {
  max-width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 1em;
  text-align: right;
}

.buttons {
  max-width: 450px;
  margin: auto;
  display: block;
}

.button {
  height: 50px;
  border: none;
  border-radius: 5px;
  color: #fff;
  /* background-color: #28a745; */
  outline: none;
  font-size: 1em;
  padding: 8px 18px;
  margin-top: 30px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.5s linear;
}

.button:hover {
  opacity: 0.8;
}

.tweet-quote,
.tumblr-quote,
.telegram-quote,
.facebook-quote {
  float: left;
  padding: 0;
  text-align: center;
  font-size: 1.2em;
  margin-right: 5px;
  max-height: 60px;
  width: 50px;
}

.new-quote {
  float: right;
  height: 50px;
}

.history-list {
  max-width: 800px;
}

.history-item {
  margin-bottom: 10px;
  color: #fff;
}

.copy-button {
  background-color: transparent;
  margin-left: 15px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.5s linear;
}

.copy-button:hover {
  transform: scale(1.1);
}

.copy-button:focus {
  outline: none;
}

.copy-button:active {
  transform: scale(0.9);
}

.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s linear;
  opacity: 1;
  z-index: 1000;
}
</style>
