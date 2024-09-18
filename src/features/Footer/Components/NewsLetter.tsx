import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { fetchNewLetter } from "../../../services/footer/footerAPI";

function NewsLetter() {
  const [email, setEmail] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await fetchNewLetter(email);
      setEmail("");
      Swal.fire({
        icon: "success",
        title: "Subscription Successful!",
        text: "You’ll now receive the latest updates, news, and exclusive content directly to your inbox. Stay tuned!",
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        icon: "error",
        title: "There is a problem , please try later🙏",
        showConfirmButton: false,
        timer: 3500,
      });
    }
  }
  return (
    <div>
      <h3 className="pb-3 text-2xl uppercase">Join Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="block px-1 py-1 text-black outline-none placeholder:text-sm placeholder:font-normal placeholder:text-slate-800 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:font-thin dark:placeholder:text-slate-50"
          type="email"
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email ..."
          required
        />
        <input
          type="submit"
          className="border-2 border-white px-1 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:text-sky-400 dark:border-slate-800 dark:hover:text-sky-600"
          value="Subscribe"
        />
      </form>
    </div>
  );
}

export default NewsLetter;
