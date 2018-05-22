import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from '../user-model';
@Component({
  selector: 'app-form-values',
  templateUrl: './form-values.component.html',
  styleUrls: ['./form-values.component.scss']
})
export class FormValuesComponent implements OnInit {
  @Input() dataObject; // For use with the data model
  form: FormGroup; // For binding FormGroup to whatever name we want
  objectProps; // Props for our user model

  constructor() {
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  ngOnInit() {
    // With this we can bind objectProps to the user model making a remap
    // I got a lot of help from a tut for this logic, so its not all mine
    this.objectProps =
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop} , this.dataObject[prop]);
        });

        const formGroup = {}; // Fill formGroup as empty object
        for (const prop of Object.keys(this.dataObject)) {
          //  Map out form groups values
          formGroup[prop] = new FormControl(this.dataObject[prop].value );
        }
        // Bind to form to FormGroup
        this.form = new FormGroup(formGroup);
  }

}
