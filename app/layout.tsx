import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog AI Writer — AI-generated changelogs from git commits",
  description: "Analyzes git commits and generates user-friendly changelogs with proper categorization and impact assessment. For open source maintainers and product teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="987852a9-7924-4329-9f47-a688b745d53a"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
