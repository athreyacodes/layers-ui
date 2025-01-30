import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibraryComponent } from './ui-library.component';

describe('UiLibraryComponent', () => {
  let component: UiLibraryComponent;
  let fixture: ComponentFixture<UiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
