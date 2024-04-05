"use client";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex flex-col size-full gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={200}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          {/**Sidebar only shows when user logs-in */}
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group  ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
