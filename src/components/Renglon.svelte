<script>
    import { data_formulario } from "../store.js";
    export let id;
    export let name;
    export let lastname;
    export let email;
    export let earn;

    function EditarEmpleado(){
        data_formulario.set( {
            id:id,
            name: name,
            lastname: lastname,
            email:email,
            earn: earn
        });
        console.log("editar dato", $data_formulario);
    }
</script>
<tr>
<td><button type="button" on:click={EditarEmpleado}>Editar</button></td><td>{name}</td><td>{lastname}</td><td>{email}</td><td>{earn}</td>
</tr>