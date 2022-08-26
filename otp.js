// This page will provide js for otp.html


let otp;
let inputOtp;
// showCountdownTimer();
showOtp();
function showOtp(){

    otp =9999-Math.ceil(Math.random()*1000);
    alert(`OTP is ${otp}`);
    showCountdownTimer()
   
}

function showCountdownTimer(){

    let time = 20;

   let id = setInterval(function(){
        if(time>9){
            document.getElementById("timer").innerText = `00:${time}`; 
        }else{
            document.getElementById("timer").innerText = `00:0${time}`;
        }
        time--;
        if(time < 0){
            clearTimeout(id);
            let newOtp = document.createElement("div");
            newOtp.innerText = "Resend OTP";
            newOtp.addEventListener("click", function(){
                document.getElementById("timer").innerHTML = null;
                showOtp();
            })
            document.getElementById("timer").innerText = null;
            document.getElementById("timer").append(newOtp);
          
        }
    }, 1000);
  
}

function verfyOtp(){

    inputOtp =  document.querySelector("#inputOtp").value;

    if(inputOtp == otp){
     alert("Login Successfull")
    }else{
    alert("Login Failed")
    }
}

// Ressending the otp
