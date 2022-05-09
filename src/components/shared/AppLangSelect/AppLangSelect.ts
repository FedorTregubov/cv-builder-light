import { defineComponent, ref } from 'vue';
import AppSelect from '@/components/shared/AppSelect/AppSelect.vue';
import { I18N_LOCALES } from '@/models';
import { I18N_DEFAULT_LOCALE, setLanguage } from '@/use/use18n';
import type { AppLangSelectItem } from '@/components/shared/AppSelect/AppSelect';
import { getFullUrl } from '@/utils';

export default defineComponent({
  name: 'AppLangSelect',

  components: { AppSelect },

  setup () {
    const langItems: AppLangSelectItem[] = Object.values(I18N_LOCALES)
      .map((item) => ({ label: item, value: item }));

    const langModel = ref<AppLangSelectItem>({
      value: I18N_DEFAULT_LOCALE,
      label: I18N_DEFAULT_LOCALE,
    });

    const onLangChange = (item: AppLangSelectItem): void => {
      langModel.value = item;
      setLanguage(item.value as I18N_LOCALES);
    };

    return {
      langModel,
      langItems,
      getFullUrl,
      onLangChange,
    };
  },
});
