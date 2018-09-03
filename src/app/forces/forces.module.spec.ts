import { ForcesModule } from './forces.module';

describe('ForcesModule', () => {
  let forcesModule: ForcesModule;

  beforeEach(() => {
    forcesModule = new ForcesModule();
  });

  it('should create an instance', () => {
    expect(forcesModule).toBeTruthy();
  });
});
