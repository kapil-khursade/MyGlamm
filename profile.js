// This page will include all the js for function mentioned on the profile.js , exportable side bar.

 


 let obj ={name:"Kapil",
 email: "xyz@gmail.com",
  mobile:"879878678"}

localStorage.setItem("userData",JSON.stringify(obj))
let data=JSON.parse(localStorage.getItem("userData"))

let namechng=document.getElementsByClassName("namechng").innerText=data.name
let emailchng=document.getElementsByClassName("emailchng").innerText=data.email
let mobchng=document.getElementsByClassName("mobchng").innerText=data.mobile





let popup =document.getElementById("popup")
function openpopup(){
popup.classList.add("openpopup");
}
function closepopup(){
popup.classList.remove("openpopup");
}


// {/* <style>
// *{
// margin:0;
// padding: 0;
// box-sizing: border-box;
// font-family: "poppins",sans-serif;
// }
// .container{
// width: 100% ;
// height: 100vh;
// background: #3c5077;
// display: flex;
// align-items: center;
// justify-content: center;
// }
// .plus{
// padding: 10px 60px;
// background: #fff;
// border: 0;
// outline: none;
// cursor: pointer;
// font-size: 22px;
// font-weight: 500;
// border-radius: 30px;
// }
// .popup{
// width: 400px;
// background: #fff;
// position: absolute;
/* top: 50%; */
// bottom:0;
// left: 40%;
// transform: translate(-50%,-50%) scale(0.1);
// visibility:hidden;
// text-align: center;
// padding: 0 30px 30px;
// border-radius: 6px;
// color:#333;
// transition:transform 0.4s,bottom 0.4s
// }
// .popup img{
// width:100px;
// margin-top: -50px;

// }
// .openpopup{
// visibility:visible;
// bottom: 50%;
// transform: translate(-50%,-50%) scale(1);
// }
// </style>
// </head>
// <body>
// <div class="container">
//     <button type="submit" class="btn" onclick="openpopup()">Submit</button>
//     <div class="popup" id="popup">
//         <img src="">
//         <h2>Thank You</h2>
//         <p>You have checked</p>
//         <button type="button" onclick="closepopup()">OK</button>
//     </div>
// </div>
// </body>
// </html>
// <script>
// let popup =document.getElementById("popup")
// function openpopup(){
// popup.classList.add("openpopup");
// }
// function closepopup(){
// popup.classList.remove("openpopup");
// }

// </script> */}

