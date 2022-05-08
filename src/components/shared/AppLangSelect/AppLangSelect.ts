import { defineComponent, ref } from 'vue';
import AppSelect from '@/components/shared/AppSelect/AppSelect.vue';
import { I18N_LOCALES } from '@/models';
import { I18N_DEFAULT_LOCALE, setLanguage } from '@/use/use18n';
import type { AppLangSelectItem } from '@/components/shared/AppSelect/AppSelect';

export default defineComponent({
  name: 'AppLangSelect',

  components: { AppSelect },

  setup () {
    const langItems: AppLangSelectItem[] = [
      {
        value: I18N_LOCALES.EN_US,
        label: I18N_LOCALES.EN_US,
      },
      {
        value: I18N_LOCALES.DE_DE,
        label: I18N_LOCALES.DE_DE,
      },
      {
        value: I18N_LOCALES.RU_RU,
        label: I18N_LOCALES.RU_RU,
      },
      {
        value: I18N_LOCALES.UA_UA,
        label: I18N_LOCALES.UA_UA,
      },
    ];

    const langModel = ref({
      value: I18N_DEFAULT_LOCALE,
      label: I18N_DEFAULT_LOCALE,
    });

    const onLangChange = (value: AppLangSelectItem): void => {
      setLanguage(value.value as I18N_LOCALES);
    }

    return {
      langModel,
      langItems,
      onLangChange,
    };
  },
});
