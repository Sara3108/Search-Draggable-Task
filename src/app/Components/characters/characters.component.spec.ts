import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { DataService } from 'src/app/Services/data.service';
import { observable } from 'rxjs';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let service:DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ]
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
    spyOn(service,'getAllItems').and.callFake(()=>{
      return observable
    });
    component.getItems();
    expect(component.items.length).toBeGreaterThan(0);
  })

  it('should filter typed string',()=>{
    
  })

});
