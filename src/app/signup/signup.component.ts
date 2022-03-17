import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const form: HTMLFormElement = document.querySelector('#signupForm');


  form.onsubmit = () => {
    const formData = new FormData(form);

    // const firstName = formData.get('textInput') as string;
  
    const payload = {
      firstName:formData.get('firstName') as string,
      lastName : formData.get('lastName') as string,
      mobileNum : formData.get('mobile') as string,
      alternateMobileNum : formData.get('altmobile') as string,
      emailId : formData.get('email') as string,
      password : formData.get('password') as string
    }
    console.log(payload);

    this.http.post(environment.serverAPIs.signUp,payload).subscribe(data => {
      console.log(data);
    })
    return false; // prevent reload
  }

  
};

}
