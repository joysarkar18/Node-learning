const items = [];
module.exports =  class person{
     
    constructor(id , firstName , LastName , Email){
        this.id= id ;
        this.firstName = firstName;
        this.LastName = LastName;
        this.Email = Email;
    }

    save(){
        items.push(this);
    }

    static getAllItems(){
        return items;
    }


}