// This page will provide all the necessary js for product.html and the function mentioned on it.
let query=(localStorage.getItem("query")) || "";
main(query)
var categoryTitle=query;

// function "main" for fetching data using api link with "query" argument;
async function main(catchquery) {
    
    if(catchquery=="")
    {
        catchquery="Blush"
    }
    try {
        let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${catchquery}`)
        // let res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)


        let data = await res.json()
        console.log(data);
        document.getElementById("category-title").innerText=categoryTitle;
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
    main(ele.id) //caling data using available tabs
    categoryTitle=ele.id
     
     //heading of category
    document.getElementById("category-title").innerText=categoryTitle;
}


//display data function (DOM)
function displayData(data)
{
    let container=document.getElementById("product-contianer")
    container.innerHTML="";
    
    //applying highorder function
    data.forEach(function(ele,index){
        // console.log(ele)
        let maindiv = document.createElement('div');

        let img = document.createElement('img');
        img.src=ele.api_featured_image;

        let title = document.createElement('h3');
        title.innerText=ele.brand;
        let desc = document.createElement('p');
        desc.setAttribute("id","Pro_desc")
        desc.innerText=ele.name;

        //creating div for display shade 
        let shade_div = document.createElement('div');
        let shade_icon = document.createElement('img');

        //importing image from storage (image folder)
        shade_icon.src="./images/plus-icon.png";
        let shade_count = document.createElement('h3');
        if(ele.product_colors.length>0){
        shade_count.innerText=`${ele.product_colors.length} SHADES`;
        }else{
        shade_count.innerText=`2 SHADES`;  
        }

        //if price zero then out of stock code
        const price = document.createElement('h2');
        if(ele.price==0 || ele.price==null)
        {
            price.innerText="₹499";
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
            localStorage.setItem("productDetail",JSON.stringify(ele));
            window.location.href="./productDetail.html";
        })
        

    });
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
        main(temp)
       cat_title= document.getElementById("category-title")
       cat_title.innerText=`${temp}`;
     
    }
    else
    {
        main(temp)
        cat_title=document.getElementById("category-title");
        cat_title.innerText=`Search Result for "${temp}"`;
        cat_title.style.fontSize="20px";
        cat_title.style.fontWeight="normal";
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
