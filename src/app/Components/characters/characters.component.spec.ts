import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { DataService } from 'src/app/Services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModel, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSortableModule } from 'ngx-sortable';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let service:DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      imports: [
         MatCardModule,
        MatProgressSpinnerModule,
        FormsModule,
        BrowserAnimationsModule,
        NgxSortableModule,
        HttpClientModule,
      ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    fixture.detectChanges();
    service= new DataService(null);
    component = new CharactersComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set list of items which returned from server',()=>{
    spyOn(service,'getAllItems').and.callThrough();
    component.getItems();
    expect(component.items.length).toBeGreaterThan(0);
  })

  it('should filter typed string',()=>{
    
  })

});
