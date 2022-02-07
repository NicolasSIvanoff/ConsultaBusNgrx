import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTablesModule } from 'angular-datatables';

import { PageItineraryComponent } from './page-itinerary.component';

describe('PageItineraryComponent', () => {
  let component: PageItineraryComponent;
  let fixture: ComponentFixture<PageItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageItineraryComponent],
      imports: [DataTablesModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
