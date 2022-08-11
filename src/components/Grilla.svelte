<script>
import { data_grilla } from "../store.js";
import Renglon from "./Renglon.svelte";

</script>
<div>
    <p>Empleados</p>
    <table>
        <tr>
            <td></td><td>Nombre</td><td>Apellido</td><td>E-mail</td><td>Salario</td>
        </tr>
            {#each $data_grilla as data_empleado}
            <Renglon  {...data_empleado} />
            {/each}
    </table>
</div>
<style>
    table,  tr {
        border: 4px solid #ffffff;
        width: 80%;
        background-color: lightblue;
        font-weight: bold;
        border-radius: 10px;
    }
</style>