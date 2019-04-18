import ptBrMessages from './pt-br.json'
import enMessages from './en.json'

const i18nModule = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'En'
    },
    {
      code: 'pt',
      iso: 'pt-BR',
      name: 'Pt'
    }
  ],
  defaultLocale: 'pt',
  strategy: 'prefix_except_default',
  vueI18n: {
    fallbackLocale: 'pt',
    messages: {
      en: enMessages,
      pt: ptBrMessages
    }
  }
}

export default i18nModule
