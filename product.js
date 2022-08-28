// This page will provide all the necessary js for product.html and the function mentioned on it.

let backBTN=JSON.parse(localStorage.getItem("backBTN")) || 0;
let query=JSON.parse(localStorage.getItem("query")) || "";
main(query)

let data;
// function "main" for fetching data using api link with "query" argument;
async function main(catchquery) {
    
    try {
        let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${catchquery}`)
        // let res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)


        data = await res.json()
        console.log(data);
        displayData(data) //calling display data (dom) 
       

    } catch (err) {
        console.log("Not found")
        console.log("err",err)
    }
}

// availables tags(Blush,Bronzer,Eyebrow,Eyeshadow,Foundation,Lip_liner,Lipstick,Mascara,Nail_polish)
// main(query) 

//function for button (onlick function)
function pressedbtn(ele)
{
    console.log(ele.id)
    //caling data using available tabs
    categoryTitle=ele.id
     
     //heading of category
localStorage.setItem("query",JSON.stringify(categoryTitle));
document.getElementById("category-title").innerText=categoryTitle;
    main(ele.id)
}

let stpg = 0;
let edpg = 18
function nextPagination(){
    if(stpg>=0&&edpg<data.length){
        stpg = stpg + 18;
        edpg = edpg + 18;
        displayData(data);
        window.location.href = "#category-title-div";
        console.log(stpg, edpg)
    }
}
function prevPagination(){
    if(stpg>=0&&edpg>18){
        stpg = stpg - 18;
        edpg =edpg - 18;
        displayData(data);
        window.location.href = "#category-title-div";
        console.log(stpg, edpg)
    }  
}
//display data function (DOM)
function displayData(data)
{

let query=(localStorage.getItem("query")) || "";

    if(backBTN==1)
    {
        document.getElementById("category-title").innerText=query;
        localStorage.setItem("backBTN",JSON.stringify("0"));
    }
    else
    {
        document.getElementById("category-title").innerText=query;

    }
    let container=document.getElementById("product-contianer")
    container.innerHTML="";
    
    //applying highorder function
    // data.forEach(function(ele,index){
        // console.log(ele)
        for(let j=stpg; j<edpg; j++){
            let ele = data[j];
        let maindiv = document.createElement('div');

        let img = document.createElement('img');
        img.src=ele.api_featured_image;

        let title = document.createElement('h3');
        title.innerText=ele.name;
        let desc = document.createElement('p');
        desc.setAttribute("id","Pro_desc")
        if(ele.brand==null || ele.brand=="")
        {
            ele.brand=`Brand: - SUGAR`;
        }
        else{
            desc.innerText=`Brand :  ${ele.brand}`;
        }
        

        //creating div for display shade 
        let shade_div = document.createElement('div');
        let shade_icon = document.createElement('img');

        //importing image from storage (image folder)
        shade_icon.src="./images/plus-icon.png";
        let shade_count = document.createElement('h3');
        shade_count.innerText=`${ele.product_colors.length} SHADES`;

        //if price zero then out of stock code
        const price = document.createElement('h2');
        if(ele.price==0 || ele.price==null)
        {
            
            price.innerText="Outof Stock";
            price.style.color="red";
        }
        else{
            price.innerText=`₹${Math.floor(+(ele.price)*30)}`;
        }

        //appenf all div's here
        shade_div.append(shade_icon,shade_count)
        maindiv.append(img,title,desc,shade_div,price);
        container.append(maindiv)
       

            //collecting product details data in local storage key "productDetail" 
            maindiv.addEventListener("click",function(){
                if(ele.brand==null || ele.brand=="")
                {
                    ele["brand"]="SUGAR";
                }
            localStorage.setItem("productDetail",JSON.stringify(ele));
            window.location.href="./productDetail.html";
        })
    }
    // });
}




//search quaery function
function searchquery()
{
    let cat_title;
    let temp = document.querySelector('#search').value;
    console.log(temp);
    if(temp=="")
    {
        temp="Eyeshadow";
      
       cat_title= document.getElementById("category-title")
  localStorage.setItem("query",JSON.stringify(temp));
  main(temp)
     
    }
    else
    {
       
        cat_title=document.getElementById("category-title");
        cat_title.innerText=`Search Result for "${temp}"`;
        localStorage.setItem("query",JSON.stringify(temp));
        main(temp)
    }
    
    


}

// creating debouncing function for search functionality
let id;
function  debounce(fun,time){
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        fun()
    }, time)
}
