import HowItWorkImage from "@/public/images/homepage/how-it-works.png";
import Image from "next/image";
import Link from "next/link";
import { PagesLinks } from "@/constants/links";
import {
  CalendarCheck,
  CircleUserRound,
  SearchCheck,
  Target,
} from "lucide-react";

export default function HomeHowItWorks() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6">
        <Image
          src={HowItWorkImage}
          alt="Cum functioneaza FitSync"
          placeholder="blur"
          className="lg:sticky top-10 mx-auto mb-4 w-fit md:mx-0 md:w-[500px] lg:w-[500px] lg:mb-0 rounded-lg"
        />
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Este ușor să începeți cu FitSync!
          </h2>
          <p className="mb-3 font-light lg:text-xl">
            Misiunea noastră este de a oferi o platformă unde profesioniștii își
            pot ajuta clienții să își atingă obiectivele de fitness.
          </p>
          <Link
            href={PagesLinks.login.link}
            className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600"
          >
            Înregistrați-vă
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <CircleUserRound className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Înregistrați-vă
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Începeți-vă călătoria de fitness prin crearea contului
                  FitSync. Este rapid și ușor - trebuie doar să furnizați
                  informațiile de bază sau să vă înregistrați folosind contul
                  Google, Facebook sau Apple.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <SearchCheck className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Alegeți-vă antrenorul / nutriționistul / sala de sport
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Răsfoiți lista noastră extinsă de antrenori de fitness
                  certificați, nutriționiști experți și săli de sport de top.
                  Utilizați filtrele pentru a găsi perechea perfectă în funcție
                  de obiectivele, preferințele și locația dvs.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <CalendarCheck className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Rezervați o ședință
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Odată ce ați găsit antrenorul de fitness, nutriționistul sau
                  sala de fitness ideală, rezervați cu ușurință o sesiune sau o
                  clasă direct prin intermediul aplicației. Alegeți o oră care
                  se potrivește programului dvs. și pregătiți-vă să faceți
                  următorul pas în călătoria dvs. de fitness.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <Target className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Atingeți-vă obiectivele
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Începeți să vă antrenați și să vă urmăriți progresul! Cu
                  FitSync, nu vă alăturați doar unei platforme, ci intrați
                  într-o comunitate dedicată sănătății și bunăstării.
                  Atingeți-vă obiectivele de fitness și bucurați-vă de un stil
                  de viață mai sănătos.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Înțelegem că nevoile fiecăruia sunt diferite, iar aplicația noastră
            permite antrenorilor și nutritioniștilor să ofere antrenamente și
            planuri de nutriție personalizate pentru a satisface nevoile
            individuale.
          </p>
        </div>
      </div>
    </section>
  );
}
