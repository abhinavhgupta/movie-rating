import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { moviesData } from './data';
import { movieReducer } from './store/movie.reducer';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let store: Store<any>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let randomButton: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MovieComponent
      ], imports: [ReactiveFormsModule, FormsModule,
        StoreModule.forRoot({ 'reducers': movieReducer }),],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.mov = moviesData;
    component.movies = moviesData;
    randomButton = fixture.debugElement.query(By.css('button'));

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Movie List'`, () => {
    fixture.detectChanges();
    expect(component.title).toEqual('Movie List');
  });

  it(`should click randomRating Button`, () => {

    spyOn(component, 'randomRating').and.callThrough();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.randomRating).toBeDefined();
    });

  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const comp = fixture.componentInstance;
    comp.movies = moviesData;
    comp.mov = moviesData;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Movie List!');
  });
});
