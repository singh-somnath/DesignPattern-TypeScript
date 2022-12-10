class App{
    readonly projectName:string;

    constructor(){
       this.projectName = "DesignPattern in TypeScript";
    }

    getProjectName():string{
        return this.projectName;
    }
}

const objApp = new App();

console.log("<----------------------------------------------------------------------->");
console.log("");
console.log(objApp.getProjectName());
console.log("");
console.log("<----------------------------------------------------------------------->");
