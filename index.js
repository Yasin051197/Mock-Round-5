

let form=document.getElementById("signup")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let user={
        username:document.getElementById("username").value,
        avatar:document.getElementById("avatar").value,
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value,
    }
    console.log(user)
    if(user.username && user.avatar && user.email && user.pass){
        
            return fetch("https://mock-round-5.onrender.com/users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            }).then((res)=>res.json()
            .then(()=>{
                window.location.href="./signIn.html"
            }))
    }
    else{
        alert("Please fill all the details")
    }
})