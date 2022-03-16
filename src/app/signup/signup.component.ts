import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const form: HTMLFormElement = document.querySelector('#signupForm');


  form.onsubmit = () => {
    const formData = new FormData(form);

    const text = formData.get('textInput') as string;
    console.log(text);
    return false; // prevent reload
  }

  
};

}
