import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetQuestion } from './dot-net-question';

describe('DotNetQuestion', () => {
  let component: DotNetQuestion;
  let fixture: ComponentFixture<DotNetQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotNetQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetQuestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
