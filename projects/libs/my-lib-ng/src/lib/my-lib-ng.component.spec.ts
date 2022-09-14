import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibNgComponent } from './my-lib-ng.component';

describe('MyLibNgComponent', () => {
  let component: MyLibNgComponent;
  let fixture: ComponentFixture<MyLibNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
