import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlQuestion } from './sql-question';

describe('SqlQuestion', () => {
  let component: SqlQuestion;
  let fixture: ComponentFixture<SqlQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlQuestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
