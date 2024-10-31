import { ref, onMounted, computed } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
library.add(faQuoteLeft, faTwitter, faTumblr, faTelegram, faFacebook);
const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
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
    }
    catch (error) {
        isError.value = true;
    }
    finally {
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
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.value)}&text=${encodeURIComponent(author.value)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=300');
};
const telegramQuoteUrl = () => {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(quote.value)}&text=${encodeURIComponent(author.value)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
};
const facebookQuoteUrl = () => {
    const quoteText = `"${quote.value}" - ${author.value}`;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `https://random-quote-vue-three.vercel.app/?quote=${quoteText}`,
    )}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=300');
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['copy-button'];
    __VLS_styleScopedClasses['copy-button'];
    __VLS_styleScopedClasses['copy-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("app-title") }, });
    if (__VLS_ctx.isError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (__VLS_ctx.errorMessage);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper quote-box") }, id: ("quote-box"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("quote-text") }, id: ("text"), });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((['fas', 'quote-left'])), }));
        const __VLS_2 = __VLS_1({ icon: ((['fas', 'quote-left'])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.quote);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("quote-author") }, id: ("author"), });
        (__VLS_ctx.author);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.tweetQuoteUrl) }, ...{ class: ("button telegram-quote") }, title: ("Share this quote on Telegram!"), });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((['fab', 'twitter'])), ...{ class: ("icon") }, }));
        const __VLS_8 = __VLS_7({ icon: ((['fab', 'twitter'])), ...{ class: ("icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.telegramQuoteUrl) }, ...{ class: ("button telegram-quote") }, title: ("Share this quote on Telegram!"), });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ((['fab', 'telegram'])), ...{ class: ("icon") }, }));
        const __VLS_14 = __VLS_13({ icon: ((['fab', 'telegram'])), ...{ class: ("icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.facebookQuoteUrl) }, ...{ class: ("button telegram-quote") }, title: ("Share this quote on Facebook!"), });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ((['fab', 'facebook'])), ...{ class: ("icon") }, }));
        const __VLS_20 = __VLS_19({ icon: ((['fab', 'facebook'])), ...{ class: ("icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.getQuote) }, ...{ class: ("button new-quote") }, id: ("new-quote"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("history-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("history-list") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.history))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("history-item") }, key: ((index)), });
        (item);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.copyToClipboard(item);
                } }, ...{ class: ("copy-button") }, });
    }
    if (__VLS_ctx.showToast) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("toast") }, });
        (__VLS_ctx.toastMessage);
    }
    __VLS_styleScopedClasses['app-title'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['quote-box'];
    __VLS_styleScopedClasses['quote-text'];
    __VLS_styleScopedClasses['quote-author'];
    __VLS_styleScopedClasses['buttons'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['telegram-quote'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['telegram-quote'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['telegram-quote'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['new-quote'];
    __VLS_styleScopedClasses['history-title'];
    __VLS_styleScopedClasses['history-list'];
    __VLS_styleScopedClasses['history-item'];
    __VLS_styleScopedClasses['copy-button'];
    __VLS_styleScopedClasses['toast'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FontAwesomeIcon: FontAwesomeIcon,
            quote: quote,
            author: author,
            isError: isError,
            errorMessage: errorMessage,
            history: history,
            showToast: showToast,
            toastMessage: toastMessage,
            getQuote: getQuote,
            copyToClipboard: copyToClipboard,
            tweetQuoteUrl: tweetQuoteUrl,
            telegramQuoteUrl: telegramQuoteUrl,
            facebookQuoteUrl: facebookQuoteUrl,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
