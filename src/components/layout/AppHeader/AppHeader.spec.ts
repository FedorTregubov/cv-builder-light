import { describe, it, expect } from 'vitest';
import { shallowMount } from "@vue/test-utils";
import AppHeader from './AppHeader.vue';
import { AppHeaderEvents } from '@/components/layout/AppHeader/AppHeader.model';
import IconPrint from '@/components/shared/icons/IconPrint.vue';
import { useTestI18n } from "@/use/useTest";

describe('AppHeader', () => {
  const wrapper = shallowMount(AppHeader, { ...useTestI18n() });

  it('component is truthy', () => {
   expect(AppHeader).toBeTruthy();
  });

  it('renders title properly', () => {
    expect(wrapper.text()).toContain('CV Builder Light');
  });

  it('renders print-button properly', () => {
    expect(wrapper.text()).toContain('print');
    expect(wrapper.getComponent(IconPrint));
  });

  it('emits "print" event when clicking on print-button', async() => {
    await wrapper.get('[data-test="app-header__button-print"]').trigger('click');
    expect(wrapper.emitted<void>(AppHeaderEvents.print)).toBeTruthy();
  });
});
