let cartFill = {};
if (localStorage.getItem("cart")) {
    cartFill = JSON.parse(localStorage.getItem("cart"));
    console.log(cartFill);
}

let tbody = document.getElementById("tbody");

for (let id in cartFill) {
    let item = cart[id];

    let tr = document.createElement('tr')

    let title_td = document.createElement('td')
    title_td.textContent = item.Producto
    tr.appendChild(title_td)


    let price_td = document.createElement("td");
    price_td.textContent = item.Precio;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    
    let tot_td = document.createElement("td");
    tot_td.textContent = item.qty*item.Precio;
    tr.appendChild(tot_td);

    tbody.appendChild(tr)
}

function showCart() {
    var x = document.getElementById("mostrar-carro");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}
