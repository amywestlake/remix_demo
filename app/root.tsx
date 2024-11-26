import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import H3 from "./components/Headings/H3";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  const location = useLocation();

  // Helper function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <html>
      <head>
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#2F2F2F]">
        <div className="container mx-auto p-8">
        <nav className="mb-16">
          <ul className="flex items-center list-none p-0 m-0">
            {/* Left Section: Logo and H3 */}
            <li className="flex items-center space-x-2">
              <a href="/" className="text-white hover:text-gray-300 flex items-center">
                <img
                  src="https://www.bfi.org.uk/dist/client/0207614d447715c2d2b9.svg"
                  alt="BFI"
                  width="55"
                />
              </a>
              <div className="pl-2 mt-2">
                <H3 text="Cinemas"></H3>
              </div>
            </li>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Middle Section: Links */}
            <div className="flex">
              <li className="pl-0 m-0 pr-4 border-r flex items-center" style={{ height: 'fit-content' }}>
                <a href="/strands/anrea-luka-zimmerman" className={`text-white hover:text-gray-300 ${isActive("/strands/anrea-luka-zimmerman") ? "border-b-4 border-[#08EFE1]" : ""}`}>
                  <p className="text-lg">Strands</p>
                </a>
              </li>
              <li className="pl-4 m-0 flex items-center" style={{ height: 'fit-content' }}>
                <a href="/shows" className={`text-white hover:text-gray-300 ${isActive("/shows") ? "border-b-4 border-[#08EFE1]" : ""}`}>
                  <p className="text-lg">Shows</p>
                </a>
              </li>
            </div>
            {/* Spacer */}
            <div className="flex-1"></div>
          </ul>
        </nav>
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
