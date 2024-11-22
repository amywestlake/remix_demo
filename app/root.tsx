import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import H3 from "./components/Headings/H3";
import H4 from "./components/Headings/H4";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
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
        <nav className="mb-8">
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
              <li className="pl-0 m-0 pr-4 border-r">
                <a href="/strands" className="text-white hover:text-gray-300">
                  <H4 text="Strands"></H4>
                </a>
              </li>
              <li className="pl-4 m-0 ">
                <a href="/shows" className="text-white hover:text-gray-300">
                  <H4 text="Shows"></H4>
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
