

let form=document.getElementById("signin")
form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let login={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    console.log(login)
    let el=await fetch("https://mock-round-5.onrender.com/users")
    let data=await el.json()
    console.log(data)
    checklogin(data,login)
})

const checklogin=(data,login)=>{
    data.forEach(el => {
        if(login.email===el.email){
            if(login.password===el.pass){
                alert("login successful")
                
                window.location.href=`./blogs.html`
            }
            else{
                alert("login failed")
            }
        }
    });
}