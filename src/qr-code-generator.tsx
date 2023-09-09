import "p-elements-core";

import QRCodeStyling, { Options } from "qr-code-styling";
import css from "./qr-code-generator.css?inline";

@CustomElementConfig({
  tagName: "p-qr-code-generator",
})
export class PQrCodeGeneratorElement extends CustomElement {
  constructor(
    private defaultStyling: Options,
    private qrCode?: QRCodeStyling
  ) {
    super();
    this.defaultStyling = {
      width: 1200,
      height: 1200,
      data: this.url,
      qrOptions: {
        mode: "Byte",
        errorCorrectionLevel: "H",
      },
      imageOptions: {
        hideBackgroundDots: false,
        imageSize: 1,
        margin: 0,
      },
      dotsOptions: {
        type: "square",
        color: "#393a3c",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#404b96",
      },
      cornersDotOptions: {
        type: "square",
      },
    };
    const template = this.templateFromString(
      `<style>${css}</style><div class="root"></div>`
    );
    this.qrCode = new QRCodeStyling(this.defaultStyling);
    this.shadowRoot?.appendChild(template);
    const rootElement = this.shadowRoot?.querySelector<HTMLDivElement>(".root");
    if (rootElement) {
      this.createProjector(rootElement, this.render);
    }
  }

  private url: string = "https://pfzw.nl";

  private render = () => {
    return (
      <div>
        <label for="UrlInput">URL</label>
        <input
          id="UrlInput"
          type="url"
          value={this.url}
          oninput={this.onDataChange}
        />
        <div id="QRContainer" afterCreate={this.onCreateQRElement}></div>
        <button onclick={this.onDownloadButtonClick}>Download QR code</button>
      </div>
    );
  };

  private onCreateQRElement = (n: HTMLElement) => {
    this.qrCode?.append(n);
  };

  private onDataChange = (e: Event) => {
    const htmlInput = e.target as HTMLInputElement;
    this.url = htmlInput.value;
    this.defaultStyling = { ...this.defaultStyling, data: this.url };
    this.qrCode?.update(this.defaultStyling);
  };

  private onDownloadButtonClick = async () => {
    const defaultPath = this.url
      .split("//")[1]
      .replaceAll("/", "-")
      .replaceAll("?", "-")
      .replaceAll(".", "-")
      .replaceAll("/", "-");
    const svg = this.qrCode?._svg?.outerHTML;
    if (svg) {
      const f = svg.replace(
        "<svg ",
        '<svg xmlns="http://www.w3.org/2000/svg" '
      );

      const opts = {
        suggestedName: defaultPath,
        types: [
          {
            description: "SVG Files",
            accept: { "application/svg+xml": [".svg"] },
          },
        ],
      };

      const fileHandle = await (window as any)
        .showSaveFilePicker(opts)
        .catch(e => e);
      if (fileHandle instanceof Error) {
        return;
      }
      const writable = await fileHandle.createWritable();
      await writable.write(f);
      await writable.close();
    }
  };
}
