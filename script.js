const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];


let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const spanTag = document.createElement("span");
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    //<i class="fa-regular fa-trash-can fa-bounce fa-2xs"></i>
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("fa-regular", "fa-trash-can", "fa-bounce", "fa-2xs");
    trashIcon.addEventListener("click", () => {
        productContainer.remove();
    });


    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    spanTag.id = productId;
    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("purchased");
        if(classExist){
            parentDiv.classList.remove("purchased");
        } else {
            parentDiv.classList.add("purchased");
        }
    });

    const product = productId.toString() + ". " + inputValue;

    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(productContainer);
    productId += 1;
    inputTag.value = "";

    
}
inputTag.addEventListener("change", handleChange);