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