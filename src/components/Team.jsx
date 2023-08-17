import React from "react";
import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Isotope from "isotope-layout";
import Modal from "./Modal";
import logo from "../assets/logo.png";
import about from "../assets/about.png";
import courses from "../assets/courses.png";
import dashboard from "../assets/dashboard.png";
import guides from "../assets/guides.png";
import mentoring from "../assets/mentoring.png";
import resources from "../assets/resources.png";
import logout from "../assets/logout.png";
import footericon from "../assets/footericon.png";
import newsletter from "../assets/newsletter.png";
import aliabrar from "../assets/people/aliabrar.png";
import taabishahmed from "../assets/people/taabishahmed.png";
import hamzabinmajid from "../assets/people/hamzabinmajid.png";
import anant from "../assets/people/anant.png";
import hafsah from "../assets/people/hafsah.png";
import aman from "../assets/people/aman.png";
import hussnain from "../assets/people/hussnain.png";
import burak from "../assets/people/burak.png";
import peopleicon from "../assets/peopleicon.png";
import expand from "../assets/expand.png";

const navigation = [
  //Add links
  { name: "Home", href: "#" },
  { name: "Our Team", href: "/team" },
  { name: "Mentoring", href: "/mentoring" },
  { name: "Resources", href: "/resources" },
  { name: "Guides", href: "/guides" },
];

