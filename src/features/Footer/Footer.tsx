import FooterLink from "./Components/FooterLink.tsx";
import NewsLetter from "./Components/NewsLetter";

function Footer() {
  return (
    <footer className="relative block bg-sky-100 before:absolute before:left-0 before:right-0 before:top-[-6px] before:z-[-1] before:mx-auto before:h-3 before:w-[90%] before:bg-sky-600 before:content-[''] dark:bg-slate-900 dark:before:bg-sky-400">
      <div className="container mx-auto grid grid-cols-1 place-content-between gap-4 md:grid-cols-2 lg:grid-cols-3">
        <section className="p-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="pb-3 text-2xl uppercase">About Us</h2>
          <p className="text-justify text-lg leading-5 -tracking-wide">
            Welcome to DevMasters! 🌟 We are your ultimate destination for
            mastering the art of programming and staying ahead in the
            ever-evolving world of technology. 💻 At DevMasters, we offer a
            diverse range of high-quality programming courses designed to cater
            to both beginners and seasoned developers. 📚 Our mission is to
            empower individuals with the skills and knowledge they need to excel
            in their careers. 🚀 Join our community of passionate learners and
            developers, and let DevMasters be your guide to achieving excellence
            in the tech industry. 🌐
          </p>
        </section>
        <section className="p-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className="pb-3 text-2xl uppercase">Latest Articles</h2>
          <ul className="transition-all delay-300 duration-500 ease-in-out">
            <li>
              <FooterLink href="#">
                📦 How to install the library in Python|Python library
                installation tutorial
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                🔄 How to Update Python: A Comprehensive Tutorial
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                💻 Complete Python Installation Guide for Mac, Windows, and
                Linux
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                🌐 The best front-end frameworks 16 Front-end frameworks review
                the pros and cons
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                🚀 Discover the Ultimate JavaScript Training Site:
                Experience-Oriented & Free!
              </FooterLink>
            </li>
          </ul>
        </section>
        <section className="flex flex-col justify-between p-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div>
            <h3 className="pb-3 text-2xl uppercase">Fast Links </h3>
            <ul className="grid grid-cols-2">
              <li>
                <FooterLink href="#">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Frontend</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Backend</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Python</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Improving skills</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Freelance tutorial</FooterLink>
              </li>
            </ul>
          </div>
          <NewsLetter />
        </section>
      </div>
      <div className="bg-sky-300 p-4 text-center text-xl text-black dark:bg-slate-950 dark:text-white">
        <span className="text-2xl">©</span> Made By{" "}
        <a
          target="_blank"
          className="hover:text-blue-700 dark:hover:text-sky-500"
          href="https://github.com/4lirezaM"
        >
          4lirezaM <i className="fa-brands fa-xl fa-square-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
