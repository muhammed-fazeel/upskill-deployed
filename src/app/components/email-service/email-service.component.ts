import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
//declare the email field

@Component({
  selector: 'app-email-service',
  templateUrl: './email-service.component.html',
  styleUrls: ['./email-service.component.css']
})
export default class ContactUsComponent {


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_udohivq', 'template_39hmfwo', e.target as HTMLFormElement, 'Wo7-QvsdsemwcnELH')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}