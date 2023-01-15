import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageListComponent } from './language-list/language-list.component';

@NgModule({
  declarations: [
    LanguageListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LanguageListComponent
  ]
})
export class DirectivesModule { }
