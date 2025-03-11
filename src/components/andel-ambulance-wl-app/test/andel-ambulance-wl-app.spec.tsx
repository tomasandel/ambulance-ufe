import { newSpecPage } from '@stencil/core/testing';
import { AndelAmbulanceWlApp } from '../andel-ambulance-wl-app';

describe('andel-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [AndelAmbulanceWlApp],
      html: `<andel-ambulance-wl-app base-path="/"></andel-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("andel-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [AndelAmbulanceWlApp],
      html: `<andel-ambulance-wl-app base-path="/ambulance-wl/"></andel-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("andel-ambulance-wl-list");
  });
});
