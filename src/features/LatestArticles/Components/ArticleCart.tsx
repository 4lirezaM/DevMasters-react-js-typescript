import Button from "../../../ui/Button";

function ArticleCart() {
  return (
    <div className="m-2 min-w-[240px] overflow-hidden rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-slate-900">
      <a href="#">
        <img
          className="w-full"
          src="images/courses/npm-cover.jpg"
          alt="Npm-Cover-Pic"
        />
      </a>
      <div className="p-2 pb-0 pt-4">
        <h2 className="text-2xl font-semibold">
          <a className="hover:text-sky-500 dark:hover:text-sky-600" href="#">
            NPM Tutorial
          </a>
        </h2>
        <p>john deo</p>
        <Button classname="hidden md:flex w-32" type="secondary">
          Sign in/Sign up
        </Button>
      </div>
    </div>
  );
}

export default ArticleCart;
