import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCompRefComponent } from './product-comp-ref.component';

describe('ProductCompRefComponent', () => {
  let component: ProductCompRefComponent;
  let fixture: ComponentFixture<ProductCompRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCompRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCompRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
