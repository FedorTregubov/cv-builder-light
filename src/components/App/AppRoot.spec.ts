import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppRoot from './AppRoot.vue';
import AppHeader from '@/components/layout/AppHeader/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue';
import ContactInfoForm from '@/components/ContactInfoForm/ContactInfoForm';
import ExperienceInfoForm from '@/components/ExperienceInfoForm/ExperienceInfoForm';

describe.concurrent('AppRoot', () => {
  it('component is truthy', () => {
    expect(AppRoot).toBeTruthy();
  });

  const wrapper = mount(AppRoot);

  it.concurrent('renders layout components properly', () => {
    const appHeader = wrapper.findComponent(AppHeader);
    const appFooter = wrapper.findComponent(AppFooter);

    expect(appHeader.exists()).toBe(true);
    expect(appFooter.exists()).toBe(true);
  });

  it.concurrent('renders content components properly', () => {
    const contactInfoForm = wrapper.findComponent(ContactInfoForm);
    const experienceInfoForm = wrapper.findComponent(ExperienceInfoForm);

    expect(contactInfoForm.exists()).toBe(true);
    expect(experienceInfoForm.exists()).toBe(true);
  });
});
