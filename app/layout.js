import Link from "next/link";
import "./globals.css"
// static meta data
export const metadata = {
  title: "Routing",
  description: "Create by Motivatino2Code collaborative team",
};
// shared layout for all pages and posts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*  semantic html tags structure*/}
        <header className="space-x-4 text-center bg-gray-400 py-2">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </header>
        <main className="w-[80%] mx-auto my-10">
          {children}
        </main>
        <footer className="py-2 text-center bg-gray-300">
          &copy; {`${new Date().getFullYear()}`}
        </footer>
      </body>
    </html>
  );
}
