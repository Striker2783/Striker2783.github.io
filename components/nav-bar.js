class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
        <h1 class="big-header header" style="font-size: 4rem" href="/">Striker2783's Portfolio</h1>
    </nav>
    `;
  }
}

customElements.define("nav-bar", NavigationBar);
