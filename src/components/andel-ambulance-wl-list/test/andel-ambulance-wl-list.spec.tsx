import { newSpecPage } from '@stencil/core/testing';
import { AndelAmbulanceWlList } from '../andel-ambulance-wl-list';
import { WaitingListEntry } from '../../../api/ambulance-wl/models';
import fetchMock from 'jest-fetch-mock';

describe('andel-ambulance-wl-list', () => {
  const sampleEntries: WaitingListEntry[] = [
    {
      id: "entry-1",
      patientId: "p-1",
      name: "Juraj Prvý",
      waitingSince: new Date("20240203T12:00"),
      estimatedDurationMinutes: 20
    },
    {
      id: "entry-2",
      patientId: "p-2",
      name: "James Druhý",
      waitingSince: new Date("20240203T12:00"),
      estimatedDurationMinutes: 5
    }
  ];

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('renders', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(sampleEntries));
    const page = await newSpecPage({
      components: [AndelAmbulanceWlList],
      html: `<andel-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></andel-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as AndelAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    await page.waitForChanges();

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(expectedPatients).toEqual(sampleEntries.length);
    expect(items.length).toEqual(expectedPatients);
  });
});
