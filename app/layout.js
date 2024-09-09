import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export const metadata = {
  title: "Leilão Online",
  description: "Leilão Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
