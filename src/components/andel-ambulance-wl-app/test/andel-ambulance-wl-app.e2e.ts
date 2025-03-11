import { newE2EPage } from '@stencil/core/testing';

describe('andel-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<andel-ambulance-wl-app></andel-ambulance-wl-app>');

    const element = await page.find('andel-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
