import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppHeader from './AppHeader.vue';
import { AppHeaderEvents } from '@/components/layout/AppHeader/AppHeader.model';
import IconPrint from '@/components/shared/icons/IconPrint.vue';

const wrapper = mount(AppHeader);

describe.concurrent('AppHeader', () => {
  it('component is truthy', () => {
   expect(AppHeader).toBeTruthy();
  });

  it('renders title properly', () => {
    expect(wrapper.text()).toContain('CV Builder Light');
  });

  it('renders print-button properly', () => {
    expect(wrapper.text()).toContain('Print');
    expect(wrapper.getComponent(IconPrint));
  });

  it('emits "print" event when clicking on print-button', async() => {
    await wrapper.get('[data-test="app-header__button-print"]').trigger('click');
    expect(wrapper.emitted<void>(AppHeaderEvents.print)).toBeTruthy();
  });
});
