import React, { Component } from 'react';
import Name from './Name';


class Products extends Component{

    render(){

        let message = "This is the first day of React";

        let products = ['milk', 'cheese', 'oreos', 'eggs', 'shoes'];

        let listProducts = products.map(product =>{
            return <li>{product}</li>;
        })
        return(

           <div>
               {this.props.name}
               <h1>{message}</h1>

               <Name />
               <Name />
               <Name />
               <Name />
               <Name />

               <ul>
                {listProducts}
               </ul>
           </div> 

        );
    }
}

export default Products