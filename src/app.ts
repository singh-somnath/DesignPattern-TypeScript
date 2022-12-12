import { MallardDuck, RedHeadDuck, RubberDuck,DecoyDuck} from "./strategyPattern";
import { FlyWithWings, FlyNoFly, FlyWithRocketSpeed} from "./strategyPattern";
import { Quack, SQuack, MuteQuack} from "./strategyPattern";
import { Singleton} from './singletonPattern';

class App{
    
    public strategyPattern(){
        const objFlyWithWings:FlyWithWings = new FlyWithWings();
        const objQuack:Quack = new Quack();
        const objMallardDuck = new MallardDuck(objFlyWithWings,objQuack);
        
        console.log(objMallardDuck.display());
        console.log(objMallardDuck.performFly());
        console.log(objMallardDuck.swim());
        console.log(objMallardDuck.speak());
        objMallardDuck.setQuackBehaviour(new SQuack());
        console.log(objMallardDuck.speak());

        const objSQuack:SQuack = new SQuack();
        const objRedHeadDuck = new RedHeadDuck(objFlyWithWings, objSQuack);

        console.log(objRedHeadDuck.display());
        console.log(objRedHeadDuck.performFly());
        objRedHeadDuck.setFlyBehaviour(new FlyWithRocketSpeed());
        console.log(objRedHeadDuck.performFly());
        console.log(objRedHeadDuck.swim());
        console.log(objRedHeadDuck.speak());

        const objFlyNoFly:FlyNoFly = new FlyNoFly();
        const objMuteQuack:MuteQuack = new MuteQuack();

        const objRubberDuck = new RubberDuck(objFlyNoFly,objMuteQuack);

        console.log(objRubberDuck.display());
        console.log(objRubberDuck.performFly());
        console.log(objRubberDuck.swim());
        console.log(objRubberDuck.speak());
      
        const objDecoyDuck = new DecoyDuck(objFlyNoFly, objMuteQuack);

        
        console.log(objDecoyDuck.display());
        console.log(objDecoyDuck.performFly());
        console.log(objDecoyDuck.swim());
        console.log(objDecoyDuck.speak());
        
    }

    public singleTonPattern(){
          let objSingleton:Singleton = Singleton.getInstance();
          console.log(objSingleton.getMessage());
          objSingleton = Singleton.getInstance();
          console.log(objSingleton.getMessage());
    }

    public static main():void{
        const app:App = new App();
        //console.log("<------------------------Strategy Pattern------------------------------->");
        //app.strategyPattern();
        //console.log("<----------------------------------------------------------------------->");
        console.log("<------------------------Singleton Pattern------------------------------->");
        app.singleTonPattern();
        console.log("<----------------------------------------------------------------------->");
    }

}


App.main();

