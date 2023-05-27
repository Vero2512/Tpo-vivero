let cad=`
<div class="fija">
<h1>Flores del Bosque</h1>
<nav>
    <a href="./index.html">
        <img width="50" src="./imagenes/planta-arana.png" alt=" logo plantas">
    </a>
    <a class="aheader" href="index.html">Menu</a>
    <a class="aheader" href="nosotros.html">Nosotros</a>
    <a class="aheader" href="sucursales.html">Sucursales</a>
    <a class="aheader" href="contacto.html">Contacto</a>

    
</nav>
</div>

`
document.querySelector("header").innerHTML=cad;

let cadFooter=`
<a href="./index.html">
            <img width="40" src="./Imagenes/planta-arana.png" alt="plantas">
        </a>

        <nav>
            <a class="redes" href="https://api.whatsapp.com/send?phone=11111111" target="_blank">
                <img width="20" src="./Imagenes/whatsapp.png" alt="whatsapp">
            </a>
            <a class="redes" href="https://es-la.facebook.com/" target="_blank">
                <img width="20" src="./Imagenes/facebook.png" alt="facebook">
            </a>
            <a class="redes" href="mailto:ejemplo@gmail.com" target="_blank">
                <img width="20" src="./Imagenes/gmail.png" alt="mail">
            </a>
            <a class="redes" href="https://www.instagram.com/" target="_blank">
                <img width="20" src="./Imagenes/instagram.png" alt="instagram">
            </a>

        </nav>
        <p>Sitio desarrollado por Veronica Vargas</p>


`
document.querySelector("footer").innerHTML=cadFooter;