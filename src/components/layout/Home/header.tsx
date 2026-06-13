import React from "react";
import { Button } from "@/components/ui/button";
export default function HomeHeader() {
  const navItems = [
    { pointer: "how", value: "How It Works" },
    { pointer: "features", value: "Features" },
    { pointer: "templates", value: "Templates" },
    { pointer: "pricing", value: "Pricing" },
  ];
  return (
    <nav>
      {/* Inner Div*/}
      <div>
        <a href="#">
          <div>
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </div>
        </a>
        <ul>
          {navItems.map((c, i) => (
            <li key={i}>
              <Button variant={"link"}>
                <a href={`#${c.pointer}`}>{c.value}</a>
              </Button>
            </li>
          ))}
        </ul>
        <div>
          <Button variant={"ghost"}> Sign in</Button>
          <Button variant={"default"}>
            {" "}
            <a href="#">
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Get started free
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
