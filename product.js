let product = document.getElementById("list-section");
let cat = document.getElementById("flex");
let sort = document.getElementById("sort");
let productData = [];
let allCategory = [];

function fillCategory(){
    let row1 = '';
fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        productData = [...data.products];
        category = [...data.products];
        show();
       productData.map(c=>{
        if(!allCategory.includes(c.category)){
            allCategory.push(c.category)
        }
       });
       allCategory.map((categoryName, index)=>{
        row1 += `<li class="cat">
                    <a id="sort" onclick="sort(e)" class="cat-link" href="#">${categoryName}</a>
                </li>`;
       })
       cat.innerHTML = row1

    })
    .catch((err) => console.log(err));

}
fillCategory()

function show() {
    let row = '';
    for (let i = 0; i < productData.length; i++) {
        row += `<div class="col">
                   <img src="${productData[i].thumbnail}"></img>
                   <h5>${productData[i].title}</h5>
                   <div class="d-flex">
                   <b>${productData[i].price}$</b>
                   <span class="green">-${productData[i].discountPercentage}%</span>
                   </div>
                   <p>${productData[i].description}</p>
                   <div class="row">
                   <p>${productData[i].rating}</p>
                   <button onclick="">&#9758 Watch </button>
                   </div>
                   </div>`;

    }
    product.innerHTML = row;
};


let choose = document.getElementById("sort")
sort.addEventListener("change", (event) => {
    let newProductArr = productData.filter((co) => {
      if (choose.value.length > 0) {
        return (
          co.category == event.target.value && co.products.category.includes(choose.value)
        );
      } else {
        return co.category == event.target.value;
      }
    });
    drawHTML(newProductArr);
  });


