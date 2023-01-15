import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent {
  listItem = [
    {id: 1, label: "French", checked: false},
    {id: 2, label: "English", checked: true},
    {id: 3, label: "Spanish", checked: false},
    {id: 4, label: "Russia", checked: true}
  ]

  

  /* onChangeLanguage($event : any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(id, isChecked)
  } */
}
