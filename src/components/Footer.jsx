import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return <div className="text-center py-4 bg-primary text-white">© {year}</div>;
}

export default Footer;
