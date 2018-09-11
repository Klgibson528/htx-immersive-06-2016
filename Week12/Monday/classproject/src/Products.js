import React, { Component } from 'react';
import Name from './Name';
import Test from './test';


class Products extends Component{

    render(){

        let message = "This is the first day of React";

        let products = ['milk', 'cheese', 'oreos', 'eggs', 'shoes'];

        let listProducts = products.map(product =>{
            return <li key={product}>{product}</li>;
        })

        return(


           <div>
               Products App
               <Test txt="this is some text" cat={1} />
               {this.props.name}
               {this.props.newName}
               <h1>{message}</h1>

            
               <ul>
                {listProducts}
               </ul>
           </div> 

        );
    }
}

export default Products