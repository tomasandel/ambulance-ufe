import { newE2EPage } from '@stencil/core/testing';

describe('andel-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<andel-ambulance-wl-list></andel-ambulance-wl-list>');

    const element = await page.find('andel-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
