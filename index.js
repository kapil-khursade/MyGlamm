// This page will consist the javascript related to home page, importing navbar and footer

// Slider add id="slider_add"

let sliderAddData = ["https://files.myglamm.com/site-images/original/Desktop_1.jpg", 
"https://files.myglamm.com/site-images/original/1920-X-527-C.jpg", 
"https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527---CTA-yes_5.jpg", 
"https://files.myglamm.com/site-images/original/1920x527-c.jpg"]; 

document.querySelector("#slider_add>img").src = sliderAddData[0];
statusDotsAd(1);
let i = 1;

// Button on the slider to change the ad on left
function slideAdLeft(){
    resetDotAd(i+1)
i--;
if(i<0){
    i = 3;
    }
    statusDotsAd(i+1);
document.querySelector("#slider_add>img").src = sliderAddData[i];

}

// Button on the slider to change thr ad on right side
function slideAdRight(){
    i++;
if(i>3){
    i = 0;
    }
    statusDotsAd(i+1);
document.querySelector("#slider_add>img").src = sliderAddData[i];

}
// SetInterval will automaticallly change the add after 5 sec
autoSliderAdd(i);
function autoSliderAdd(i){
    setInterval(()=>{
        document.querySelector("#slider_add>img").src = sliderAddData[i];
        statusDotsAd(i+1);
        i++;
        if(i>3){
        i = 0;
        }
    }, 5000); 
}

// The dots showing the status of the
function statusDotsAd(i){
   
  let curDot = document.querySelector(`#slider_add>div:nth-child(4)>span:nth-child(${i})`);
  curDot.style.backgroundColor = "FF9696";
  curDot.style.width = "20px";
  if(i-1>0){
  resetDotAd(i-1)
  }else{
    resetDotAd(4)
  }

}

function resetDotAd(prev){
  let prevDot = document.querySelector(`#slider_add>div:nth-child(4)>span:nth-child(${prev})`); 
  prevDot.style.backgroundColor = "#bbb";
  prevDot.style.width = "7px";
}
   
    
