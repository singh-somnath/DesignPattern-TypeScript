interface IFlyable{
    fly():string;
}

interface IQuackable{
    quack():string;
}

abstract class Duck{

    constructor(name:string){
        console.log("I am " + name);
    }
      public swim():string{
        return "I am swimming";
    }
    abstract display():string;

   
}

export class MallardDuck extends Duck implements IFlyable, IQuackable{
    display(): string {
        return "This is Mallard Duck";
    }
    public fly():string{
        return "I am flying;"
    }
    public quack():string{
        return "I am quacking";
    }
}

export class RedHeadDuck extends Duck implements IFlyable,IQuackable  {
    display(): string {
        return "This is Redhead Duck";
    }
    public fly():string{
        return "I am flying;"
    }
    public quack():string{
        return "I am quacking";
    }
}

export class RubberDuck extends Duck implements IQuackable{
    display(): string {
        return "This is Rubber Duck";
    }  
    public quack():string{
        return "I do Squacking";
    }
  
}

export class DecoyDuck extends Duck{
    display(): string {
        return "Wow! Wooden Duck";
    }
 }

