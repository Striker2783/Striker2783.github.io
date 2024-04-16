class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <div class="top-bar">
        <div class="bar-main">
            <a href="">
                Portfolio
            </a>
        </div>
        <div class="options">
            <a href="information">
                Information
            </a>
            <a href="Contact">Contact</a>
        </div>
    </div>
    `;
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/nav-bar.css");
    this.shadowRoot.appendChild(linkElem);
  }
}

customElements.define("nav-bar", NavigationBar);
