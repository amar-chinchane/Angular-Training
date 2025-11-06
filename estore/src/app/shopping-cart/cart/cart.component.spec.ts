import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  const mockCartService = {
    getCartItems: jasmine.createSpy('getCartItems').and.returnValue([])
  };
  const mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{provide: CartService, useValue: mockCartService},
    {provide: Router, useValue: mockRouter}

      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    component.ngOnInit();
    expect(mockCartService.getCartItems).toHaveBeenCalled();
    expect(component.cartItems).toEqual([]);
  });
});
