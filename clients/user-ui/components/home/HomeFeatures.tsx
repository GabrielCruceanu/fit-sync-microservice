import Image from "next/image";
import TrainerDesktop from "@/public/images/client/trainer-desktop.jpg";
import TrainerMobile from "@/public/images/client/trainer-mobile.jpg";
import NutritionistDesktop from "@/public/images/client/nutritionist-desktop.jpg";
import NutritionistMobile from "@/public/images/client/nutritionist-mobile.jpg";
import GymDesktop from "@/public/images/client/gym-desktop.jpg";
import GymMobile from "@/public/images/client/gym-mobile.jpg";

export default function HomeFeatures() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <Image
              className=" mb-4 w-full lg:mb-0 lg:hidden rounded-lg"
              src={NutritionistMobile}
              alt="Experți nutriționiști"
            />
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Experți nutriționiști la îndemâna dumneavoastră
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Descoperiți o gamă largă de îndrumări nutriționale personalizate
              cu experții noștri nutriționiști. Fie că doriți să vă revizuiți
              dieta, să vă gestionați o afecțiune sau să vă îmbunătățiți
              performanța sportivă, profesioniștii noștri sunt aici pentru a vă
              oferi sfaturi personalizate și planuri de acțiune.
            </p>
            <ul
              role="list"
              className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Planuri de dietă personalizate
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Abordarea holistică a bunăstării
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Îndrumare bazată pe dovezi
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Suport continuu
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Sunteți gata să vă transformați obiceiurile alimentare și să vă
              atingeți obiectivele de wellness? Înscrieți-vă astăzi la FitSync
              pentru a intra în legătură cu nutriționiștii noștri certificați și
              începeți călătoria spre o persoană mai sănătoasă!
            </p>
          </div>
          <Image
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src={NutritionistDesktop}
            alt="Experți nutriționiști"
          />
        </div>

        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className=" mb-4 w-full lg:mb-0 lg:hidden rounded-lg"
            src={TrainerMobile}
            alt="antrenorii profesioniști de fitness"
          />
          <Image
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src={TrainerDesktop}
            alt="antrenorii profesioniști de fitness"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Conectați-vă cu antrenorii profesioniști de fitness
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Antrenorii noștri de fitness certificați se angajează să vă ajute
              să vă atingeți obiectivele de fitness. Fie că sunteți nou în
              exerciții fizice sau un atlet experimentat, antrenorii noștri vă
              oferă expertiza, motivația și planurile de antrenament
              personalizate de care aveți nevoie pentru a reuși.
            </p>
            <ul
              role="list"
              className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Regimuri de antrenament personalizate
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Atenție individuală
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Programare flexibilă
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Sprijin motivațional
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              Sunteți gata să vă ridicați călătoria de fitness? Înscrieți-vă la
              FitSync și asociați-vă cu antrenorii noștri experți care vă pot
              ghida la fiecare pas spre atingerea viselor dumneavoastră de
              fitness!
            </p>
          </div>
        </div>

        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <Image
              src={GymMobile}
              className="mb-4 w-full lg:mb-0 lg:hidden rounded-lg"
              alt="spațiul ideal de fitness"
            />
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Descoperiți spațiul ideal de fitness
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Explorați rețeaua noastră de săli de sport premium și găsiți
              spațiul perfect pentru a vă antrena. De la echipamente de ultimă
              generație până la o varietate de cursuri de fitness, sălile de
              sport listate pe platformă oferă tot ce aveți nevoie pentru a
              rămâne activi și implicați în rutina de fitness.
            </p>
            <ul
              role="list"
              className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Facilități diverse
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Clase de grup
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Mediu curat și sigur
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Comunitate și cultură
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Căutați o sală de sport care să se simtă ca acasă? Înscrieți-vă la
              FitSync pentru a accesa selecția noastră diversă de centre de
              fitness și găsiți astăzi comunitatea ideală de săli de sport.
              Pregătiți-vă să transpirați, să creșteți și să prosperați cu noi!
            </p>
          </div>
          <Image
            src={GymDesktop}
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            alt="spațiul ideal de fitness"
          />
        </div>
      </div>
    </section>
  );
}
