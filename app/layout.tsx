import Link from "next/link"
import Image from "next/image";
import "./globals.css"; // If using global styles
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#B1DABB] antialiased">
      <Navbar/>
      <header className="bg-[#1E4026] flex justify-center pt-20">
          <div className="flex items-center gap-x-10">
            <Image
              src="/Layout/ufsm-brasao.png"
              alt="UFSM Brasão"
              width={300}
              height={300}
              className="w-50 md:w-80 h-auto"
              priority
            />

            <div className="absolute right-4 md:right-8">
            <Image
              src="/Layout/Jerivaldo.png"
              alt="Jerivaldo"
              width={90}
              height={90}
              className="w-24 md:w-28 h-auto"
              priority
            />
            </div>
          </div>
        </header>
        
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
