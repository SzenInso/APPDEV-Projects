import React, {useState} from "react";
import Login from "./Login";

export default function Shop(props){
    let shopItems = props.items              // arrays of objs being passed to ShopItems, let is used to change the items
    const [cart, setCart] = useState([])

    function AddItem(item){
        setCart(c => [...c, item]) 
    }

    function renderItems(){
        return(
            shopItems.map((item) => {
                return(
                    <>
                    <li key = {item.id} >{item.name} </li>
                    <p>Price per piece: ${item.price}</p>
                    <button onClick={() => AddItem(item)}>Add to Cart!</button>
                    </>
                )
            })
        )
    }

    function renderCart(){
        return(
            cart.map((item) => {
                return(
                    <> 

                    <li key = {item.id} >{item.name} </li>
                    <p>Price per piece: ${item.price}</p>
                    <br />
                    </>
                )
            })
        )
    }

    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
        return(
            <> 
            <h4>This is the Shop: </h4>
            <ul>{renderItems()}</ul>
            <h4>Cart Items:</h4>
            {cart.length > 0 ? (<ul>{renderCart()}</ul>) : (<p>There are no items in the cart! </p>)}
            </>
        )
    }
    
}