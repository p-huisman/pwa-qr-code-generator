interface GithubContentsItem {
  name: string;
}
interface Theme {
  name: string;
  description: string;
  image: string;
}

export class ThemeService {
  async getThemes(): Promise<Theme[]> {
    const data = await (
      await fetch(
        "https://api.github.com/repos/p-huisman/pwa-qr-code-generator/contents?ref=themes"
      )
    )
      .json()
      .catch(e => e);
    const themes = data
      .map((d: GithubContentsItem) => d.name)
      .filter((name: string) => !name.startsWith("."));

    const promises = themes.map(theme =>
      fetch(
        `https://raw.githubusercontent.com/p-huisman/pwa-qr-code-generator/themes/${theme}/theme.json`
      )
    );
    const themeData = (await Promise.all(promises)).map(p =>
      p.json().catch(e => e)
    );
    return await Promise.all(themeData).catch(e => e);
  }
}
