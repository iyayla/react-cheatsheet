function TailWind() {
  return (
    <div className="bg-dark-blue font-arial text-white pb-[50vh]">
      <header className="max-w-5xl mx-auto px-5 py-3">
        <nav>
          <ul className="uppercase tracking-wider flex gap-x-4 gap-y-1 text-sm justify-center sm:justify-between flex-wrap">
            <li className="sm:me-auto">
              <a
                href=""
                className="hover:bg-fuchsia-700 transition-colors p-1 rounded-sm"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-fuchsia-700 transition-colors p-1 rounded-sm"
              >
                Start Here
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-fuchsia-700 transition-colors p-1 rounded-sm"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-fuchsia-700 transition-colors p-1 rounded-sm"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="text-center max-w-3xl lg:max-w-5xl mx-auto px-5 py-12 grid gap-5 lg:grid-cols-2 items-center">
        <img
          src="/licensed-image.jpg"
          alt="Licensed Image"
          width="600"
          height="400"
          className="rounded-xl lg:order-2"
        ></img>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold mb-5">Let's learn TailWind</h1>

          <p className="text-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href=""
            className="inline-block bg-fuchsia-700 py-3 px-7 rounded-full hover:bg-fuchsia-600 transition-colors"
          >
            Click here
          </a>
        </div>
      </section>

      <section className="max-w-3xl lg:max-w-5xl mx-auto px-5 py-12 grid gap-5 grid-cols-[repeat(auto-fit,minmax(13.75rem,1fr))]">
        <h2 className="text-3xl font-bold text-center col-span-full mb-4">Resources</h2>

        <div className="bg-blue-800 bg-linear-to-bl from-purple-800 to-blue-800 space-y-2 p-3 rounded-md">
          <h3 className="text-lg font-bold">What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href=""
            className="font-bold text-fuchsia-300 hover:text-white transition-colors"
          >
            Read more
          </a>
        </div>

        <div className="bg-blue-800 bg-linear-to-bl from-purple-800 to-blue-800 space-y-2 p-3 rounded-md">
          <h3 className="text-lg font-bold">What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href=""
            className="font-bold text-fuchsia-300 hover:text-white transition-colors"
          >
            Read more
          </a>
        </div>

        <div className="bg-blue-800 bg-linear-to-bl from-purple-800 to-blue-800 space-y-2 p-3 rounded-md">
          <h3 className="text-lg font-bold">What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href=""
            className="font-bold text-fuchsia-300 hover:text-white transition-colors"
          >
            Read more
          </a>
        </div>

        <div className="bg-blue-800 bg-linear-to-bl from-purple-800 to-blue-800 space-y-2 p-3 rounded-md">
          <h3 className="text-lg font-bold">What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href=""
            className="font-bold text-fuchsia-300 hover:text-white transition-colors"
          >
            Read more
          </a>
        </div>

        <div className="bg-blue-800 bg-linear-to-bl from-purple-800 to-blue-800 space-y-2 p-3 rounded-md">
          <h3 className="text-lg font-bold">What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href=""
            className="font-bold text-fuchsia-300 hover:text-white transition-colors"
          >
            Read more
          </a>
        </div>
      </section>
    </div>
  );
}

export default TailWind;
