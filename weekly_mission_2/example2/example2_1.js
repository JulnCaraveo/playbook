const objeto={
    name:"",
    apellido:"",
    mission:"",
    age:18,
    color:"",
}
class ajolonauta{
    constructor(name,mission,age,color){
        this.name=name
        this.mission=mission
        this.age=age
        this.color=color
     }
     sayhello(){
         return "hey hello"
     }
}
console.log(ajolonauta)

const obj1=new ajolonauta("woopa","nodejs",19,"black")
const obj2=new ajolonauta("woopa","nodejs",17,"black")
const obj3=new ajolonauta("woopa","nodejs",12,"black")

 console.log(obj1.sayhello())
 console.log(obj2)
 console.log(obj3)
