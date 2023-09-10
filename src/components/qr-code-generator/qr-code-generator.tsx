import "p-elements-core";

import QRCodeStyling, { Options } from "qr-code-styling";
import css from "./qr-code-generator.css?inline";

import { ThemeService } from "../../services/theme-service";
import { PDialogElement } from "../dialog/dialog";

@CustomElementConfig({
  tagName: "p-qr-code-generator",
})
export class PQrCodeGeneratorElement extends CustomElement {
  constructor(private qrCode?: QRCodeStyling) {
    super();
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

  private defaultStyling: Options = {
    width: 1200,
    height: 1200,
    data: "about:blank",
    qrOptions: {
      mode: "Byte",
      errorCorrectionLevel: "H",
    },
  };

  @RenderOnSet
  private themes: any[] = [];

  private async initThemes() {
    this.themes = await this.themeService.getThemes();
  }

  private themeService: ThemeService = new ThemeService();

  private url: string = "about:blank";

  private get themePopover(): any {
    return this.shadowRoot
      ? this.shadowRoot?.querySelector<HTMLElement>("#ThemePopover")
      : null;
  }

  private set theme(value: string) {
    if (!this.themes.find(t => t.name === value)) {
      return;
    }
    const theme = this.themes.find(t => t.name === value);
    this.url = theme.url;
    if (this.qrCode) {
      this.qrCode.update(theme.options);
      this.qrCode.update({ data: this.url });
    }
  }

  private render = () => {
    return (
      <div>
        <p-top-nav>
          <p-top-nav-item id="ThemeMenuItem" onclick={this.onMenuItemClick}>
            Stijl
            <div id="ThemePopover" popover="auto">
              {this.themes.map(t => (
                <button
                  part="button"
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
            part="text-input"
            id="UrlInput"
            type="url"
            value={this.url}
            oninput={this.onDataChange}
          />
          <div id="QRContainer" afterCreate={this.onCreateQRElement}></div>
          <button
            part="button primary-button"
            onclick={this.onDownloadButtonClick}
          >
            Download QR code
          </button>
        </div>
      </div>
    );
  };

  private onMenuItemClick = async ({ target }) => {
    switch (target.id) {
      case "ThemeMenuItem":
        this.themePopover?.togglePopover();
        break;
      case "AboutMenuItem":
        this.openAboutDialog();
        break;
    }
  };

  private onSelectTheme = async ({ target }) => {
    this.theme = target.dataset.name;
    this.themePopover?.togglePopover();
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
    let defaultPath = this.url;
    if (this.url.indexOf("//") > 0) {
      defaultPath = this.url.split("//")[1];
    }
    defaultPath = this.url
      .replaceAll(":", "-")
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
      if (!(window as any).showSaveFilePicker) {
        const blob = new Blob([f], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = defaultPath;
        a.click();
        return;
      }
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
