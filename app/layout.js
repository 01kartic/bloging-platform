import "./globals.css";

export const metadata = {
  title: "Bloger",
  description: "Bloging Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
