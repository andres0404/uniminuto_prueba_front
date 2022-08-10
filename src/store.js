import { writable } from "svelte/store";



export const data_formulario = writable( {
    id:null,
    idfr:Date.now(),
    name: "",
    lastname:"",
    email:"",
    earn:null
});
export const data_grilla = writable( [{
    id:null,
    idfr: 23,
    name: "Pablo",
    lastname:"neruda",
    email:"pal@g.com",
    earn:3344
}]);