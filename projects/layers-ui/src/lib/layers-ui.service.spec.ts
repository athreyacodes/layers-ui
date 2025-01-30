import { TestBed } from '@angular/core/testing';

import { LayersUiService } from './layers-ui.service';

describe('LayersUiService', () => {
  let service: LayersUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayersUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
