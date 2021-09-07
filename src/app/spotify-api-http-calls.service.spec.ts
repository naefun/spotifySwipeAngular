import { TestBed } from '@angular/core/testing';

import { SpotifyApiHttpCallsService } from './spotify-api-http-calls.service';

describe('SpotifyApiHttpCallsService', () => {
  let service: SpotifyApiHttpCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyApiHttpCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
