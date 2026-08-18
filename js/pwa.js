// PWA registration + install prompt
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swPath = location.pathname.includes("/shops/")
      ? "../service-worker.js"
      : "./service-worker.js";

    navigator.serviceWorker.register(swPath).catch(err => {
      console.warn("Service worker registration failed:", err);
    });
  });
}

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.querySelectorAll("[data-install-pwa]").forEach(btn => {
    btn.hidden = false;
  });
});

document.addEventListener("click", async event => {
  const button = event.target.closest("[data-install-pwa]");
  if (!button || !deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  button.hidden = true;
});

window.addEventListener("appinstalled", () => {
  document.querySelectorAll("[data-install-pwa]").forEach(btn => btn.hidden = true);
});
