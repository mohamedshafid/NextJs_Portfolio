"use client";
import React from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("Service Worker registration in progress");
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="M770Axb4KgEa1ZHGV6ql5UqUE89zqjA8oflrS6ZwXy0"
        />
      </head>

      <body className={`font-mono`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
