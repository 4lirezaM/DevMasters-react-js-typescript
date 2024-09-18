import { ReactNode } from "react";

function FooterLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className={
        "block pb-2 text-lg leading-5 transition-transform duration-300 ease-in-out hover:scale-102 hover:text-sky-600 dark:hover:text-sky-400"
      }
    >
      {children}
    </a>
  );
}

export default FooterLink;
