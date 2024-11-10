import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Site para negócios",
  description: "Conectar seu negócio com o mundo",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        { children }
      </body>
    </html>
  );
}
