import "p-elements-core";

import css from "./dialog.css?inline";
import { waitForElement } from "../../helpers/dom";

@CustomElementConfig({
  tagName: "p-dialog",
})
export class PDialogElement extends CustomElement {
  constructor() {
    super();
    const template = this.templateFromString(
      `<style>${css}</style><div></div>`,
      true
    );
    this.shadowRoot?.appendChild(template);
    const rootElement = this.shadowRoot?.querySelector<HTMLDivElement>("div");
    if (rootElement) {
      this.createProjector(rootElement, this.render);
    }
  }

  static get observedAttributes() {
    return ["caption"];
  }

  public get dialogElement(): Promise<HTMLDialogElement> {
    return waitForElement("dialog", this.shadowRoot ? this.shadowRoot : this);
  }

  public close() {
    this.dialogElement.then(dialog => dialog.close());
  }

  private static createPromptDialog(
    caption: string,
    text: VNode,
    buttons: HTMLButtonElement[]
  ) {
    const dialog = document.createElement("p-dialog") as PDialogElement;
    const projector = Maquette.createProjector();
    const header = document.createElement("header");
    const main = document.createElement("main");
    header.textContent = caption;
    header.slot = "header";

    projector.merge(main, () => text);
    buttons.forEach(button => dialog.appendChild(button));
    dialog.appendChild(header);
    dialog.appendChild(main);
    return dialog;
  }

  private static stringsToButtons(
    buttons: string[],
    eventHandler: EventListener
  ): HTMLButtonElement[] {
    return buttons.map((buttonText, index) => {
      const button = document.createElement("button");
      button.textContent = buttonText;
      button.slot = "footer";
      button.setAttribute(
        "part",
        index === 0 ? "button primary-button" : "button"
      );
      button.addEventListener("click", eventHandler);
      return button;
    });
  }

  static async prompt(
    caption: string,
    text: VNode,
    buttons: string[] = ["OK"]
  ): Promise<string> {
    let resolvePromise: (buttonText: string) => void;
    const promptResult = new Promise<string>((resolve /*reject*/) => {
      resolvePromise = resolve;
    });

    const buttonClick = (event: Event) => {
      const button = event.target as HTMLButtonElement;
      resolvePromise(button?.textContent ? button.textContent : "");
      button?.closest<PDialogElement>("p-dialog")?.close();
      event.preventDefault();
    };

    const buttonElements = PDialogElement.stringsToButtons(
      buttons,
      buttonClick
    );

    const dialog = PDialogElement.createPromptDialog(
      caption,
      text,
      buttonElements
    );
    document.body.appendChild(dialog);
    const dlg = await dialog.dialogElement;
    dlg.addEventListener("cancel", event => event.preventDefault());
    dlg.addEventListener(
      "close",
      () => dialog?.parentElement?.removeChild(dialog)
    );
    dlg.showModal();
    return promptResult;
  }

  private render = () => {
    return (
      <dialog>
        <div class="dialog-content">
          <div class="dialog-header-container">
            <slot name="header"></slot>
          </div>
          <div class="dialog-body-container">
            <slot></slot>
          </div>
          <div class="dialog-footer-container">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    );
  };
}
