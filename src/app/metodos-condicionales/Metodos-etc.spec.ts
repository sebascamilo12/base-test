import { MetodosCondicionales } from "./Metodos-etc";

describe('probar metodos', ()=>{
    let componente: MetodosCondicionales;

    beforeEach(() =>{
        componente = new MetodosCondicionales();
    })
    
    
    it('promar suma', ()=>{
       
        expect(componente.suma()).toBe(8);
    })

    it('Probar texto', ()=>{
        
        expect(componente.texto()).toEqual("hola");
    })

    it('Probar condicional verdadera', ()=>{
        expect(componente.validarCondicional()).toEqual("Suma Correcta");
    })

    it('Probar condicional falsa', ()=>{
        componente.resultado= 7;
        expect(componente.validarCondicional()).toEqual("Suma incorrecta");
    })

    it('Validar texto vacio', ()=>{
        expect(componente.validarTextoVacio()).toBeTruthy();
    })

    it('Validar texto vacio', ()=>{
        componente.texto2="Contiene texto"
        expect(componente.validarTextoVacio()).toBeFalsy();
    })
});