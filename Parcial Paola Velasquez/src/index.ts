import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const recetaform = this.ownerDocument.createElement('app-receta');
        this.shadowRoot?.appendChild(recetaform);

        const lista = this.ownerDocument.createElement('app-list');
        this.shadowRoot?.appendChild(lista);
    }
}

customElements.define('app-container', AppContainer)