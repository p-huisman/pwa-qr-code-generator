import "./style.css";
import "./qr-code-generator";
import "./dialog";

import { PDialogElement } from "./dialog";

let deferredPrompt;
window.addEventListener("beforeinstallprompt", e => {
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later.
  deferredPrompt = e;
  // Show your customized install prompt for your PWA
  // Your own UI doesn't have to be a single element, you
  // can have buttons in different locations, or wait to prompt
  // as part of a critical journey.
  showInAppInstallPromotion();
});

async function showInAppInstallPromotion() {
  await customElements.whenDefined("p-dialog");
  const dialogCtor = (await customElements.get(
    "p-dialog"
  )) as typeof PDialogElement;

  const promptResult = await dialogCtor.prompt(
    "Installeren?",
    <p>QR Code generator installeren?</p>,
    ["Ja", "Nee, nu niet"]
  );
  if (promptResult === "Ja") {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
  }
}
