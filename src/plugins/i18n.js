import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import nl from '@/locales/nl.json';

const i18n = createI18n({
	locale: 'nl', //languageStore.locale,
  	fallbackLocale: 'nl', // Fallback locale
  	messages: {
		en,
		nl,
  	},
    allowComposition: true,
    legacy: false,
    warnHtmlMessage: false,
});

export default i18n;
