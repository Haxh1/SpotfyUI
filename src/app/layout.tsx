import "./globals.css";

export const metadata: Metadata = {
  title: "Spotfy",
  description: "Listen To Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
