import { newSpecPage } from '@stencil/core/testing';
import { AndelAmbulanceWlList } from '../andel-ambulance-wl-list';

describe('andel-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndelAmbulanceWlList],
      html: `<andel-ambulance-wl-list></andel-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as AndelAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
