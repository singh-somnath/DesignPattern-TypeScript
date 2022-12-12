import { MallardDuck, RedHeadDuck, RubberDuck,DecoyDuck} from "./strategyPattern";

class App{
    readonly projectName:string;

    constructor(){
       this.projectName = "DesignPattern in TypeScript";
    }

    public getProjectName():string{
        return this.projectName;
    }

    public strategyPattern(){
        let objMallardDuck = new MallardDuck("MallardDuck");
        
        console.log(objMallardDuck.quack());
        console.log(objMallardDuck.swim());
        console.log(objMallardDuck.display());
        console.log(objMallardDuck.fly());

        let objRedHeadDuck = new RedHeadDuck("RedHeadDuck");

        console.log(objRedHeadDuck.quack());
        console.log(objRedHeadDuck.swim());
        console.log(objRedHeadDuck.display());
        console.log(objMallardDuck.fly());

        let objRubberDuck = new RubberDuck("RubberDuck");

        console.log(objRubberDuck.quack());
        console.log(objRubberDuck.swim());
        console.log(objRubberDuck.display());
      
        let objDecoyDuck = new DecoyDuck("DecoyDuck");

        console.log(objDecoyDuck.swim());
        console.log(objDecoyDuck.display());
        
    }

}

const objApp = new App();

console.log("<---------------------------------------------------------------------->");
console.log("");
objApp.strategyPattern();
console.log("");
console.log("<----------------------------------------------------------------------->");
