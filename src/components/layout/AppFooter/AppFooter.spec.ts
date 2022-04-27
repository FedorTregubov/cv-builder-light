import { mount } from '@vue/test-utils';
import { describe, expect, it } from "vitest";
import AppFooter from './AppFooter.vue';
import { APP_GITHUB_LINK } from "@/data/constants";

describe('AppFooter', () => {
  const wrapper = mount(AppFooter);

  it('component is truthy', () => {
    expect(AppFooter).toBeTruthy();
  });

  it.todo('renders github-link properly',  () => {
    const footerLink = wrapper.get('[data-test="app-footer__link"]');

    expect(footerLink.text()).toBe('Github');
    expect(footerLink.attributes('href')).toBe(APP_GITHUB_LINK);
  });
});
