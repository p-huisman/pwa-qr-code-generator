import "p-elements-core";

import QRCodeStyling, { Options } from "qr-code-styling";
import css from "./qr-code-generator.css?inline";

import { ThemeService } from "../../services/theme-service";
import { PDialogElement } from "../dialog/dialog";

@CustomElementConfig({
  tagName: "p-qr-code-generator",
})
export class PQrCodeGeneratorElement extends CustomElement {
  constructor(
    private defaultStyling: Options,
    private qrCode?: QRCodeStyling
  ) {
    super();
    this.themeService = new ThemeService();
    this.defaultStyling = {
      width: 1200,
      height: 1200,
      data: this.url,
      qrOptions: {
        mode: "Byte",
        errorCorrectionLevel: "H",
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
    this.initThemes();
  }

  @RenderOnSet
  private themes: any[] = [];

  private async initThemes() {
    this.themes = await this.themeService.getThemes();
  }

  private themeService: ThemeService;

  private url: string = "about:blank";

  private get themePopover(): any {
    return this.shadowRoot
      ? this.shadowRoot?.querySelector<HTMLElement>("#ThemePopover")
      : null;
  }

  private render = () => {
    return (
      <div>
        <p-top-nav>
          <p-top-nav-item id="ThemeMenuItem" onclick={this.onMenuItemClick}>
            Theme
            <div id="ThemePopover" popover="auto">
              {this.themes.map(t => (
                <button
                  onclick={this.onSelectTheme}
                  key={`ThemeId${t.name}`}
                  data-name={t.name}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </p-top-nav-item>

          <p-top-nav-item id="AboutMenuItem" onclick={this.onMenuItemClick}>
            Over
          </p-top-nav-item>
        </p-top-nav>
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
      </div>
    );
  };

  private onMenuItemClick = async ({ target }) => {
    switch (target.id) {
      case "ThemeMenuItem":
        // console.log(await this.themeService.getThemes());
        this.themePopover?.togglePopover();
        break;
      case "AboutMenuItem":
        this.openAboutDialog();
        break;
    }
  };

  private onSelectTheme = async ({ target }) => {
    console.log(target.dataset.name, "!!");
  };

  private openAboutDialog = async () => {
    await customElements.whenDefined("p-dialog");
    const dialogCtor = (await customElements.get(
      "p-dialog"
    )) as typeof PDialogElement;

    await dialogCtor.prompt(
      "Over QR Code generator",
      <div>
        <p>Generate qr code with style.</p>
        <p>
          Copyright {new Date().getFullYear()} P.A. Huisman, alle rechten
          voorbehouden
        </p>
      </div>,
      ["OK"]
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
