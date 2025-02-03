import "./globals.css";
import { ToastContainer} from "react-toastify";

export const metadata = {
  title: "Mohamed Hafid | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
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
