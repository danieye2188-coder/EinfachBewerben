import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <div className="container">
          <header className="header">
            <strong>EinfachBewerben</strong>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
