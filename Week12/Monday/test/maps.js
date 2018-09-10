// let myArray = [1, 2, 3, 4, 5];


// let secondArray = myArray.map(index => {

//     return index * 2;
// });


// console.log(secondArray);


// function Comp (){

//     return (

//         <div>
//             <h1>Hello world</h1>
//             <div>slkdjsldj slkdjfslkdjf slskdjflskdfj</div>
//         </div>
// )
// }

// Comp();

class App extends React.Component {
    formatName(user){
        return user.firstName + " " + user.lastName;
    }
    render(){
        const user = {
            firstName: 'Veronica',
            lastName: 'Lino'
        }
        return(

            <div>
                <h1>Hello, {this.formatName(user)}</h1>
            </div>
        );
    }
}
