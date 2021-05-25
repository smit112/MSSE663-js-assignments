/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */
 function monkey (){
    this.firstName="Kong";
    this.lastName ="Do";
    this.id= 2021;
   }
    monkey.prototype.fullName=function() {
      return (this.firstName+" " +this.lastName);
    };
    monkey.prototype.printdescription=function(){
        return this.id;

    }
   
 const mon=new monkey()
 console.log(mon.fullName());
 console.log(mon.printdescription());


 
  

  