const people = [
  {
    id: 0,
    name: "Hussnain Khan",
    education: "University of Liverpool",
    imageUrl: hussnain,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 1,
    name: "Hafsah Qamar",
    education: "Academy Teacher",
    imageUrl: hafsah,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Aman Sabih",
    education: "DFT Year",
    imageUrl: aman,
    subject: "chemistry",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Ali Abrar",
    education: "University of Oxford",
    imageUrl: aliabrar,
    subject: "physics",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Burak Ayan",
    education: "Academy Teacher",
    imageUrl: burak,
    subject: "maths",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Tabish Ahmed",
    education: "DFT Year",
    imageUrl: taabishahmed,
    subject: "maths",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    name: "Hamza Bin-Majid",
    education: "University of Manchester",
    imageUrl: hamzabinmajid,
    subject: "physics",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    name: "Anand Dandotiya",
    education: "University of Liverpool",
    imageUrl: anant,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // More people...
];

const navfooter = {
  //add links
  menu: [
    { name: "About", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Mentoring", href: "/mentoring" },
    { name: "Resources", href: "/resources" },
    { name: "Guides", href: "/guides" },
  ],
  information: [
    { name: "Privacy Policy", href: "#" },
    { name: "Safeguarding Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Contact", href: "#" },
  ],
  //addlinks
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

const Team = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [peopleIndex, setPeopleIndex] = useState(0);
  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <div
        //on lg screen
        className="bg-black -mb-32"
      >
        <header className="bg-black absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">the medology academy</span>
                <img className="ml-2 lg:ml-14 h-12 w-48" src={logo} alt="" />
              </a>
            </div>

            <div
              //nav sidebar
              className="flex lg:hidden"
            >
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-12 w-12 mr-2 lg:mr-6"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              //navlinks
              className="hidden lg:flex lg:gap-x-12"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="text-white color-primary h-10 w-32 rounded-full mr-10 text-sm font-medium">
                Dashboard
              </button>
            </div>
          </nav>
          <Dialog
            //on small screen
            as="div"
            className="lg:hidden "
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-[999]" />
            <Dialog.Panel className="fixed left-40 inset-y-0 right-0 z-[999] lg:w-full overflow-y-auto bg-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white font-semibold absolute right-8"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="mt-24 flow-root ml-4">
                <div className="-my-6 divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="flex">
                      <img src={about} alt="" className="w-6 h-6" />
                      <a
                        //add link
                        href="/"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        About
                      </a>
                    </div>
                    <div className="flex">
                      <img src={courses} alt="" className="w-6 h-6" />
                      <a
                        href="/courses"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Courses
                      </a>
                    </div>
                    <div className="flex">
                      <img src={mentoring} alt="" className="w-6 h-6" />
                      <a
                        href="/mentoring"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Mentoring
                      </a>
                    </div>
                    <div className="flex">
                      <img src={resources} alt="" className="w-6 h-6" />
                      <a
                        //add link
                        href="/resources"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Resources
                      </a>
                    </div>
                    <div className="flex">
                      <img src={guides} alt="" className="w-6 h-6" />
                      <a
                        href="guides"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Guides
                      </a>
                    </div>
                    <div className="flex">
                      <img src={dashboard} alt="" className="w-6 h-6" />
                      <a
                        //add link
                        href="#"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Dashboard
                      </a>
                    </div>
                  </div>
                  <div className="pt-64 flex">
                    <img src={logout} alt="" className="w-6 h-6" />
                    <a
                      href="#"
                      className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative bg-black isolate px-6 pt-14 mb-32 lg:mb-20 lg:px-8 lg:h-[80rem] sm:h-[122rem] ">
          <div className="mx-auto max-w-2xl py-28 sm:py-32 lg:py-36">
            <div className="text-center">
              <h1 className="text-4xl -mt-16 font-bold tracking-tight text-white sm:text-6xl">
                Our
                <span className="text-color-primary"> Team</span>
              </h1>
              <p className="mt-4 text-lg font-semibold leading-8 text-white">
                Supporting you across your educational journey and pushing you
                to new limits.
              </p>
              <p className="mt-2 text-sm leading-8 tracking-wide text-slate-200">
                These are the best mentors on the planet.
              </p>
              <span className="isolate inline-flex rounded-full shadow-sm mt-10 h-14 bg-black border-2 border-secondary ">
                <button
                  type="button"
                  onClick={handleFilterKeyChange("biology")}
                  className="relative inline-flex items-center rounded-l-full px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:border-2 hover:border-l-0 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Biology
                </button>
                <button
                  type="button"
                  onClick={handleFilterKeyChange("chemistry")}
                  className="relative -ml-px inline-flex items-center px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:rounded-l-full hover:border-2 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Chemistry
                </button>
                <button
                  type="button"
                  onClick={handleFilterKeyChange("physics")}
                  className="relative -ml-px inline-flex items-center px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:rounded-l-full hover:border-2 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Physics
                </button>
                <button
                  type="button"
                  onClick={handleFilterKeyChange("maths")}
                  className="relative inline-flex items-center rounded-l-full px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:border-2 hover:border-l-0 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Maths
                </button>
              </span>
            </div>
          </div>
          <div //team grid
            className="-mt-[6rem]"
          >
            <div className="lg:mx-6 max-w-7xl px-6 lg:px-8">
              <ul
                role="list"
                className="filter-container grid max-w-2xl grid-cols-1 gap-y-10 gap-x-4 lg:gap-x-1 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
              >
                {people.map((person) => (
                  <div
                    key={person.id}
                    className={`lg:w-[16rem] sm:w-[20rem] h-full rounded-xl bg-color-box px-2 pt-2 filter-item ${person.subject}`}
                  >
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setPeopleIndex(person.id);
                      }}
                    >
                      <img
                        src={expand}
                        alt=""
                        className="relative z-50 -mb-10 left-48 -mt-2"
                      />
                    </button>
                    <img
                      className="h-[16rem] w-64 rounded-xl md:h-[14rem] md:w-[18rem] sm:h-[14rem] sm:w-72 -mt-6"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="flex justify-between">
                      <h3 className="mt-2 text-lg font-semibold leading-7 tracking-tight mb-2 text-white">
                        {person.name}
                      </h3>
                    </div>
                    <p className="flex justify-start text-sm mb-4 font-semibold leading-6 text-color-primary">
                      {person.education}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          {openModal && (
            <Modal closeModal={setOpenModal} people={people[peopleIndex]} />
          )}
          <div className="lg:mt-[20rem] flex items-center justify-center gap-x-6 sm:mt-4 mt-2">
            <a
              href="#"
              className="rounded-full w-28 bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      <div //service section
        className="relative color"
      >
        <div className="lg:ml-20 lg:mr-20 relative mx-auto lg:flex lg:justify-between">
          <div className="px-6 py-16 lg:col-span-2 lg:px-8 lg:py-20 xl:pr-12">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-7xl">
                <p className="lg:text-5xl font-bold tracking-tight text-gray-900 text-4xl">
                  <span className="text-color-primary">Need help</span> with one
                  or more of your subjects?
                </p>
                <p className="mt-6 text-sm text-gray-600 mb-6">
                  Arrange 1-1 sessions with a member of our team and watch your
                  grades rocket!
                </p>
                <a
                  href="#"
                  className="-ml-2 rounded-full w-28 bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 sm:py-4 lg:col-span-3 lg:px-16 lg:py-24 lg:-mr-10 sm:mx-[10rem]">
            <img src={peopleicon} alt="" />
          </div>
        </div>
      </div>

      <div //Newsletter section
        className="color py-12 sm:py-16"
      >
        <div className="mx-4 lg:mx-[10rem] max-w-7xl sm:px-2 lg:px-8 sm:mx-[2rem]">
          <div className="relative overflow-hidden newsletter px-6 py-16 sm:rounded-3xl sm:px-6">
            <img src={newsletter} alt="" className="mx-auto mb-4" />
            <h2 className="mx-auto max-w-2xl text-center lg:text-5xl font-bold tracking-tight text-black text-4xl">
              Never miss a thing.
            </h2>
            <p className="mx-auto max-w-xl text-center text-sm text-gray-600 leading-5 my-6">
              There’s a lot going on every month in the Medology Empire and if
              you want to stay at the bleeding edge, make sure you’ve subscribed
              to our newsletter!
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-lg form-color newsletter px-4 py-3 placeholder-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-teal-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="color my-4">
        <footer //footer
          className="bg-black rounded-xl mx-4"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-10 pb-6 pt-6 sm:pt-8 lg:px-4 lg:pt-12">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <img
                className="h-28 lg:ml-24 mx-auto sm:mb-4"
                src={footericon}
                alt="Company name"
              />
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:col-span-2 xl:mt-0 ml-[20rem] block">
                <div className="md:grid md:grid-cols-2 md:gap-8 flex justify-between lg:ml-16 -ml-[20rem] sm:-ml-[16rem]">
                  <div className="lg:-mt-10 ">
                    <h3 className="text-lg text-color-primary font-semibold leading-6 mt-10">
                      Menu
                    </h3>
                    <ul role="list" className="mt-4 space-y-3">
                      {navfooter.menu.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base leading-6 text-gray-400 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0 mb-4 lg:ml-24 w-full lg:-mr-[20rem] ml-[10rem] sm:ml-[14rem]">
                    <h3 className="text-lg text-color-primary font-semibold leading-6">
                      Information
                    </h3>
                    <ul role="list" className="mt-4 space-y-3">
                      {navfooter.information.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base leading-6 text-gray-400 hover:text-white "
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex lg:mt-64 lg:right-32 -mb-4 space-x-6 sm:right-20 sm:-mt-4 absolute right-10 ">
                  {navfooter.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-color-primary hover:text-gray-400"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:mx-[6rem] mt-14 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between sm:text-center">
              <p className="mt-8 font-semibold text-base leading-5 text-gray-400 md:order-1 md:mt-0">
                &copy; 2023, Medology Ltd | All rights reserved | Powered by
                <span className="text-color-primary"> Quirky Agency</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Team;
