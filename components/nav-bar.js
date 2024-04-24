class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <nav class="top-bar">
        <a class="big-header header" href="">Striker2783's Portfolio</a>
    </nav>
    `;
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/nav-bar.css");
    this.shadowRoot.appendChild(linkElem);
  }
}

customElements.define("nav-bar", NavigationBar);
