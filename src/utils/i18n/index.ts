'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLang from './locales/en/en.json'
import ruLang from './locales/ru/ru.json'
import ukLang from './locales/uk/uk.json'

const resources = {
	en: {
		translation: enLang,
	},
	uk: {
		translation: ukLang,
	},
	ru: {
		translation: ruLang,
	},
}

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	lng: 'en',

	interpolation: {
		escapeValue: false,
	},
})

export default i18n
