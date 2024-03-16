import Button from "@/components/Button";
import ThemeChanger from "@/components/ThemeChanger";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="bg-black shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image src="/logo.svg" width={50} height={50} alt="Logo" />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-white transition " href="#">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  

                  <li>
                    <a className="text-white transition " href="#">
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition " href="#">
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition " href="#">
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className=" text-white transition "
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Button rounded={"md"} intent={"primary"} size={"base"}>
                  Login
                </Button>

                <div className=" sm:flex">
                  <Button rounded={"md"} intent={"outline"} size={"base"}>
                    Register
                  </Button>
                </div>
              </div>
              {<ThemeChanger />}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
