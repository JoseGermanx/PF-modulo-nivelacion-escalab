// /*Funcion de Capturar, Almacenar datos y Limpiar campos*/
//    // var carrito = [];
//     $(document).ready(function(){    
//         $('#boton-guardar').click(function(){        
//             /*Captura de datos escrito en los inputs*/        
//             var prod = document.getElementById("prod-name").value;
//             var prodPrice = document.getElementById("prod-price").value;
//             localStorage.setItem('Producto', prod);
//             console.log(prod);
//             // var newItem = {
//             //     Producto: prod,
//             //     Precio: prodPrice
//             // };
            
//             //  console.log(newItem);

//             //  carrito.push(newItem);
//             //  localStorage.setItem('Carrito', JSON.stringify(carrito))
//         });
        
//     });

// /*Funcion Cargar y Mostrar datos*/
// $(document).ready(function(){    
//     $('#boton-cargar').click(function(){                       
//         /*Obtener datos almacenados*/
//         var prod = localStorage.getItem("Producto");
//         var prodPrice = localStorage.getItem("Precio");
//         /*Mostrar datos almacenados*/      
//         document.getElementById("prod-encarro").innerHTML = prod;
//         document.getElementById("price-encarro").innerHTML = prodPrice; 
//     });   
// });


let count = 0;
let sum = 0;
let cart = {};

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();


let btns = document.querySelectorAll(".prod-footer button");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);

    // id = btn.dataset.id;
    // if (cart.indexOf(id) >= 0) {
    //     btn.className = "added";
    //     btn.textContent = "Remove";
    // }
}

function add(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;
    console.log(price, title, id);

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        Producto: title,
        Precio: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count++;
    sum += price;

    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    // document.getElementById("sum").textContent = sum;
    // document.getElementById("count").textContent = count;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}