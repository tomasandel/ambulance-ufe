import { newE2EPage } from '@stencil/core/testing';

describe('andel-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<andel-ambulance-wl-editor></andel-ambulance-wl-editor>');

    const element = await page.find('andel-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
