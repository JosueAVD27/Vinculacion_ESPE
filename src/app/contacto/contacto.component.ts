import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { formulario } from './formulario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {

  @ViewChild('myForm', { static: false }) myForm!: NgForm;

  formModel: formulario = {
    fullname: '',
    email: '',
    message: ''
  };

  isFormValid = false;

  emailPattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

  validateForm(form: NgForm) {
    this.isFormValid = form.valid ?? false;
    console.log(this.formModel);

    //Borrar campos
    this.myForm.resetForm();
    this.isFormValid = false;
  }

  //Validar form
  checkFormValidity() {
    const { fullname, email, message } = this.formModel;
    this.isFormValid = !!fullname && this.emailPattern.test(email) && !!message;
  }
}
