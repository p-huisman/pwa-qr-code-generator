// https://raw.githubusercontent.com/p-huisman/pwa-qr-code-generator/master/README.md

// https://api.github.com/repos/p-huisman/pwa-qr-code-generator/contents?ref=gh-pages

interface Theme {
  name: string;
  description: string;
  image: string;
}

export class ThemeService {
  async getThemes(): Promise<Theme[]> {
    const data = await (
      await fetch(
        "https://api.github.com/repos/p-huisman/pwa-qr-code-generator/contents?ref=gh-pages"
      )
    )
      .json()
      .catch(e => e);
    console.log(data);
    return [];
  }
}
