import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaltodoPage } from './modaltodo.page';

describe('ModaltodoPage', () => {
  let component: ModaltodoPage;
  let fixture: ComponentFixture<ModaltodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaltodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
