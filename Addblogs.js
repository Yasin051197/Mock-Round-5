

let form=document.getElementById("Addblogs")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let blog={
        title:document.getElementById("title").value,
        content:document.getElementById("content").value,
        category:document.getElementById("category").value,
        date:document.getElementById("date").value,
        likes : 24,
		comments : [{username : "Jane", content : "Good One"}, {username : "Bob", content : "Loved It!"}]
    }
    console.log(blog)
    return fetch("https://mock-round-5.onrender.com/users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(blog)
            }).then((res)=>res.json())
})

