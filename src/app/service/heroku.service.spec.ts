import { TestBed } from '@angular/core/testing';
import { HerokuService } from './heroku.service';
import { HttpClient } from '@angular/common/http';

describe('HerokuService', () => {
  let service: HerokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerokuService],
    });
    service = TestBed.inject(HerokuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
