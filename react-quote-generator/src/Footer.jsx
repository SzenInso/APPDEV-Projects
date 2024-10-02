export default function Footer(){
    //stateless components also coz we do not use states
    //states to store info or data intop our components
    return(
        <>
            <footer>
                <hr />
                <p>
                    &copy;
                    {new Date().getFullYear()} My Random Quote Generator Website || Written By: Fhrenne Szen Inso
                </p>
            </footer>
        </>
    )
}