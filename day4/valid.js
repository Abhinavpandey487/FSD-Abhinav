function validated() {
    let username = document.getElementById('un').value
    let pass = document.getElementById("pass").value

       if(username!="" && username.length>=10 && pass!="" && pass.length>=10){
        return true
       }
       else{
        return false
       }

    return false
    //     // alert(username)
    //    // alert(pass)
    //    let p1=document.getElementById('result')
    //    {

    //     if(pass=="admin")
    //     {
    //         p1.innerHTML="validated";

    //     }
    //     else{
    //      p1.innerText="Invalid Password"

    //     }

    //    }
    //    else{
    //     p1.innerText="Invalid Username"
    //    }
}