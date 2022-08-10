import { writable } from "svelte/store";


export const data_formulario = writable( {
    id:Date.now(),
    name: "",
    lastname:"",
    email:"",
    earn:0
});
export const data_grilla = writable( [{
    id:23,
    name: "Pablo",
    lastname:"neruda",
    email:"pal@g.com",
    earn:3344
},{
    id: 54,
    name: "sofia",
    lastname:"caro",
    email:"caro@gma.com",
    earn:45000
}]);