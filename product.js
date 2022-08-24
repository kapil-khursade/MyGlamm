// This page will provide all the necessary js for product.html and the function mentioned on it.


let productDetailLS=JSON.parse(localStorage.getItem("productDetail"))||[];
var categoryTitle;
async function main(catchquery) {
    try {
        let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${catchquery}`)
        // let res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)


        let data = await res.json()
        console.log(data);
        displayData(data)
       

    } catch (err) {
        console.log("Not found")
        console.log("err",err)
    }
}
let query="Lipstick";
// availables tags(Blush,Bronzer,Eyebrow,Eyeshadow,Foundation,Lip_liner,Lipstick,Mascara,Nail_polish)
// main(query) 

function pressedbtn(ele)
{
    console.log(ele.id)
    main(ele.id) //caling data using available tabs
     categoryTitle=ele.id
     document.getElementById("category-title").innerText=categoryTitle;
    
}


function displayData(data)
{
    let container=document.getElementById("product-contianer")
    container.innerHTML="";
    data.forEach(function(ele,index){
        // console.log(ele)
        let maindiv = document.createElement('div');
        let img = document.createElement('img');
        img.src=ele.api_featured_image;

        let title = document.createElement('h3');
        title.innerText=ele.name;
        let desc = document.createElement('p');
        desc.setAttribute("id","Pro_desc")
        desc.innerText=ele.description;

        let shade_div = document.createElement('div');
        let shade_icon = document.createElement('img');
        shade_icon.src="./images/plus-icon.png";
        let shade_count = document.createElement('h3');
        shade_count.innerText=`${ele.product_colors.length} SHADES`;

        const price = document.createElement('h2');
        if(ele.price==0 || ele.price==null)
        {
            price.innerText="OutOf Stock";
            price.style.color="red";
        }
        else{
            price.innerText=`$${ele.price}`;
        }
        shade_div.append(shade_icon,shade_count)
        maindiv.append(img,title,desc,shade_div,price);
        container.append(maindiv)

        maindiv.addEventListener("click",function(){
           localStorage.setItem("productDetail",JSON.stringify(ele));
           window.location.href="detail.html";
        })
        

    });
}





function searchquery()
{
    let temp = document.querySelector('#search').value;
    console.log(temp);
    if(temp=="")
    {
        temp="Eyeshadow";
        main(temp)
        document.getElementById("category-title").innerText=`${temp}`;
        
    }
    else
    {
        main(temp)
        document.getElementById("category-title").innerText=`Search Result for "${temp}"`;
    }
    

}
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


