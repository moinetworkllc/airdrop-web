const footer = () => {
  return (
    <section>
      <div>
        <form action="">
          <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
            <div className="md:mb-6 md:ml-auto text-2xl	font-sans">
              <p className="text-3xl font-sans ">
                <strong>Join our newsletter to follow our news</strong>
              </p>
            </div>
            <div className="relative md:mb-6  bg-zinc-300 rounded-xl" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto]	w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <label
                for="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Email
              </label>
            </div>
          </div>
        </form>
      </div>
      <footer className="w-full h-full bg-black pt-40 px-10">
        <div className="max-w-screen-xl p-4 py-4 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <p className="mb-6 text-base font-semibold uppercase text-white">MOI</p>
          </div>
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div className="bg-purple-600 absolute left-0 top-460 w-full h-37">
            <p className="font-light text-center leading-6 sm:leading-9 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
              All copyrights are reserved @moi.technology
            </p>
          </div>
        </footer>
      </footer>
    </section>
  );
};

export default footer;
