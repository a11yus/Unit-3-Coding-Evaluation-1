
let productData = JSON.parse(localStorage.getItem('products'));

productData.map(function (elm, index)
{
    let main_div = document.getElementById('all_products');

    let div = document.createElement('div');

    let image = document.createElement('img');
    image.style.width = "200px";
    image.style.height = "200px";
    image.src = elm.image;

    let type = document.createElement('h3');
    type.innerText = elm.type;

    let desc = document.createElement('p');
    desc.innerText = elm.desc;

    let price = document.createElement('p');
    price.innerText = elm.price;


    let rmv_btn = document.createElement('button');
    rmv_btn.setAttribute("id", "remove_product");
    rmv_btn.innerText = "Remove";
    rmv_btn.addEventListener('click',function() 
    {
        removeItems(elm, index);
    })

    div.append(image, desc, price, rmv_btn);
    main_div.append(div);

})

removeItems = (elm, index) => 
{
    console.log(elm);
    productData.splice(index, 1);
    console.log(productData);
    localStorage.setItem("products",JSON.stringify(productData));
    window.location.reload();

}
