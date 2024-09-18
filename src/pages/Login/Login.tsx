import { Link } from "react-router-dom";
import FormInput from "../../ui/FormInput.tsx";
import { useState } from "react";
import { fetchLogIn } from "../../services/auth/Login.js";
import Swal from "sweetalert2";
import useRedirectBasedOnFlag from "../../Hooks/useRedirectionBasedOnFlag";
import useAppContext from "../../Hooks/useAppContext.tsx";

function Login() {
  const { setUserToken, userInfo } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // redirection for users who already loged in
  useRedirectBasedOnFlag(!!userInfo, "/");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userName.length || !password.length) return;
    try {
      setIsLoading(true);
      const data = await fetchLogIn(userName, password);
      setUserToken(data.accessToken);
      setPassword("");
      setUserName("");
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error status code:", err.name);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Username or password is incorrect. Please try again.",
          showConfirmButton: true,
          timer: 4000,
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
          <h1 className="py-4 text-center text-xl font-semibold">Login</h1>
          <p className="mb-4">
            New to DevMasters?{" "}
            <Link
              to="/signup"
              className="text-sky-600 underline dark:text-sky-400"
            >
              Create an Account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative flex items-center justify-between">
              <FormInput
                value={userName}
                onchange={setUserName}
                type="text"
                id="username"
                placeholder="Username"
              />

              <i className="fa-regular fa-user absolute right-2 top-3"></i>
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
                  <p className="text-[19px]">Log in</p>
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

export default Login;
