import { createI18n } from 'vue-i18n'
import { I18N_LOCALES } from "@/models/i18n.model";
import enUS from '@/data/messages/en-US'
import deDE from '@/data/messages/de-DE';
import ruRU from '@/data/messages/ru-RU';
import uaUA from '@/data/messages/ua-UA';

export const i18n = createI18n({
  locale: I18N_LOCALES.EN_US,
  fallbackLocale: I18N_LOCALES.EN_US,
  messages: {
    [I18N_LOCALES.EN_US]: enUS,
    [I18N_LOCALES.DE_DE]: deDE,
    [I18N_LOCALES.RU_RU]: ruRU,
    [I18N_LOCALES.UA_UA]: uaUA,
  }
});
