import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  // placeholder for user
  user = {
    name: {
       first: 'Kevin',
       last: 'Martinez'
    }
 };

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user.name.first); }


  constructor() { }

  ngOnInit() {
  }

}
