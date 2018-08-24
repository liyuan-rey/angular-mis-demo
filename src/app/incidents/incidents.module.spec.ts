import { IncidentsModule } from './incidents.module';

describe('IncidentsModule', () => {
  let incidentsModule: IncidentsModule;

  beforeEach(() => {
    incidentsModule = new IncidentsModule();
  });

  it('should create an instance', () => {
    expect(incidentsModule).toBeTruthy();
  });
});
