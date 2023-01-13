import "../styles/globals.css";

//components
import Header from "../components/Header";
import TrackingComponents from "../components/TrackingComponents";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <TrackingComponents />
        {children}
      </body>
    </html>
  );
}
