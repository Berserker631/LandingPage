import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[panningItem]',
})
export class PanningItemDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
