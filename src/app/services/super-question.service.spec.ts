import { TestBed } from '@angular/core/testing';

import { SuperQuestionService } from './super-question.service';

describe('SuperQuestionService', () => {
  let service: SuperQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
