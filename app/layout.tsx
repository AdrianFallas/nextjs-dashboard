import '@/app/ui/global.css';
// importamos los fonts que creamos en fonts.ts
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* usamos los fonts que creamos en fonts.ts
       antialiased lo que hace es Utilities for controlling the font smoothing of an element
        no es necesario usarlo pero se quizo usar */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
