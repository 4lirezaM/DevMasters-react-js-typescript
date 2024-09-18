/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import FormInput from "../../ui/FormInput.tsx";
import { useState } from "react";
import useRedirectBasedOnFlag from "../../Hooks/useRedirectionBasedOnFlag";
import { fetchLogUp } from "../../services/auth/Logup.js";
import Swal from "sweetalert2";
import useAppContext from "../../Hooks/useAppContext.tsx";

function Register() {
  const { userInfo, setUserToken } = useAppContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useRedirectBasedOnFlag(!!userInfo, "/");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !fullName.trim().length ||
      !userName.trim().length ||
      !email.trim().length ||
      !phone.trim().length ||
      !password.trim().length
    ) {
      return;
    }
    const reqObject = {
      name: fullName,
      username: userName,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: password,
    };
    try {
      setIsLoading(true);
      const data = await fetchLogUp(reqObject);
      setUserToken(data.accessToken);
      setFullName("");
      setEmail("");
      setUserName("");
      setPassword("");
      setPhone("");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign up was successful",
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        console.log(err.name);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "please check inputes",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <div className="relative flex min-h-[500px] items-center justify-center py-12 text-slate-800 dark:text-slate-100">
        <div className="w-96 rounded-md bg-white px-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-slate-900">
          <h1 className="py-4 text-center text-xl font-semibold">Logup</h1>
          <p className="mb-4">
            Already have an account?
            <Link
              to="/signin"
              className="pl-1 text-sky-600 underline dark:text-sky-400"
            >
              Sign in here
            </Link>
          </p>
          <form onSubmit={HandleSubmit}>
            <div className="relative flex items-center justify-between">
              <FormInput
                type="text"
                value={fullName}
                onchange={setFullName}
                id="fullname"
                placeholder="Full name"
              />
              <i className="fa-regular fa-address-card absolute right-2 top-3"></i>
            </div>
            <div className="relative flex items-center justify-between">
              <FormInput
                type="text"
                value={userName}
                onchange={setUserName}
                id="username"
                placeholder="Username"
              />
              <i className="fa-regular fa-user absolute right-2 top-3"></i>
            </div>
            <div className="relative flex items-center justify-between">
              <FormInput
                type="email"
                value={email}
                onchange={setEmail}
                id="email"
                placeholder="Email"
              />
              <i className="fa-regular fa-envelope absolute right-2 top-3"></i>
            </div>
            <div className="relative flex items-center justify-between">
              <FormInput
                type="phone"
                value={phone}
                onchange={setPhone}
                id="phone"
                placeholder="Phone Number"
              />
              <i className="fa-solid fa-phone absolute right-2 top-3"></i>
            </div>
            <div className="relative flex items-center justify-between">
              <FormInput
                type="password"
                value={password}
                onchange={setPassword}
                id="password"
                placeholder="Password"
              />
              <i className="fa-solid fa-fingerprint top-3s absolute right-2"></i>
            </div>
            <div className="mb-4 flex items-center justify-start">
              <input
                className="mr-1 h-4 w-4 rounded"
                type="checkbox"
                id="saveInfo"
              />
              <label htmlFor="saveInfo">Keep me signed on this device</label>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-sm bg-sky-600 py-2 text-slate-50 dark:bg-sky-400 dark:text-slate-50"
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-xs h-[16px]"></span>
                ) : (
                  <p className="text-[19px]">Sign Up</p>
                )}
              </button>
            </div>
          </form>
          <div className="mb-4 text-slate-500 dark:text-slate-400">
            <p>Dear User:</p>
            <ul className="list-disc pl-4 text-sm">
              <li>
                Please use reliable and up-to-date browsers such as Google
                Chrome and Firefox.
              </li>
              <li>
                We will never request your confidential information via email.
              </li>
              <li>Please change your password at regular intervals.</li>
            </ul>
          </div>
        </div>
        {/* <div className="absolute right-2 top-6 -z-10 hidden h-60 w-60 rounded-full bg-red-500 opacity-40 blur-[125px] lg:block"></div> */}
      </div>
    </section>
  );
}

export default Register;
