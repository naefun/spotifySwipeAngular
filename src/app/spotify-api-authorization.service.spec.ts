import { TestBed } from '@angular/core/testing';

import { SpotifyApiAuthorizationService } from './spotify-api-authorization.service';

describe('SpotifyApiAuthorizationService', () => {
  let service: SpotifyApiAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyApiAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
