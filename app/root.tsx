import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html>
      <head>
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
        <nav className="pb-4 border-b-2 border-white mb-8">
          <ul className="flex space-x-4">
            <li>
              <a href="/strands" className="text-white hover:text-gray-300">
                Strands
              </a>
            </li>
            <li>
              <a href="/shows" className="text-white hover:text-gray-300">
                Shows
              </a>
            </li>
          </ul>
        </nav>
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
