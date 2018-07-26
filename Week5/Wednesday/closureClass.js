// function MyObject() {

//     MyMethod(); 

//     this.MyMethod = function() {
//       console.log('It works A');
//     }

//     this.MyMethod(); 

//     MyMethod(); 

//     function MyMethod() {
//       console.log('It works B');
//     }

//   }
//   var test = new MyObject();

// class Counter {
//     constructor (x) {
//       this.x = x;
//       this.n = 0;
//     }
//     increment() {
//       this.n++;
//       console.log("increment: " + this.n);
//       console.log(this.x)
//       return this.x + this.n;
//     }
//     decrement() {
//       this.n--;
//       console.log("increment: " + this.n);
//       return this.x + this.n;
//     }
//   };
  
//   let count1 = new Counter(5);
//   let count2 = new Counter(0);
  
// //   console.log(count1.x)
// count


class Person{
    constructor(name){
        this.name = name;
        this.createGreeting = this.createGreeting.bind(this);
        this.friends = [];
    }
 
    addFriend(friend) {
        this.friends.push(friend);
    }
 
    createGreeting(other){
        return (`Yo ${other.name}! from ${this.name}.`)
    }
 
    greet(other){
        console.log(this.createGreeting(other));
    }
 
    lazyGreet(other){
        setTimeout(() => {
            console.log(this.createGreeting(other));
        }, 2000);
    }
    
    createGreetingsForFriends(){
        var friendM = this.friends.map(function(friend){
            console.log(this.createGreeting(friend))
        })
        // console.log(this.friends);
    }
 }
 
 var me = new Person('Eric');
 var you = new Person('Big Worm');
 
 me.lazyGreet(you);
 
 var alfie = new Person('Alfie'); 
 var anushka = new Person('Anushka'); 
 var henrique = new Person('Henrique'); 
 henrique.addFriend(alfie);
 henrique.createGreetingsForFriends();
 alfie.addFriend(anushka); 
 alfie.addFriend(henrique); 
 alfie.createGreetingsForFriends();