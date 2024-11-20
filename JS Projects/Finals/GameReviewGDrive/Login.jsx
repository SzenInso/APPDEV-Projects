export default function Login() {
    const account = {
        username: "admin",
        password: "admin"
    }
    const renderLoginForm = () => {
        return(
            <div>
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            Username: 
            <input type="text" name="username" id="username" onChange={handleUserNameChange} />
            <br />
            <p>{userName}</p>
            <br />
            Password:
            <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
            <br />
            <br />
            <button type="button">Login</button>
            </div>
        );
    }
}