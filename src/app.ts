class App{
    readonly projectName:string;

    constructor(){
       this.projectName = "DesignPattern in TypeScript";
    }

    public getProjectName():string{
        return this.projectName;
    }
}

const objApp = new App();

console.log("<---------------------------------------------------------------------->");
console.log("develop");
console.log(objApp.getProjectName());
console.log("");
console.log("<----------------------------------------------------------------------->");
