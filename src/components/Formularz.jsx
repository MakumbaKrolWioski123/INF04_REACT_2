import { useState } from "react";

function Formularz() {

    const [zalogowano, setZalogowano] = useState(false);

    function handleSubmit() {
        const login = document.getElementById("Login");
        const haslo = document.getElementById("Haslo");
        const LoginBlad=document.getElementById("LoginBlad");
        const HasloBlad=document.getElementById("HasloBlad");
        if(login.value.trim()!="" && haslo.value.length>4)
        {
            setZalogowano(true);
            LoginBlad.innerHTML= "";
            HasloBlad.innerHTML= "";
        }
        else
            setZalogowano(false);

        if(login.value.trim()=="")
        {
            LoginBlad.innerHTML= "Login jest pusty";
        }
        else
            LoginBlad.innerHTML= "";

        if(haslo.value.length<5)
        {
            HasloBlad.innerHTML= "Haslo ma mniej niż 5 znaków";
        }
        else
            HasloBlad.innerHTML= "";


    }

    return (
        <div>
            <input placeholder="Login" id="Login"/>
            <p id="LoginBlad"></p>
            <input placeholder="Haslo" id="Haslo" />
            <p id="HasloBlad"></p>
            <button onClick={handleSubmit}>Zaloguj</button>
            <h3>{zalogowano ? "Zalogowano pomyślnie":"Logowanie nieudane"}</h3>
        </div>
    )
}
export default Formularz;