import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubredditComponent } from './list-subreddit.component';

describe('ListSubredditComponent', () => {
  let component: ListSubredditComponent;
  let fixture: ComponentFixture<ListSubredditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubredditComponent]
    });
    fixture = TestBed.createComponent(ListSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
