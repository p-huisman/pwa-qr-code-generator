import "p-elements-core";

import css from "./top-nav.css?inline";

@CustomElementConfig({
  tagName: "p-top-nav",
})
export class PTopNavElement extends CustomElement {
  constructor() {
    super();
    const template = this.templateFromString(
      `<style>${css}</style>
      <div id="List"><slot></slot></div>`,
      true
    );
    this.shadowRoot?.appendChild(template);
  }
}
