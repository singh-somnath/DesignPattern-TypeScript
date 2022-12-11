abstract class Duck{

    constructor(name:string){
        console.log("I am " + name);
    }
    public quack():string{
        return "I am quacking";
    }
    public swim():string{
        return "I am swimming";
    }
    abstract display():string;

    public fly():string{
        return "I am flying;"
    }
}

export class MallardDuck extends Duck
{
    display(): string {
        return "This is Mallard Duck";
    }
}

export class RedHeadDuck extends Duck{
    display(): string {
        return "This is Redhead Duck";
    }
}

export class RubberDuck extends Duck{
    public quack(): string {
        return "I do Squack";
    }
    display(): string {
        return "This is Rubber Duck";
    }
    public fly(): string {
        return "I do not fly";
    }
}

export class DecoyDuck extends Duck{
    public quack(): string {
        return "I do not quack";
    }
    display(): string {
        return "Wow! Wooden Duck";
    }
    public fly(): string {
        return "I do not fly";
    }
}

