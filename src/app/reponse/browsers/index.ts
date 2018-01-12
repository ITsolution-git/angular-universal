console.log('ssssssssssssssssss');
import { Provider } from '@angular/core';
import {
  IsChrome,
  IsFirefox,
  IsSafari,
  IsOpera,
  IsIE,
  IsIE9,
  IsIE10,
  IsIE11,
  IsIE12,
  ShowItBrowser,
  HideItBrowser,
  ShowIEVersion,
  HideIEVersion,
  IeInfo,
  BrowserInfo
} from './browsers-directives';

export {
  IsChrome,
  IsFirefox,
  IsSafari,
  IsOpera,
  IsIE,
  IsIE9,
  IsIE10,
  IsIE11,
  IsIE12,
  ShowItBrowser,
  HideItBrowser,
  ShowIEVersion,
  HideIEVersion,
  IeInfo,
  BrowserInfo
};
/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDD {

  constructor(private el: ElementRef) {
    console.log('sss'); }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    console.log(color, 'sss');
    this.el.nativeElement.style.backgroundColor = color;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

@Directive({
  selector: '[dddTest]'
})
export class dddTestDD {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}

export const BROWSER_DIRECTIVES: Provider[] = [
HighlightDD,
  IsChrome,
  dddTestDD
  // IsFirefox,
  // IsSafari,
  // IsOpera,
  // IsIE,
  // IsIE9,
  // IsIE10,
  // IsIE11,
  // IsIE12,
  // ShowItBrowser,
  // HideItBrowser,
  // ShowIEVersion,
  // HideIEVersion,
  // IeInfo,
  // BrowserInfo
]