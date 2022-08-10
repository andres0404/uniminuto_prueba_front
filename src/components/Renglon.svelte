<script>
    import { data_formulario, data_grilla } from "../store.js";
    export let id;
    export let idfr;
    export let name;
    export let lastname;
    export let email;
    export let earn;

    const API_DEL = "http://localhost:8001/empleados/delete/";
    let promise;
    function EditarEmpleado(){
        data_formulario.set( {
            id:id,
            idfr:idfr,
            name: name,
            lastname: lastname,
            email:email,
            earn: earn
        });
        console.log("editar dato", $data_formulario);
    }
    async function deleteEmpleado(){
        const del = await fetch(`${API_DEL}${id}`,{method: 'get'}).then(response => {
            console.log("borrando", response);
            let grilla = $data_grilla;
            let index_data = grilla.findIndex(e => e.id == id);
            grilla.splice(index_data,index_data);
            data_grilla.set(grilla);
        });
    }
    function handlerDelete(){
        promise = deleteEmpleado();
    }
</script>
<tr>
<td><button type="button" on:click={EditarEmpleado}>Editar</button><button type="button" on:click={handlerDelete}>
    {#await promise}
    ...borrando
    {:then num}
    Borrar
    {/await}
</button>
</td><td>{name}</td><td>{lastname}</td><td>{email}</td><td>{earn}</td>
</tr>