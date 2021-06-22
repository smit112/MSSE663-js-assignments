

// Source code here
interface Person{
    name:string;
    age:number;
}

interface Bob extends Person{
    type: string;
    job: string;
    getJob: (job:string) => string;
    getAge: (age:number)=>number;
    getJobStatus:(job:string)=>boolean;

}
export class Max implements Bob{
    

        constructor(public name:string, public age:number, public type:string, public job:string)
{
    this.name =name;
    this.age=age;
    this.type=type;
    this.job=job;
}   
getJob():string{
    return (this.name);
}
getAge():number{
    return this.age;
}
getJobStatus():boolean{
    if(this.job==''){

        return false;
    }
    return false;

}


}
    
   

    

