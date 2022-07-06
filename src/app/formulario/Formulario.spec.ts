import { FormBuilder } from '@angular/forms';
import { unFormulario } from './Formulario';

describe('Probando formulario', () => {
  const componente = new unFormulario(new FormBuilder());

  it('primera prueba formulario', () => {
    expect(componente.form.contains('email')).not.toBeFalsy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('probando validor email es requerido', () => {
    const control = componente.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();

  });

  it('probando validor email es tipo email', () => {
    const control = componente.form.get('email');
    control?.setValue('sofka@sofka.com.co');
    expect(control?.valid).toBeTruthy();
  });

});
