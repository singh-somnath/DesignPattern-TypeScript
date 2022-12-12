export class Singleton{
    static uniqueSingleton:Singleton;

    private constructor(){}

    public static getInstance():Singleton{
        if(!Singleton.uniqueSingleton)
             Singleton.uniqueSingleton = new Singleton();
                   
        return Singleton.uniqueSingleton;
    }

    public getMessage():string{
        return "Hello World";
    }
}

export class ChocolateBoiler{
    private static uniqueChocolateBoiler : ChocolateBoiler;
    private empty:boolean;
    private boiled:boolean;

    private constructor(){
        this.empty = true;
        this.boiled = false;
        console.log("Boiler is Started");
    }

    public static getInstance():ChocolateBoiler{
        if(!ChocolateBoiler.uniqueChocolateBoiler)
            ChocolateBoiler.uniqueChocolateBoiler = new ChocolateBoiler();
        
        return ChocolateBoiler.uniqueChocolateBoiler;
    }

    public isEmpty():boolean{
        return this.empty;
    }
    public isBoiled():boolean{
        return this.boiled;
    }

    public boil():void{
        if(!this.isEmpty() && !this.isBoiled()){
            console.log("Boiling is in progress ...");
            console.log("Boiling completed ...");
            this.boiled = true;
        }else{
            console.log("Boiler is Empty or Already Boiled");
        }

    }

    public drain():void{
        if(this.isBoiled() && !this.isEmpty()){
            console.log("Draining is in progress ...");
            console.log("Draining completed ...");
            this.empty = true;
        }else{
            console.log("Boiler is Empty or Not Boiled");
        }
    }

    public fill():void{
        if(!this.isBoiled() && this.isEmpty()){
            console.log("Filling is in progress ...");
            console.log("Filling completed ...");
            this.empty = false;
        }else{
            console.log("Boiler is Not Empty or Already Boiled");
        }
    }



}