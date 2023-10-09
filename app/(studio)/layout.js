import "../globals.css";

export const metadata = {
  title: "Mark Slorach | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
