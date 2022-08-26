// This page  will provide js for the myOrder.js
let myOrder = JSON.parse(localStorage.getItem("myOrder"))||[]

function append (data){
    let container=  document.getElementById("myOrdercontainer")
    data.forEach(ele => {
        container.innerHTML=null
         div=document.createElement("div")
         div.setAttribute("class","pdiv")
          img=document.createElement("img")
          img.src=ele.api_featured_image
          img.setAttribute("class","image")
          p=document.createElement("p")
          p.innerText=ele.name
          p2=document.createElement("h4")
          p2.innerText="Order Completed"
         div.append(img,p,p2)
         container.append(div)
    });
}
// append(myOrder)


//
//
//ele.name
//ele.api_featured_image

// let myOrder=JSON.parse(localStorage.getItem("userData"))||[]


//  let obj =[{name:"Maskara",
//  api_featured_image: "https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg",
//   }]

// localStorage.setItem("myOrder",JSON.stringify(obj))


compl=()=>{

   append(myOrder)
}
live =()=>{
    let container=  document.getElementById("myOrdercontainer").innerText=`There are no orders, We have some recommended product for you click !`
}
cncl =()=>{
    let container=  document.getElementById("myOrdercontainer").innerText="There are no orders, We have some recommended product for you click !"
}