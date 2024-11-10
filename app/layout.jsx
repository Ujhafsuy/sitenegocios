export const metadata = {
  title: "Site para negócios",
  description: "Conectar seu negócio com o mundo",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        { children }
      </body>
    </html>
  );
}
