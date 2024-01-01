import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import { PagesLinks } from "@/constants/links";

export default function HomeHero() {
  return (
    <section className="bg-gray-50 dark:bg-background">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto mb-10 lg:col-span-7 xl:col-span-8 xl:mb-0">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Întăriți călătoria dvs. de fitness
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Înscrieți-vă în FitSync pentru a descoperi antrenori, nutriționiști
            și săli de sport adaptate la obiectivele dvs. de fitness.
          </p>
          <Button
            color="primary"
            className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary dark:hover:bg-primary-600 dark:focus:ring-primary-700"
          >
            Aflați mai multe
          </Button>
          <ul className="hidden justify-between pt-12 mx-auto mt-14 border-t border-gray-300 xl:flex dark:border-gray-700 dark:text-white">
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">423</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Antrenori</div>
                <div>Personali</div>
              </div>
            </li>
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">333</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Nutriționiști</div>
                <div>Acreditați</div>
              </div>
            </li>
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">560</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Săli de</div>
                <div>antrenament</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="justify-center p-4 max-w-screen-sm bg-white rounded-lg border border-gray-200 shadow lg:mt-0 lg:col-span-5 xl:col-span-4 sm:p-6 lg:p-8 dark:bg-background dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              Alăturați-vă celor peste 3.000 de utilizatori
            </h2>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-full text-white bg-[#4284F4] hover:bg-[#3372df] dark:focus:ring-[#0f53c9] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Google
              </a>
              <a
                href="#"
                className="w-full text-black bg-white hover:bg-zinc-100 dark:focus:ring-zinc-800 focus:ring-4 focus:outline-none focus:zinc-800 border-1 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Apple
              </a>
            </div>
            <div className="flex items-center">
              <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                sau
              </div>
              <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <Link
              href={PagesLinks.login.link}
              className="w-full flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
            >
              Folosiți adresa de email
            </Link>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Nu sunteți înregistrat?{" "}
              <Link
                href={PagesLinks.signUp.link}
                className="text-primary-700 hover:underline dark:text-primary-500"
              >
                Creați un cont
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
