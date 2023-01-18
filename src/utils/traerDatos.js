
//document.querySelector('html', traerDatos());
function traerDatos() {
    
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/src/utils/productos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            
            let data = JSON.parse(this.responseText);
            console.log(data);
            
            let seleccNode = document.querySelector('#prod-grip');
            seleccNode.className = "prod-grip"
            console.log(seleccNode);

            data.forEach( (prod) => {

            let prodCard = document.createElement('div');
            prodCard.className = "prod-card";           

            let imgProdCard = document.createElement('div');
            imgProdCard.className = "img-prod";
            imgProdCard.innerHTML = `<img src="/src/img/img_load.jpg"/>`;
            
            let nameProdCard = document.createElement('div');
            nameProdCard.className = "prod-name";
            nameProdCard.innerHTML = `<input type="hidden" id="prod-name" value=${prod.prod_name}/>
            <p>${prod.prod_name}</p>
            </input>
            `;           

            let footerProdCard = document.createElement('div');
            footerProdCard.className = "prod-footer";
            footerProdCard.innerHTML= `<input type="hidden" class="price" id="prod-price" value=${prod.price}>
            </input>
            `;                

            let prodPrice = document.createElement('div');
            prodPrice.className = "prod-price";
            prodPrice.innerHTML = `
            <p>${prod.price}</p>
            `;           

            let buttonContainer = document.createElement('div');
            buttonContainer.className = "button";

            let button = document.createElement('button');
            button.id = "botonadd";
            button.innerHTML = `Agregar +`;
            button.dataset.price=`${prod.price}`;
            button.dataset.id=`${prod.id}`;
            button.dataset.title=`${prod.prod_name}`;                       

            seleccNode.appendChild(prodCard);
            prodCard.appendChild(imgProdCard);    
            prodCard.appendChild(nameProdCard);                    
            prodCard.appendChild(footerProdCard);
            footerProdCard.appendChild(prodPrice);
            footerProdCard.appendChild(buttonContainer);             
            buttonContainer.appendChild(button);
            
            });



            // data.forEach( (prod) => {

            //     let content = document.createElement ('div');
            //     content.className = "prod-card";
            //     content.innerHTML = `
            //     <div class="prod-img">
            //             <img src="/src/img/img_load.jpg"/>
            //         </div>
            //         <div class="prod-name" >
            //             <input type="hidden" id="prod-name" value=${prod.prod_name}/>
            //             <p>${prod.prod_name}</p>
            //         </div>
            //         <div class="prod-footer">
            //             <div class="prod-price">
            //                 <input type="hidden" class="price" id="prod-price" value=${prod.price}>
            //                     <p>${prod.price}</p>
            //             </input>
            //             </div>
            //             <div class="button" >
            //             <button id="boton-guardar">CARRO</button>
            //         </div>
            //         </div>       
            //     `
            // });
            let res = document.querySelector('#prod-grip');        

            // for (let item of data) {
            //      res.innerHTML += `
            //      <div class="prod-card">
            //         <div class="prod-img">
            //             <img src="/src/img/img_load.jpg"/>
            //         </div>
            //         <div class="prod-name" >
            //             <input type="hidden" id="prod-name" value=${item.prod_name}>
            //             <p>${item.prod_name}</p>
            //             </input>
            //         </div>
            //         <div class="prod-footer">
            //             <div class="prod-price">
            //                 <input type="hidden" class="price" id="prod-price" value=${item.price} >
            //                     <p>${item.price}</p>
            //             </input>
            //             </div>
            //             <div class="button" >
            //             <button id="boton-guardar" data-price=${item.price} data-id=${item.id} data-title=${item.prod_name}>+ Agregar</button>
            //         </div>
            //         </div>
            //     </div>                 
            //      `
            // }

        }

    }
}

