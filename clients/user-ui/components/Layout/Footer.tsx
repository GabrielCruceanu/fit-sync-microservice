import { Link } from "@nextui-org/react";
import { SocialLinks, TermsLinks } from "@/constants/links";
import { FacebookIcon, InstagramIcon, Mail, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-1 mt-1 w-full border-primary-500 px-4 py-11 antialiased">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Despre noi
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            FitSync este o platformă care dorește să îmbunătățească experiența
            clienților cu antrenorii și să facă munca antrenorilor mai ușoară
            oferindu-le mai multe unelte prin care își pot gestiona clienții mai
            ușor.
          </p>
        </div>
        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-white lg:text-center">
            Contact
          </h3>
          <div className="flex lg:justify-center">
            <div className="d-flex w-fit border-r-1  border-gray-500 dark:border-gray-400 px-3">
              <div className="h-8 space-x-2.5 fill-primary-500 hover:fill-primary-800">
                <Link href={SocialLinks.facebook.link} target="_blank">
                  <FacebookIcon className="text-primary-500 hover:text-primary-800" />
                </Link>
              </div>
            </div>
            <div className=" d-flex w-fit border-r-1  border-gray-500 dark:border-gray-400 px-3">
              <div className="h-8 space-x-2.5 fill-primary-500 hover:fill-primary-800">
                <Link href={SocialLinks.instagram.link} target="_blank">
                  <InstagramIcon className="text-primary-500 hover:text-primary-800" />
                </Link>
              </div>
            </div>
            <div className="d-flex w-fit border-r-1 border-gray-500 dark:border-gray-400 px-3">
              <div className="h-8 space-x-2.5 fill-primary-500 hover:fill-primary-800">
                <Link href={SocialLinks.twitter.link} target="_blank">
                  <TwitterIcon className="text-primary-500 hover:text-primary-800" />
                </Link>
              </div>
            </div>
            <div className="px-3">
              <div className="h-8 space-x-2.5 fill-primary-500 hover:fill-primary-800">
                <Link href={SocialLinks.mail.link} target="_blank">
                  <Mail className="text-primary-500 hover:text-primary-800" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-white lg:text-right">
            Altele
          </h3>
          <div className="flex flex-col text-sm md:flex-row lg:justify-end">
            <Link
              href={TermsLinks.termeniSiConditii.link}
              target="_blank"
              className="text-primary-500 hover:text-primary-700"
            >
              {TermsLinks.termeniSiConditii.name}
            </Link>
            <Link
              href={TermsLinks.gdpr.link}
              target="_blank"
              className="text-primary-500 hover:text-primary-700 md:px-3"
            >
              {TermsLinks.gdpr.name}
            </Link>
            <Link
              href={TermsLinks.cookies.link}
              target="_blank"
              className="text-primary-500 hover:text-primary-700"
            >
              {TermsLinks.cookies.name}
            </Link>
          </div>

          <p className="mt-2 text-sm  text-gray-500 dark:text-gray-400 lg:text-right">
            © 2023 FitSync. <br /> Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
