
document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos() {
    
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/src/utils/productos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            
            let data = JSON.parse(this.responseText);
            //console.log(data);

            let res = document.querySelector('#prod-grip');
            res.innerHTML = '';

            for (let item of data) {
                 res.innerHTML += `
                 <div class="prod-card">
                    <div class="prod-img">
                        <img src="/src/img/img_load.jpg"/>
                    </div>
                    <div class="prod-name" >
                        <input type="hidden" id="prod-name" value=${item.prod_name}/>
                        <p>${item.prod_name}</p>
                    </div>
                    <div class="prod-footer">
                        <div class="prod-price">
                            <input type="hidden" class="price" id="prod-price" value=${item.price}>
                                <p>${item.price}</p>
                        </input>
                        </div>
                        <div class="button" >
                        <input type="button" id="boton-guardar">
                            <p>CARRO</p>
                        </input>
                    </div>
                    </div>
                </div>
                 
                 `
            }

        }

    }
}