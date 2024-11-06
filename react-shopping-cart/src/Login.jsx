import React, {useState} from "react";
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";

export default function Login(){
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15},
        {id: 3, name: "Item 3", price: 20},
      ]
    
    //accounts list
    let accounts = [
        {id: 2 , username: "admin", password: "admin", role: "admin"},
        {id: 1, username: "customer", password: "customer", role: "customer"},
        {id: 3, username: "customer", password: "customer", role: "customer"},
        {id: 4, username: "customer", password: "customer", role: "customer"}
    ]

    //boolean state for logging in
    const [isLoggedIn, setIsLoggedIn] = useState (false);
    const [role, setRole] = useState ("")
    const [enteredUsernames, setEnteredUsernames] = useState ("")
    const [enteredPasswords, setEnteredPasswords] = useState ("")

    //functional handlers for updating USERNAME states
    function getUsername(event){
        setEnteredUsernames(event.target.value)
    }
    
    //functional handlers for updating PASSWORD states
    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }

    //handling LOGIN PROCESS
    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    //component for rendering login page
    function renderLogin(){
        return(
            <div>
                <h1>Login:</h1>
                Username: <input type="text" placeholder="Username" id="Username" onChange={getUsername} />
                Password: <input type="password" placeholder="Password" id="Password" onChange={getPassword} />
                <button onClick={handleLogin}> Login </button>
            </div>
        )
    }

    //component for RENDERING SHOP
    function renderShop(){
        return(
            <Shop isLoggedIn = {isLoggedIn} items = {items} />
        )
    }

    //component for rendering ADMIN PANEL
    function renderAdmin(){
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    if (isLoggedIn === false){
        return renderLogin()
    }
    else{
        if(role === "customer"){
            return(
                <>
                {renderShop()}
                </>
            )
        }
        else{
            return(
                renderAdmin()
            )
        }
    }
    
}