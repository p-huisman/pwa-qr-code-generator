import "p-elements-core";

import css from "./top-nav-item.css?inline";

@CustomElementConfig({
  tagName: "p-top-nav-item",
})
export class PTopNavItemElement extends CustomElement {
  constructor() {
    super();
    const template = this.templateFromString(
      `<style>${css}</style>
      <div><slot></slot></div>`,
      true
    );
    this.shadowRoot?.appendChild(template);
  }
}
