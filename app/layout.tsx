import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Feedback Fusion - Public Roadmap ",
  description: "a Platform for user to suggest and Up vote on feature    ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter} min-h-screen flex flex-col`}>
          {/* Navbar  */}
          <Navbar />

          {/* Main Section */}
          <main className="flex-1 container mx-auto px-4 py-8"> {children}</main>

          {/* Footer  */}
          <Footer />
          <Toaster />

        </body>
      </html>
    </ClerkProvider>
  );
}
