let container=document.getElementById("blogs")
    let div=document.createElement("div")
    div.setAttribute("id","div")
    let div1=document.createElement("div")
    div1.setAttribute("id","div1")
    let div11=document.createElement("div")
    div11.setAttribute("id","div11")
    let image1=document.createElement("img")
    image1.src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg"
    div11.append(image1)
    let div12=document.createElement("div")
    div12.setAttribute("id","div12")
    let n=document.createElement("h3")
    n.innerText="Harry"
    let cat=document.createElement("p")
    cat.innerText="Entertainment"
    let date=document.createElement("p")
    date.innerText="2023"
    div12.append(n,cat,date)
    let div13=document.createElement("div")
    div13.setAttribute("id","div13")
    let edi=document.createElement("button")
    edi.innerText="Edit"
    let del=document.createElement("button")
    del.innerText="Delete"
    div13.append(edi,del)
    div1.append(div11,div12,div13)
    let div2=document.createElement("div")
    div2.setAttribute("id","div2")
    let btitle=document.createElement("h1")
    btitle.innerText="Blog title"
    let para=document.createElement("p")
    para.innerText="bbgfuguhhvoahivihgvihvojaivhvhv"
    div2.append(btitle,para)
    let div3=document.createElement("div")
    div3.setAttribute("id","div3")
    let likediv=document.createElement("div")
    likediv.setAttribute("id","likediv")
    let like=document.createElement("p")
    like.innerText="24"
    let comment=document.createElement("p")
    comment.innerText="2"
    div3.append(likediv)
    likediv.append(like,comment)
    let butdiv=document.createElement("div")
    let addcomment=document.createElement("button")
    addcomment.innerText="Add Comment"
    butdiv.append(addcomment)
    div3.append(butdiv)
    div.append(div1,div2,div3)
container.append(div)
const appnedData=(data)=>{
   container.innerHTML=" " 
   data.forEach(el => {
    
   });
}