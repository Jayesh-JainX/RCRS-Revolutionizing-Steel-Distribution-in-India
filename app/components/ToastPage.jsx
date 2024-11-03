"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export const ToastDemo = () => {
  const { toast } = useToast();
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const registerServiceWorker = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
          setTimeout(() => showInstallToast(), 2000);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  };

  const showInstallToast = () => {
    if (localStorage.getItem("hasShownToast") !== "true" && deferredPrompt) {
      toast({
        title: "Install Our App!",
        description: "To enhance your experience, consider installing our app.",
        status: "info",
        duration: 8000,
        action: (
          <div style={{ display: "flex", gap: "10px" }}>
            <ToastAction altText="Install" onClick={handleInstall}>
              Install
            </ToastAction>
          </div>
        ),
        className: cn(
          "bottom-4 right-2 left-2 flex fixed md:max-w-[420px] md:bottom-4 md:right-4 md:left-auto"
        ),
      });

      localStorage.setItem("hasShownToast", "true");
    }
  };

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA installation");
        } else {
          console.log("User dismissed the PWA installation");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    console.log("beforeinstallprompt event fired");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    registerServiceWorker();
  }

  return () => {
    window.removeEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );
  };
};
