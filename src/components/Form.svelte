<script>
    import { data_formulario,data_grilla } from "../store.js";
    function setStateForm(event){
        data_formulario.set( {
            id:event.target.id.value,
            idfr:event.target.idfr.value,
            name: event.target.name.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            earn: event.target.earn.value
        });
    }
    const API_SET = "http://localhost:8001/empleados";
    
    async function setApiEmpleado(){
        let data_form = [];
        for (let prop in $data_formulario){
            let encodeKey = encodeURIComponent(prop);
            let encodeValue = encodeURIComponent($data_formulario[prop]);
            data_form.push(`${encodeKey}=${encodeValue}`);
        }
        const send = await fetch(API_SET, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: data_form.join("&")
        });
    }
    function new_upate_empleado(event){
        setStateForm(event);
        console.log("form",$data_formulario);
        setApiEmpleado();
        let grilla = $data_grilla;
        let id_data_form = grilla.findIndex(e => e.idfr == event.target.idfr.value);
        if( id_data_form != -1 ){
            grilla[id_data_form] = $data_formulario;
        } else {
            grilla = [ ...$data_grilla,$data_formulario];
        }
        data_grilla.set(grilla);
        console.log("grilla",$data_grilla);
        limpiarForm();
    }
    function limpiarForm(){
        data_formulario.set({
            id:null,
            idfr: Date.now(),
            name: "",
            lastname: "",
            email: "",
            earn: 0
        });
        console.log("form",$data_formulario);
    }
</script>
<form on:submit|preventDefault={new_upate_empleado}>
    <input type="hidden" id="id" value="{$data_formulario.id}" />
    <input type="hidden" id="idfr" value="{$data_formulario.idfr}" />
    <div><div class="labelt">Nombre:</div><span><input type="text" id="name" value="{$data_formulario.name}"  /></span></div>
    <div><div class="labelt">Apelido:</div><span><input type="text" id="lastname" value="{$data_formulario.lastname}"/> </span></div>
    <div><div class="labelt">E-mail:</div><span><input type="email" id="email" value="{$data_formulario.email}"/></span></div>
    <div><div class="labelt">Salario:</div><span><input type="number" id="earn" value="{$data_formulario.earn}" /></span></div>
    <div><button type="submit" >Guardar</button><button type="button" on:click={limpiarForm}>Nuevo</button></div>
</form>
<style>
div{

    padding: 3px 5px ;
}

.labelt {
    width: 7em;
    
    display: inline-block;
}
span {
    max-width: 700px;
    
    align-items:left;
    justify-content: center;
    text-align: left ;
    padding: 10px 10px;
    margin: 5px 5px;
}
form {
    text-align: left;
}
</style>