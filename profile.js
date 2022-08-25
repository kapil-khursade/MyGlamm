// This page will include all the js for function mentioned on the profile.js , exportable side bar.

  let data=JSON.parse(localStorage.getItem("userData"))
 let namechng=document.getElementsByClassName("namechng").innerText=data.name
 let emailchng=document.getElementsByClassName("emailchng").innerText=data.email
 let mobchng=document.getElementsByClassName("mobchng").innerText=data.mobile

//  let obj ={name:"Kapil",
//  email: "xyz@gmail.com",
//   mobile:"879878678"}

// localStorage.setItem("userData",JSON.stringify(obj))

