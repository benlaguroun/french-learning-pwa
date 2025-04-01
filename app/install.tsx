"use client"

import { useEffect } from "react"

export function InstallPrompt() {
  useEffect(() => {
    let deferredPrompt: any

    const installBanner = document.getElementById("install-banner")
    const installButton = document.getElementById("install-button")

    // Hide the banner initially
    if (installBanner) {
      installBanner.style.display = "none"
    }

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()

      // Stash the event so it can be triggered later
      deferredPrompt = e

      // Show the install banner
      if (installBanner) {
        installBanner.style.display = "block"
      }
    })

    // Add click handler for the install button
    if (installButton) {
      installButton.addEventListener("click", () => {
        // Hide the banner
        if (installBanner) {
          installBanner.style.display = "none"
        }

        // Show the install prompt
        if (deferredPrompt) {
          deferredPrompt.prompt()

          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the install prompt")
            } else {
              console.log("User dismissed the install prompt")
            }

            // Clear the saved prompt
            deferredPrompt = null
          })
        }
      })
    }

    // Listen for the appinstalled event
    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed")

      // Hide the banner
      if (installBanner) {
        installBanner.style.display = "none"
      }
    })

    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("App is already installed")

      // Hide the banner
      if (installBanner) {
        installBanner.style.display = "none"
      }
    }
  }, [])

  return null
}

