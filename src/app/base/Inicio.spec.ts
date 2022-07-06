import { dos, Primeros, Tres } from "./Inicio";

describe('Probando Inicio', ()=>{

  it('Probando Primeros', ()=>{
    const resultado = Primeros();
    expect(resultado).toEqual('Hola que hace');
  });

  it('debe retornar una cadena que contenga el argumento', ()=>{
    const resultado = dos('Sofka');
    expect(resultado).toBe('Hola Sofka');
    expect(resultado).toContain('Sofka');
  });

  it('se debe agregar el argumento al arreglo', ()=>{
    const resultado = Tres('SofkU');
    expect(resultado).toContain('SofkU');
    expect(resultado.length).toEqual(3);
  });


});
