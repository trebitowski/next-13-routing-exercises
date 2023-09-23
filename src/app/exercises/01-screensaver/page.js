import React from "react";

import Link from "next/link";

const FAVORITE_COLORS = [
  "hotpink",
  "dodgerblue",
  "coral",
  "papayawhip",
  "orchid",
  "peru",
];
function ScreenSaverList() {
  return (
    <>
      <p>Here's a list of the best screensaver colors</p>
      <ol>
        {FAVORITE_COLORS.map((color) => (
          <li>
            <Link
              href={`/exercises/01-screensaver/${color}`}
              style={{ color, textTransform: "capitalize" }}
            >
              {color}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ScreenSaverList;
