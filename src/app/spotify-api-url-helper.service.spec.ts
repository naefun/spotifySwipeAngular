import { TestBed } from '@angular/core/testing';

import { SpotifyApiUrlHelperService } from './spotify-api-url-helper.service';

describe('SpotifyApiUrlHelperService', () => {
  let service: SpotifyApiUrlHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyApiUrlHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
