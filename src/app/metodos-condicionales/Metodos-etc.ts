
export class MetodosCondicionales {

   a : number = 5;
   b : number = 3;
   texto1 : string = "hola"
   texto2 : string = "";
   resultado : number =  this.a + this.b; ;
   variable : boolean = false;

  constructor() {
  }

  public suma(): number {
    
    return this.resultado;

  }

  public texto(): string {
    return this.texto1;
  }

  public validarCondicional() : string {

    if(this.resultado === 8){
      return 'Suma Correcta';
    }else{
      return 'Suma incorrecta'
    }
 
  } 
  
  public validarTextoVacio(): boolean{
    if(this.texto2 === ''){
      return this.variable= true;
    }else {
      return this.variable;
    } 

  }
   /**
    * Para divertirse escribiendo codigo cochino :3
    */

}
