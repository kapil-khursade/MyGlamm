// Will provide all the js required for detail.html
let productDetailLS=JSON.parse(localStorage.getItem("productDetail")) || [];
displayDetails(productDetailLS)
function displayDetails(data)
{
   
    let img = document.createElement('img');
    img.src=data.api_featured_image;

   
    let title = document.createElement('h3');
    title.innerText=data.name;
    let desc = document.createElement('p');
    desc.setAttribute("id","Pro_desc")
    desc.innerText=data.description;
    let price = document.createElement('h2');
        if(data.price==0 || data.price==null)
        {
            price.innerText="Outof Stock";
            price.style.color="red";
            // maindiv.style.cursor="not-allowed";
        }
        else{
            price.innerText=`$${data.price}`;
        }

        document.getElementById("rightBox").append(title,desc,price)
        document.getElementById("leftBox").append(img)
      
   
}

