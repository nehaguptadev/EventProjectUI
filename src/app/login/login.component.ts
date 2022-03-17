import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const form: HTMLFormElement = document.querySelector('#signupForm');

    form.onsubmit = () => {
      const formData = new FormData(form);
  
      // const firstName = formData.get('textInput') as string;
    
      const payload = {
        emailId : formData.get('email') as string,
        password : formData.get('password') as string
      }
      console.log(payload);
  
      this.http.post(environment.serverAPIs.login,payload).subscribe(data => {
        console.log(data);
      })
      return false; // prevent reload
    }
  }

  


}
