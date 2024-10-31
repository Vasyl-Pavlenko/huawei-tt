import { ref, onMounted } from 'vue';
import RandomQuote from './components/RandomQuote.vue';
import MyLoader from './components/MyLoader.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isLoading = ref(true);
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    if (__VLS_ctx.isLoading) {
        // @ts-ignore
        [MyLoader,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(MyLoader, new MyLoader({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    else {
        // @ts-ignore
        [RandomQuote,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(RandomQuote, new RandomQuote({}));
        const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("footer-link") }, href: ("https://github.com/Vasyl-Pavlenko"), });
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer-link'];
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
            RandomQuote: RandomQuote,
            MyLoader: MyLoader,
            isLoading: isLoading,
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
