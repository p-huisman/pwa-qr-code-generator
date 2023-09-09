export async function waitForElement<T extends Element>(
  selector: string,
  parent?: HTMLElement | ShadowRoot | Document
): Promise<T> {
  if (!parent) {
    parent = document;
  }
  return new Promise<T>((resolve, reject) => {
    const interval = setInterval(() => {
      const element = parent?.querySelector<T>(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element ${selector} not found`));
    }, 10000);
  });
}
