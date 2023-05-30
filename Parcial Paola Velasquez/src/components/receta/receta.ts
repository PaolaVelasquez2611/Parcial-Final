import { dispatch } from "../../store";
import { saveit } from "../../store/actions";
import { Receta } from "../../types/receta";

const datavalue :Receta = {
    receta:"",
    ingredientes:"",
    instrucciones:"",
    link:"",
}

class Recetas extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if (this.shadowRoot)
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/receta/receta.css">
        `
        
        const title1 = this.ownerDocument.createElement('h1');
        title1.id = "this"
        title1.innerText = "Nombre de Receta"
        this.shadowRoot?.appendChild(title1);

        const nombre = this.ownerDocument.createElement('input');
        nombre.addEventListener("change",(e:any)=>{
            datavalue.receta = e.target.value
        })
        this.shadowRoot?.appendChild(nombre);

        const title2 = this.ownerDocument.createElement('h1');
        title2.innerText = "Ingredientes"
        this.shadowRoot?.appendChild(title2);

        const ingredientes = this.ownerDocument.createElement('input');
        ingredientes.addEventListener("change",(e:any)=>{
            datavalue.ingredientes = e.target.value
        })
        this.shadowRoot?.appendChild(ingredientes);

        const title3 = this.ownerDocument.createElement('h1');
        title3.innerText = "Instrucciones"
        this.shadowRoot?.appendChild(title3);

        const instrucciones = this.ownerDocument.createElement('input');
        instrucciones.addEventListener("change",(e:any)=>{
            datavalue.instrucciones = e.target.value
        })
        this.shadowRoot?.appendChild(instrucciones);

        const title4 = this.ownerDocument.createElement('h1');
        title4.innerText = "Imagen"
        
        this.shadowRoot?.appendChild(title4);

        const link = this.ownerDocument.createElement('input');
        link.addEventListener("change",(e:any)=>{
            datavalue.link = e.target.value
        })
        this.shadowRoot?.appendChild(link);

        const button = this.ownerDocument.createElement('button');
        button.innerHTML="Send"
        button.addEventListener("click",async()=>{
            console.log(datavalue);
            dispatch(await saveit(datavalue))
        })
        this.shadowRoot?.appendChild(button);



    }
}

customElements.define('app-receta', Recetas)
export default Recetas