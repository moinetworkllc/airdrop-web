import link from 'next/link';
import Image from 'next/image';
import twitterlogo from '../../public/images/twitter-logo.svg';
import LinkedInlogo from '../../public/images/LinkedInlogo.svg';
import InstagramIcon from '../../public/images/instagramIcon.svg';
import facebookIcon from '../../public/images/logo-facebook.svg';
// import ButtonComponent from './ButtonComponent';
const footer = () => {
  return (
    <section>
      <div>
        <form action="">
          <div className="  grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3 ">
            <div className="md:mb-6 md:ml-auto text-2xl	font-sans leading-10 ">
              <p className="">
                <p2 className="style_content">Join our newsletter to follow our news</p2>
              </p>
            </div>

            <div className="relative md:mb-6 email_position style4 b bg-zinc-300 rounded-xl" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto]	w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <label
                for="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-black"
              >
                Email
              </label>
            </div>

            <div className="mb-13 md:mr-auto text-white  ">
              <button type="submit" className="text-white footer_button">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="mb-20 Footer_selector Footer_style_font">
        <h5 class="mb-2.5 font-bold uppercase">Our Company</h5>

        <ul class="mb-0  list-none">
          <li>
            <a href="#!" className="text-white ">
              Home
            </a>
          </li>
          <li>
            <a href="#!" class="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#!" class="text-white">
              Whitepaper
            </a>
          </li>
          <li>
            <a href="#!" class="text-white">
              Airdrop
            </a>
          </li>
        </ul>
      </div>
      <footer className="w-full h-full bg-black pt-40 px-10">
        <div className="max-w-screen-xl p-4 py-4 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <p className="footer_typo text-white">
              MOI is a transformational p2p protocol and an open network that empowers its users to dynamically control
              their identity, storage and digital assets based on their unique needs.
            </p>
          </div>
          <div>
            <ul className="flex justify-items-start mt-10 md:mt-3">
              <li className="mr-4 md:mr-6 ">
                <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                  <Image src={twitterlogo} alt="Twitter" />
                </a>
              </li>
              <li className="mr-4 md:mr-6 ms-0.5 linkedIn_pos">
                <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                  <Image src={LinkedInlogo} alt="LinkedIn" />
                </a>
              </li>
              <li className="mr-4 md:mr-6">
                <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                  <Image src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li className="mr-10 md:mr-10">
                <a href="#" className="text-white hover:text-primary transition-colors  duration-200">
                  <Image src={InstagramIcon} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div class="grid md:grid-cols-2 lg:grid-cols-4"> */}

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
