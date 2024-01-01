import { Switch } from "@nextui-org/react";

export default function ProPrices() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Planuri de tarifare flexibile
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Alegeți un plan care se potrivește nevoilor afacerii dumneavoastră.
            Fără taxe ascunse, fără surprize.
          </p>
          <div className="flex items-center">
            <span className="text-base font-medium text-gray-900 dark:text-white">
              Lunar
            </span>

            <div>
              <Switch
                defaultSelected
                color={"success"}
                size="sm"
                className="ml-2 w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-700"
              >
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Anual
                </span>
              </Switch>
            </div>
          </div>
        </div>
        <div className="mb-4 lg:mb-8 space-y-8 lg:grid lg:grid-cols-2 md:gap-12 xl:gap-16 lg:space-y-0">
          {/*Pricing Card */}
          <div className="flex flex-col max-w-lg text-gray-900 dark:text-gray-400">
            <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-400">
              Starter
            </h3>
            <div className="flex items-baseline my-4">
              <span className="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white">
                Gratuit
              </span>
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
              Ideal pentru antrenorii individuali și nutriționiștii care își
              încep prezența online.
            </p>
            {/*List*/}
            <ul role="list" className="my-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Crearea profilului și listarea de bază</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Adăugare informații de contact</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Începeți
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="flex flex-col max-w-lg text-gray-900 dark:text-gray-400">
            <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-400">
              PRO
            </h3>
            <div className="flex items-baseline my-4">
              <span className="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white">
                $29
              </span>
              <span className="text-gray-500 dark:text-gray-400">/lună</span>
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
              Potrivit pentru antrenorii și nutriționiștii consacrați care
              doresc să își extindă baza de clienți și serviciile.
            </p>
            {/*List*/}
            <ul role="list" className="my-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Toate caracteristicile din planul de bază</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Bifă verificare și certificare</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Acces la sistemul de rezervare cu sincronizare calendaristică
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Profil îmbunătățit cu conținut media bogat</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Tablou de bord analitic detaliat</span>
              </li>
              {/*<li className="flex items-center space-x-3">*/}
              {/*  <svg*/}
              {/*    className="flex-shrink-0 w-5 h-5 text-green-500"*/}
              {/*    fill="currentColor"*/}
              {/*    viewBox="0 0 20 20"*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*  >*/}
              {/*    <path*/}
              {/*      fillRule="evenodd"*/}
              {/*      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
              {/*      clipRule="evenodd"*/}
              {/*    ></path>*/}
              {/*  </svg>*/}
              {/*  <span>Integrarea instrumentelor de marketing</span>*/}
              {/*</li>*/}
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Asistență prioritară pentru clienți</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Începeți
            </a>
          </div>
          {/*Pricing Card*/}
          {/*<div className="flex flex-col max-w-lg text-gray-900 dark:text-gray-400">*/}
          {/*  <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-400">*/}
          {/*    Enterprise*/}
          {/*  </h3>*/}
          {/*  <div className="flex items-baseline my-4">*/}
          {/*    <span className="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white">*/}
          {/*      $99*/}
          {/*    </span>*/}
          {/*    <span className="text-gray-500 dark:text-gray-400">/lună</span>*/}
          {/*  </div>*/}
          {/*  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-300">*/}
          {/*    Soluții personalizate pentru săli de sport și unități mari.*/}
          {/*    Conceput pentru săli de sport, centre de fitness și întreprinderi*/}
          {/*    de fitness de mari dimensiuni.*/}
          {/*  </p>*/}
          {/*  /!*List*!/*/}
          {/*  <ul role="list" className="my-8 space-y-4 text-left">*/}
          {/*    <li className="flex items-center space-x-3">*/}
          {/*      <svg*/}
          {/*        className="flex-shrink-0 w-5 h-5 text-green-500"*/}
          {/*        fill="currentColor"*/}
          {/*        viewBox="0 0 20 20"*/}
          {/*        xmlns="http://www.w3.org/2000/svg"*/}
          {/*      >*/}
          {/*        <path*/}
          {/*          fillRule="evenodd"*/}
          {/*          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
          {/*          clipRule="evenodd"*/}
          {/*        ></path>*/}
          {/*      </svg>*/}
          {/*      <span>Toate caracteristicile din planul Pro</span>*/}
          {/*    </li>*/}
          {/*    <li className="flex items-center space-x-3">*/}
          {/*      <svg*/}
          {/*        className="flex-shrink-0 w-5 h-5 text-green-500"*/}
          {/*        fill="currentColor"*/}
          {/*        viewBox="0 0 20 20"*/}
          {/*        xmlns="http://www.w3.org/2000/svg"*/}
          {/*      >*/}
          {/*        <path*/}
          {/*          fillRule="evenodd"*/}
          {/*          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
          {/*          clipRule="evenodd"*/}
          {/*        ></path>*/}
          {/*      </svg>*/}
          {/*      <span>Listare maxim antrenori</span>*/}
          {/*    </li>*/}
          {/*    <li className="flex items-center space-x-3">*/}
          {/*      <svg*/}
          {/*        className="flex-shrink-0 w-5 h-5 text-green-500"*/}
          {/*        fill="currentColor"*/}
          {/*        viewBox="0 0 20 20"*/}
          {/*        xmlns="http://www.w3.org/2000/svg"*/}
          {/*      >*/}
          {/*        <path*/}
          {/*          fillRule="evenodd"*/}
          {/*          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
          {/*          clipRule="evenodd"*/}
          {/*        ></path>*/}
          {/*      </svg>*/}
          {/*      <span>*/}
          {/*        Managementul conturilor cu pentru maximum 5 utilizatori*/}
          {/*      </span>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*  <a*/}
          {/*    href="#"*/}
          {/*    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"*/}
          {/*  >*/}
          {/*    Începeți*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
