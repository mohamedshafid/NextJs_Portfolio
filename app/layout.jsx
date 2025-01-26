import "./globals.css";
import { ToastContainer} from "react-toastify";

export const metadata = {
  title: "Mohamed Hafid | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-mono`}>
       
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
