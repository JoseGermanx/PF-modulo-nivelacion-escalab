/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var prod = document.getElementById("prod-name").value;
        var prodPrice = document.getElementById("prod-price").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Producto", prod);
        localStorage.setItem("Precio", prodPrice);
        /*Limpiando los campos o inputs*/
        document.getElementById("prod-name").value = "";
        document.getElementById("prod-price").value = "";
    });   
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        /*Obtener datos almacenados*/
        var prod = localStorage.getItem("Producto");
        var prodPrice = localStorage.getItem("Precio");
        /*Mostrar datos almacenados*/      
        document.getElementById("prod-encarro").innerHTML = prod;
        document.getElementById("price-encarro").innerHTML = prodPrice; 
    });   
});