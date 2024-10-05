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

        <script
          id="otpless-sdk"
          type="text/javascript"
          src="https://otpless.com/v3/auth.js"
          data-appid="7PVETU14QR6DD3DK20ZZ"
        ></script>

      </body>
    </html>
  );
}
