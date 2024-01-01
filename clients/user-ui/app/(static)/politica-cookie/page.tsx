import { Metadata } from "next";
import { Link } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Politică cookie | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-9">
      <h1 className="mb-4 text-center text-3xl">Politică cookie</h1>

      <article className="mb-4 text-justify">
        <p>
          Document de informare a utilizatorilor despre prezența cookie-urilor
          pe site-urile web ale FitSync. Informațiile prezentate în continuare
          au scopul de a aduce la cunoștința utilizatorului mai multe detalii
          despre plasarea, utilizarea și administrarea cookie-urilor utilizate
          de site-urile{" "}
          <Link
            underline={"always"}
            href="https://www.FitSync.ro"
            target="_self"
          >
            FitSync
          </Link>{" "}
          (ex.{" "}
          <Link
            underline={"always"}
            href="https://www.FitSync.ro"
            target="_self"
          >
            www.FitSync.ro
          </Link>
          ,{" "}
          <Link
            underline={"always"}
            href="https://www.FitSync.ro/blog"
            target="_self"
          >
            www.FitSync.ro/blog
          </Link>
          ,{" "}
          <Link underline={"always"} href="https://www.kaapo.ro" target="_self">
            www.kaapo.ro
          </Link>
          ,{" "}
          <Link
            underline={"always"}
            href="https://www.kaapo.studio"
            target="_self"
          >
            www.kaapo.studio
          </Link>
          , etc).
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">Ce este un cookie?</strong>
        <p>
          Un cookie este un fișier text care conține informații descărcate pe
          dispozitivul dumneavoastră atunci când vizitați (pentru prima dată) un
          site web. Acel cookie este trimis înapoi la fiecare vizită ulterioară
          către site-ul web de origine sau către alt site web care îl
          recunoaște. Cookie-urile sunt utile deoarece permit unui site web să
          recunoască un dispozitiv și vă oferă o experiență mai eficientă și
          personalizată.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">Ce NU este un cookie?</strong>
        <p>
          Cookie-urile NU sunt viruși! Ele folosesc formate tip plain text. Nu
          sunt alcătuite din bucăți de cod, așa că nu pot fi executate și nici
          nu pot auto-rula. În consecință, nu se pot duplica sau replica pe alte
          rețele pentru a se rula sau replica din nou.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          Ce tipuri de cookie sunt utilizate?
        </strong>
        <p className="mb-3">
          FitSync folosește pe site-urile sale atât cookie-uri proprietare cât
          și cookie-uri terțe.
        </p>
        <p>
          Cookie-urile proprietare sunt cookie-uri utilizate de fitsync.ro când
          vizitați unul dintre site-urile noastre web și sunt de următoarele
          tipuri: tehnice, de sesiune, persistente și funcționale:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            Cookie-urile tehnice sunt esențiale pentru funcționarea corectă a
            site-ului web. Aceste cookie-uri vă permit să navigați între
            diferite secțiuni ale site-ului web și să utilizați funcții
            specifice.
          </li>
          <li className="list-disc">
            Cookie-urile de sesiune sunt cookie-uri temporare care vă permit să
            navigați simplu și rapid pe site.
          </li>
          <li className="list-disc">
            Cookie-urile persistente sau ‘cookie-urile de urmărire’ durează mai
            multe sesiuni și rămân în browser o perioadă de timp după încheierea
            sesiunii (dacă nu le ștergeți).
          </li>
          <li className="list-disc">
            Cookie-urile funcționale monitorizează funcționarea corectă a
            site-ului web și îi permit acestuia să țină minte opțiunile
            dumneavoastră (de ex., limba, numele de utilizator sau regiunea).
            Acestea oferă funcții îmbunătățite și personale, care vă ajută să nu
            mai selectați opțiunile de fiecare dată când vizitați site-ul web.
          </li>
        </ul>
        <p className="mb-3">
          Cookie-urile terțe sunt module cookie care sunt utilizate de
          fitsync.ro când vizitați unul dintre site-urile noastre web și sunt de
          următoarele tipuri:
        </p>

        <ul className="ml-4 mb-3">
          <li className="list-disc">
            Cookie-urile de performanță (Google Analytics): colectează
            informații anonime și centralizate despre comportamentul
            dumneavoastră online (tipul de browser, adresa IP, sistemul de
            operare utilizat, numele domeniului site-ului pe care l-ați vizitat
            și momentul părăsirii site-ului, data și ora la care ați vizitat un
            site web, etc.) în scopuri statistice și pentru generarea
            profilurilor vizitatorilor. Pentru mai multe informații vă rugăm să
            accesați{" "}
            <Link
              underline={"always"}
              href="https://policies.google.com/privacy?hl=ro"
              target="_blank"
            >
              politica de confidențialitate a Google
            </Link>
            .
          </li>
          <li className="list-disc">
            Cookie-urile soluției reCaptcha (Google Recaptcha): sunt folosite
            pentru a verifica dacă datele introduse pe formularele din site-ul
            nostru au fost introduse de un om și nu de către de un program
            automatizat. Pentru a face acest lucru, reCAPTCHA analizează
            comportamentul vizitatorului site-ului pe baza diferitelor
            caracteristici. Această analiză începe automat în momentul în care
            vizitatorul site-ului intră pe site. Pentru analiză, reCAPTCHA
            evaluează diverse informații (de exemplu, adresa IP, durata
            vizitei). Pentru mai multe informații vă rugăm să accesați{" "}
            <Link
              underline={"always"}
              href="https://policies.google.com/privacy?hl=ro#infocollect"
              target="_blank"
            >
              politica de confidențialitate a Google
            </Link>
            .
          </li>
          <li className="list-disc">
            Cookie-urile pe care la folosim noi nu colectează date care să vă
            dezvăluie identitatea și, de aceea, nu vă putem identifica cu
            ajutorul lor. Site-urile noastre web pot conține link-uri către alte
            site-uri web care nu sunt deținute/administrate de fitsync.ro
            (conținut terț, linkuri și plug-in-uri). fitsync.ro nu își asumă
            responsabilitatea pentru practicile de confidențialitate aplicate de
            aceste site-uri web.
          </li>
        </ul>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">Cum vă exprimați acordul?</strong>
        <p>
          Când vizitați pentru prima dată site-urile noastre, în partea de sus a
          ecranului este afișat un banner cu un mesaj despre cookie. Dacă dați
          click pe butonul „Accept” sau continuați să vizitați site-ul, atunci
          vă exprimați acordul implicit pentru utilizarea cookie-urilor conform
          prezentei politici de utilizare a cookie-urilor, cu excepția cazului
          în care v-ați setat browserul astfel încât să respingă cookie-urile
          (vezi mai jos).
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">Cum respingeți cookie-urile?</strong>
        <p className="mb-3">
          Puteți să vă retrageți în orice moment acordul ștergând cookie-urile
          din browser.
        </p>
        <p>
          Aceste setări se găsesc de obicei în meniul {`'`}opțiuni{`'`} sau{" "}
          {`'`}preferințe{`'`}
          din browser. Pentru a înțelege aceste setări, ar putea fi utile
          următoarele linkuri (sau accesați opțiunea {`'`}Ajutor{`'`} din
          browser pentru mai multe detalii):
        </p>

        <ul className="ml-4 mb-3">
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
            >
              Setările pentru cookie din Internet Explorer
            </Link>
          </li>
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.mozilla.org/en-US/kb/cookies-information-websites-index-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"
              target="_blank"
            >
              Setările pentru cookie din Firefox
            </Link>
          </li>
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.google.com/chrome/answer/95647?hl=ro"
              target="_blank"
            >
              Setările pentru cookie din Chrome
            </Link>
          </li>
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.apple.com/en-gb/HT201265"
              target="_blank"
            >
              Setările pentru cookie din Safari
            </Link>
          </li>
        </ul>

        <p>
          Schimbarea setărillor din browser pentru a respinge cookie-urile poate
          influența modul în care ne accesați site-ul web și este posibil să vă
          fie respins accesul la anumite secțiuni ale acestuia. Puteți schimba
          în orice moment setările browserului.
        </p>
      </article>
    </div>
  );
}
