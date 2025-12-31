"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar on new-year page
  if (pathname === "/new-year") {
    return null;
  }
  
  return <Navbar />;
}

