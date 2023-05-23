import { Validators } from '@angular/forms';

export interface formulario {
    fullname: string,
    email: string,
    message: string
}

export const formValidators = {
    email: [Validators.required, Validators.email]
};