const person = {
    age: 25,

    // tellAge: function() {
    //     //this -> person(o)
    //     console.log(this.age) //undefined
    // }.bind(this) //this'i window objesine yönlendiriyor

    tellAge: ()=>{
        console.log(this.age)//undefined
        console.log(this)//window(o)


    }

// this -> window(o)

}
person.tellAge()