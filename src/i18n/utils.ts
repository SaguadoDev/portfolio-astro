import { labels } from './ui'

const defaultLang = 'es'

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}

export function useTranslations(lang: keyof typeof labels) {
  return function translate(key: string) {
    const value =
      getNestedValue(labels[lang], key) || getNestedValue(labels[defaultLang], key)
    return value || key
  }
}
