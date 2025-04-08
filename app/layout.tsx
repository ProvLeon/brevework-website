import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ... (existing metadata)
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: "light dark", // Indicate supported color schemes
};

// Refined inline script logic
const themeInitializerScript = `
(function() {
  const storageKey = 'brevework-theme';
  let theme = 'system'; // Default preference
  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      theme = storedTheme;
    }
  } catch (e) {
    console.error('Error accessing localStorage for theme', e);
  }

  let GITHUB_THEME_DOM_CLASS = theme === 'dark' ? 'dark' : theme === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light';

  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(GITHUB_THEME_DOM_CLASS);
  document.documentElement.style.setProperty('color-scheme', GITHUB_THEME_DOM_CLASS); // Set color-scheme CSS property

  })()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Add the script inside <head> for earliest possible execution */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      </head>
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <a
            href="#main-content"
            className="absolute left-0 top-0 block -translate-x-full transform p-4 text-background bg-primary transition-transform focus:translate-x-0 sr-only focus:not-sr-only focus:z-[9999]"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
