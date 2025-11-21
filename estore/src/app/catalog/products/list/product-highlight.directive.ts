import { Directive, ElementRef, Input, Renderer2, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductHighlight]',
  standalone: true // ✅ Works with standalone components
})
export class ProductHighlightDirective implements OnChanges {
  @Input() isDiscounted: boolean | undefined = false;
  @Input() isOutOfStock: boolean | undefined = false;
  @Input() quantityCount: number = 100;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(): void {
    this.applyStyles();
  }

  private applyStyles() {
    const discounted = !!this.isDiscounted;
    const outOfStock = !!this.isOutOfStock;
    console.log(this.quantityCount);
    if(this.quantityCount>0)
       outOfStock===true;
    else
       outOfStock===false;
    

    this.renderer.removeStyle(this.el.nativeElement, 'border');
    this.renderer.removeStyle(this.el.nativeElement, 'opacity');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');

    if (discounted) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #4caf50');
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px #4caf50');
    }

    if (outOfStock) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');
      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    }
  }

}
