let cad1=`
<h2>Contacto</h2>
        <form class="formulario" action="./show-data.html" target="_blank">

            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" placeholder="Ingrese su nombre aqui..."><br>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Ingrese su email aqui..."><br>
            <label for="tel">Telefono</label>
            <input type="tel" name="tel" placeholder="Ingrese su telefono aqui..."><br>
            <label for="sucursal">Sucursal:</label>
            <select id="sucursal" name="sucursal">
                <option value="suc1">Corrientes 3770</option>
                <option value="suc2">Viamonte 2591</option>
                <option value="suc3">Liniers 200 </option>
                <option value="suc4">Drumong 694</option>
            </select><br>
            <label for="consultas">Consultas de stock y precio:</label><br>
            <textarea id="consultas"  name="consultas"  ></textarea>
            <div class="botom">
                <input id="boton" type="submit" value="Enviar">
            </div>




        </form>

`
document.querySelector("main").innerHTML=cad1