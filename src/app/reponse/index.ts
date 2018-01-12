/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 04, 2016
 * @updated_at Febr 5, 2017 - by ManuCutillas
 * @version_0.7.5
 *
 * Dependencies:
 * @angular/core : "2.4.6"
 * rxjs: "5.1.0"
 *
 * @more_info https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NGX-RESPONSIVE
 *
 */

/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveConfig,ResponsiveState } from './config/index';
import { BOOTSTRAP_DIRECTIVES } from './bootstrap/index';
import { BROWSER_DIRECTIVES } from './browsers/index';
import { CUSTOMSIZES_DIRECTIVES } from './custom-sizes/index';
import { DEVICES_DIRECTIVES } from './devices/index';
import { PIXELRATIO_DIRECTIVES } from './pixelratio/index';
import { RESPONSIVE_DIRECTIVE } from './responsive/index';
import { RESPONSIVEWINDOW_DIRECTIVE } from './responsive-window/index';
import { USERAGENT_DIRECTIVE } from './useragent/index';
// import { HighlightDD } from './test';
export {
        ResponsiveConfig,
        ResponsiveState,
        ResponsiveConfigInterface
      } from './config/index';

@NgModule({
    declarations:
    [
        // BOOTSTRAP_DIRECTIVES,
        BROWSER_DIRECTIVES,
        // CUSTOMSIZES_DIRECTIVES,
        // DEVICES_DIRECTIVES,
        // PIXELRATIO_DIRECTIVES,
        // RESPONSIVE_DIRECTIVE,
        // RESPONSIVEWINDOW_DIRECTIVE,
        // USERAGENT_DIRECTIVE,
        // HighlightDD
    ],
    exports:
    [
        // HighlightDirective,
        // BOOTSTRAP_DIRECTIVES,
        BROWSER_DIRECTIVES,
        // CUSTOMSIZES_DIRECTIVES,
        // DEVICES_DIRECTIVES,
        // PIXELRATIO_DIRECTIVES,
        // RESPONSIVE_DIRECTIVE,
        // RESPONSIVEWINDOW_DIRECTIVE,
        // USERAGENT_DIRECTIVE,
        // HighlightDD
    ],
    providers:
    [
        ResponsiveState,
        ResponsiveConfig
    ]
})
export class ResponsiveMM{}