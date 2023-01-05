import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseItemComponent } from './reuse-item.component';

describe('ReuseItemComponent', () => {
  let component: ReuseItemComponent;
  let fixture: ComponentFixture<ReuseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
