import { addObserver, appState } from "../../store";


class Lista extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
        addObserver(this)
    }

    render() {
        if (this.shadowRoot){
            this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/lista/lista.css">
        `

            const titleapp = this.ownerDocument.createElement('h1');
            titleapp.innerText = " Lista de Recetas Deliciosas"
            this.shadowRoot.appendChild(titleapp)
            
            appState.recetas.forEach((r)=>{



                const container = this.ownerDocument.createElement('div');
                

                const Receta = this.ownerDocument.createElement('h2');
                Receta.innerText = r.receta
                container.appendChild(Receta);

                const Ing = this.ownerDocument.createElement('p');
                Ing.innerText = r.ingredientes
                container.appendChild(Ing);

                const Inst = this.ownerDocument.createElement('p');
                Inst.innerText = r.instrucciones
               container.appendChild(Inst);

                const Img = this.ownerDocument.createElement('img');
                Img.src = r.link
                container.appendChild(Img);

                this.shadowRoot?.appendChild(container);

            })
          
        }
        
    }
}

customElements.define('app-list', Lista)
export default Lista