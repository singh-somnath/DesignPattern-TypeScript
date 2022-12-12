interface IFlyBehaviour{
    fly():string;
}
export class FlyWithWings implements IFlyBehaviour{
    fly(): string {
        return "I Fly With Wings";
    }
}

export class FlyNoFly implements IFlyBehaviour{
    fly(): string {
        return "I do noyt Fly";
    }
}

export class FlyWithRocketSpeed implements IFlyBehaviour{
    fly(): string {
        return "I fly with rocket speed";
    }
}
interface IQuackBehaviour{
    quack():string;
}

export class Quack implements IQuackBehaviour{
    quack(): string {
        return "I do Quack";
    }
}
export class SQuack implements IQuackBehaviour{
    quack(): string {
        return "I do SQuack";
    }
}

export class MuteQuack implements IQuackBehaviour{
    quack(): string {
        return "I do not Quack";
    }
}
abstract class Duck{
    public flyBehaviour:IFlyBehaviour;
    public quackBehaviour:IQuackBehaviour;

    constructor( flyBehaviour:IFlyBehaviour,quackBehaviour:IQuackBehaviour){
        this.flyBehaviour = flyBehaviour;
        this.quackBehaviour = quackBehaviour;
    }
    
    public swim():string{
        return "I can Swim.";
    }
    abstract display():string;

    public setFlyBehaviour(flyBehaviour:IFlyBehaviour){
        this.flyBehaviour = flyBehaviour;
    }
    public setQuackBehaviour(quackBehaviour:IQuackBehaviour){
        this.quackBehaviour = quackBehaviour;
    }

    public performFly() : string{
        return this.flyBehaviour.fly();
    }

    public speak() : string{
        return this.quackBehaviour.quack();
    }

   
}

export class MallardDuck extends Duck{
    display(): string {
        return "I am Mallard Duck";
    }
   
}

export class RedHeadDuck extends Duck{
    display(): string {
        return "I am  Redhead Duck";
    }
   
}

export class RubberDuck extends Duck{
    display(): string {
        return "I am Rubber Duck";
    }  
  
}

export class DecoyDuck extends Duck{
    display(): string {
        return "I am Wooden Duck";
    }
 }

