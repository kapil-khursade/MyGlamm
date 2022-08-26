// Will provide all the js required for detail.html
let productDetailLS=JSON.parse(localStorage.getItem("productDetail")) || [];
let recentPage= document.getElementById("recent_page")

let currentPage= document.getElementById("current_page")

displayDetails(productDetailLS)
function displayDetails(data)
{
  
    recentPage.innerText=data.product_type;
    localStorage.setItem("query",JSON.stringify(data.product_type));
    currentPage.innerText=data.name;

    


    let img = document.createElement('img');
    img.src=data.api_featured_image;

   
    let title = document.createElement('h1');
    title.innerText=data.name;
    let desc = document.createElement('p');
    desc.setAttribute("id","Pro_desc")
    desc.innerText=data.description;
    let price = document.createElement('h2');
        if(data.price==0 || data.price==null)
        {
            price.innerText="₹499";
        }
        else{
            price.innerText=`₹${Math.floor(+(data.price)*30)}`;
        }

        document.getElementById("rightBox").append(title,desc,price)
        document.getElementById("leftBox").append(img)
}


recentPage.addEventListener("click",function(){
    window.location.href="./product.html";
})

