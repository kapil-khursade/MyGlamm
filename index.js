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
   

// Best seller slider divs with the button function for left and right
    
// Rihght side
let r = 4;
let l = 1;

function bestSellerRight(){
    if(r<8){
      r++;
      l++;
      window.location.href = `#best_seller_scrol_${r}` 
    }   
}

// left side
function bestSellerLeft(){
  if(l>1){
    r--;
    l--;
    window.location.href = `#best_seller_scrol_${l}`
  }
}

// appending the data to the slider product in best seller
// http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline


// Fetching the data from the api
bestSellerData();

async function bestSellerData(){
  try{

    let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
    let data = await res.json();
    // console.log("data:", data[0]);
    bestSellerDataAppend(data)

  }catch(err){
    // console.log("err:", err)
  }
}

function bestSellerDataAppend(data){

  for(let a=1; a<=8; a++){

    let img = document.createElement("img");
    img.src = data[a].image_link;

    let brand = document.createElement("p");
    brand.innerText = data[a].brand;

    let name = document.createElement("p");
    name.innerText = data[a].name;

    let rate = document.createElement("p");
    if( data[a].rating!=null){
      rate.innerText = `Ratings ${data[a].rating}` ;
    }else{
      rate.innerText = "Ratings 4"
    }
    

    let price = document.createElement("h4");
    price.innerText = `₹${Math.floor(data[a].price*30)}`

    document.getElementById(`best_seller_scrol_${a}`).innerHTML = null;
    document.getElementById(`best_seller_scrol_${a}`).append(img, brand, name, rate, price);

    // Showing the best seller data in details on productDetail.html
    document.getElementById(`best_seller_scrol_${a}`).addEventListener("click", function(){
      localStorage.setItem("productDetail",JSON.stringify(data[a]));
      window.location.href="./productDetail.html";
    })
  }
}

// Playing the brand vedio
function playBrandVedio(){ 
  let brandvedio = document.getElementById("brand_story_vedio");
  if(brandvedio.muted === true){
    brandvedio.muted = false;
  }else{
    brandvedio.muted = true;
  }

}

// Adding the functionality to shop from categor

document.querySelector("#shop_from_cate_div2").addEventListener("click", function(event){
   localStorage.setItem("query", event.target.innerText);
   window.location.href = "./product.html";
})
