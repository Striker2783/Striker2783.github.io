class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <nav class="top-bar">
        <ul class="nav">
            <li> <a class="big-header" href="">Portfolio</a> </li>
            <li> <a href="information">Information</a> </li>
            <li> <a href="contact">Contact</a> </li>
        </ul>
    </nav>
    `;
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/nav-bar.css");
    this.shadowRoot.appendChild(linkElem);
  }
}

customElements.define("nav-bar", NavigationBar);
