import { Metadata } from "next";
import { Link } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Politică de confidențialitate | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};

export default function GDPRPage() {
  return (
    <div className="container mx-auto px-4 py-9">
      <h1 className="mb-4 text-center text-3xl">
        Politică de confidențialitate
      </h1>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          Ultima actualizare: Ianuarie 2023
        </strong>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">I. Informații generale</strong>
        <p className="mb-3">
          Confidențialitatea datelor dumneavoastră cu caracter personal
          reprezintă una dintre preocupările principale ale Kaapo Webify S.R.L.,
          o companie înregistrată în Bucuresti cu numărul de 42008930 |
          J40/16943/2019, cu sediul în Strada Hrisovului, Nr. 2-4, Parter,
          Camera 1, Bloc 2, Ap.88, Bucureşti Sectorul 1, Romania, în calitate de
          operator de date.
        </p>
        <p>
          Acest document are rolul de a vă informa cu privire la prelucrarea
          datelor dumneavoastră cu caracter personal, în contextul utilizării
          paginii de internet{" "}
          <Link href="https://FitSync.ro" target="_blank">
            https://FitSync.ro
          </Link>
          ,{" "}
          <Link href="https://kaapo.studio" target="_blank">
            https://kaapo.studio
          </Link>{" "}
          sau{" "}
          <Link href="https://kaapo.ro" target="_blank">
            https://kaapo.ro
          </Link>{" "}
          („Site-ul”)
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          II. Categoriile de date cu caracter personal prelucrate
        </strong>
        <p className="mb-3">
          <strong>II.1.</strong> Dacă sunteți client al Site-ului, Kaapo Webify
          S.R.L. va prelucra datele dumneavoastră cu caracter personal, cum ar
          fi nume şi prenume, telefon, adresa de e-mail, adresa de facturare,
          adresa de livrare, masurători fizice, poze, date referitoare la modul
          în care utilizați Site-ul, de exemplu
          comportamentul/preferinţele/obişnuințele dumneavoastră în cadrul Kaapo
          Webify S.R.L, precum și orice alte categorii de date pe care le
          furnizați în mod direct în contextul creării contului de utilizator,
          în contextul plasării unei comenzi prin intermediul site-ului sau în
          orice alt mod care rezultă din utilizarea Site-ului.
        </p>
        <p className="mb-3">
          Dacă pentru a vă crea cont de utilizator pe Site, utilizați contul
          dumneavoastră de Facebook sau Google, Kaapo Webify S.R.L va prelucra
          următoarele date publice de profil afişate de aplicaţiile respective:
          nume utilizator, adresa de e-mail.
        </p>
        <p>
          <strong>II.2.</strong> Dacă sunteți vizitator al Site-ului, Kaapo
          Webify S.R.L va prelucra datele dumneavoastră cu caracter personal pe
          care le furnizați în mod direct în contextul utilizării Site-ului, cum
          ar fi datele pe care le furnizați în cadrul secțiunii de contact /
          întrebări / reclamații, în măsura în care ne contactați în acest fel.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          III. Scopurile și temeiurile prelucrării
        </strong>
        <p>
          <strong>III.1.</strong> Dacă sunteți client al Site-ului, Kaapo Webify
          S.R.L prelucrează datele dumneavoastră cu caracter personal astfel:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            pentru desfășurarea relației contractuale dintre dumneavoastră şi
            Kaapo Webify S.R.L, respectiv pentru preluarea, validarea şi
            facturarea comenzii plasate pe Site etc.
          </li>
        </ul>
        <p>
          Temei: Prelucrarea datelor dumneavoastră în acest scop are la bază
          contractul încheiat între dumneavoastră și Kaapo Webify S.R.L, definit
          în cuprinsul Termenelor și Condițiilor{" "}
          <Link href="https://fitsync.ro/termeni-si-conditii/" target="_blank">
            https://fitsync.ro/termeni-si-conditii/
          </Link>
          . Furnizarea datelor dumneavoastră cu caracter personal este necesară
          pentru executareaa acestui contract. Refuzul furnizării datelor poate
          avea drept consecință imposibilitatea derulării raporturilor
          contractuale dintre dumneavoastră și Kaapo Webify S.R.L.
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            pentru îndeplinirea obligațiilor legale care incumbă Kaapo Webify
            S.R.L în contextul serviciilor prestate prin intermediul Site-ului,
            inclusiv a obligațiilor în materie fiscală, precum și în materie de
            arhivare.
          </li>
        </ul>
        <p>
          Temei: Prelucrarea datelor dumneavoastră pentru acest scop este
          necesară în baza unor obligații legale. Furnizarea datelor
          dumneavoastră în acest scop este necesară. Refuzul furnizării datelor
          poate avea drept consecință imposibilitatea Kaapo Webify S.R.L de a
          respecta obligațiile legale care îi revin și deci în imposibilitatea
          de a vă oferi serviciile prin intermediul Site-ului.
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            pentru activităţi de marketing, respectiv pentru transmiterea, prin
            intermediul mijloacelor de comunicare la distanţă (e-mail, sms) de
            comunicări comerciale privind produsele şi serviciile oferite de
            Kaapo Webify S.R.L, prin intermediul Site-ului.
          </li>
        </ul>

        <p className="mb-3">
          Temei: Prelucrarea datelor dumneavoastră pentru acest scop are la bază
          consimțământul dumneavoastră, dacă alegeți să-l furnizați.
        </p>

        <p className="mb-3">
          Vă puteți exprima consimțământul pentru prelucrarea datelor în acest
          scop prin bifarea căsuței corespunzătoare de la momentul creării
          contului, sau ulterior creării contului, la secțiunea Informațiile
          contului meu. Pentru dezabonarea de la primirea unor astfel de
          comunicări comerciale puteți folosi opţiunea de la finalul fiecărui
          e-mail/ sms conţinând comunicări comerciale. În plus, puteți să vă
          dezabonați prin accesarea secțiunii Informațiile contului meu.
        </p>

        <p>
          <strong>
            Furnizarea datelor dumneavoastră în acest scop este voluntară.
          </strong>{" "}
          Refuzul furnizării consimțământului pentru prelucrarea datelor
          dumneavoastră în acest scop nu va avea urmări negative pentru
          dumneavoastră.
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            în scopul efectuării diverselor analize, raportări privind modul de
            funcționare a Site-ului, realizarea de profiluri de preferinţe de
            consum, în principal, în vederea îmbunătăţiri experienței oferite pe
            Site.
          </li>
        </ul>

        <p>
          Temei: Prelucrarea datelor dumneavoastră pentru acest scop are la bază
          interesul legitim al Kaapo Webify S.R.L de a îmbunătății permanent
          experiența clienților pe Site. Furnizarea datelor dumneavoastră în
          acest scop este voluntară. Refuzul furnizării datelor pentru acest
          scop nu va avea urmări negative pentru dumneavoastră.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <p>
          <strong>III.2.</strong> Dacă sunteți vizitator al Site-ului, Kaapo
          Webify S.R.L prelucrează datele dumneavoastră cu caracter personal
          astfel:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            pentru activităţi de marketing, respectiv pentru transmiterea, prin
            intermediul mijloacelor de comunicare la distanţă (e-mail, sms), de
            comunicări comerciale privind produsele şi serviciile oferite de
            Kaapo Webify S.R.L, prin intermediul Site-ului.
          </li>
        </ul>
        <p className="mb-3">
          Temei: Prelucrarea datelor dumneavoastră pentru acest scop are la bază
          consimțământul dumneavoastră, dacă alegeți să-l furnizați.
        </p>
        <p className="mb-3">
          Vă puteți exprima consimțământul pentru prelucrarea datelor în acest
          scop prin completarea și bifarea căsuței corespunzătoare din
          formularul pentru abonarea la newsletter disponibil pe Site. Pentru
          dezabonarea de la primirea unor astfel de comunicări comerciale puteți
          folosi opţiunea de la finalul fiecărui e-mail/ sms conţinând
          comunicări comerciale.
        </p>
        <p>
          Furnizarea datelor dumneavoastră în acest scop este voluntară. Refuzul
          furnizării consimțământului pentru prelucrarea datelor dumneavoastră
          în acest scop nu va avea urmări negative pentru dumneavoastră.
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            pentru rezolvarea plângerilor, reclamaţiilor şi pentru a monitoriza
            traficul și a îmbunătăţii experiența dumneavoastră oferită pe Site.
          </li>
        </ul>
        <p className="mb-3">
          Temei: Prelucrarea datelor dumneavoastră pentru acest scop are la bază
          interesul legitim al Kaapo Webify S.R.L de a asigura funcționarea
          corectă a Site-ului, precum și pentru a îmbunătății permanent
          experiența vizitatorilor Site-ului, inclusiv prin soluționarea
          diferitelor comentarii, întrebări sau reclamații.
        </p>
        <p>
          Furnizarea datelor dumneavoastră în acest scop este voluntară. Refuzul
          furnizării datelor pentru acest scop nu va avea urmări negative pentru
          dumneavoastră.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          IV. Durata pentru care vă prelucrăm datele
        </strong>
        <p className="mb-3">
          Ca principiu, Kaapo Webify S.R.L va prelucra datele dumneavoastră cu
          caracter personal atât cât este necesar pentru realizarea scopurilor
          de prelucrare menționate mai sus.
        </p>
        <p className="mb-3">
          În cazul în care sunteți client, vom prelucra datele dumneavoastră pe
          întreaga durată a raporturilor contractuale și ulterior conform
          obligaţiilor legale care revin în sarcina Kaapo Webify S.R.L (de ex.,
          în cazul documentelor justificative financiar-contabile pentru care
          termenul de păstrare prevăzut de lege este de 10 ani de la data
          încheierii exerciţiului financiar în cursul căruia au fost întocmite).
        </p>
        <p className="mb-3">
          În situaţia în care sunteți client și vă exercitați opțiunea de
          ştergere a contului de utilizator, prin apăsarea butonul Ștergere cont
          din secțiunea Informațiile contului meu, Kaapo Webify S.R.L va
          interpreta această acțiune ca opțiunea dumneavoastră de a vă dezabona
          de la primirea de comunicări comerciale prin care vă ținem la curent
          despre produsele și serviciile oferite prin intermediul site-ului. În
          acest sens, dacă alegeți să vă ștergeți contul de utilizator, nu vă
          vom mai trimite e-mailuri și/sau sms-uri de acest gen. Totuși, dorim
          să vă informăm că ștergerea contului nu va avea ca efect automat
          ștergerea datelor dumneavoastră cu caracter personal. În cazul în care
          doriți să nu vă mai fie prelucrate datele cu caracter personal sau
          dacă doriți ștergerea datelor, vă puteți exercita drepturile detaliate
          la punctul VII de mai jos.. În cazul în care solicitați ştergerea
          contului, însă pe acel cont există cel puţin o comandă activă, cererea
          de ştergere a contului va putea fi înregistrată numai după livrarea
          produselor şi finalizarea ultimei comenzi active.
        </p>
        <p className="mb-3">
          Dacă vă retrageți consimțământul pentru prelucrarea datelor în scop de
          marketing, Kaapo Webify S.R.L va înceta prelucrarea datelor
          dumneavoastră cu caracter personal în acest scop, fără însă a afecta
          prelucrările desfășurate de Kaapo Webify S.R.L pe baza
          consimțământului exprimat de către dumneavoastră înainte de retragerea
          acestuia.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          V. Dezvăluirea datelor cu caracter personal
        </strong>
        <p>
          Pentru îndeplinirea scopurilor de prelucrare, Kaapo Webify S.R.L poate
          dezvălui datele dumneavoastră către parteneri, către terțe persoane
          sau entități care sprijină Kaapo Webify S.R.L în desfășurarea
          activității prin intermediul Site-ului (de exemplu firme de curierat,
          furnizori de servicii IT), ori către autoritățile publice
          centrale/locale, în următoarele cazuri exemplificativ enumerate:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">pentru administrarea Site-ului;</li>
          <li className="list-disc">
            în situațiile în care această comunicare ar fi necesară pentru
            atribuirea de premii sau alte facilități persoanelor vizate,
            obținute ca urmare a participării lor la diverse campanii
            promoționale organizate de către Kaapo Webify S.R.L prin intermediul
            Site-ului;
          </li>
          <li className="list-disc">
            pentru menținerea, personalizarea și îmbunătățirea Site-ului și a
            serviciilor derulate prin intermediul lui;
          </li>
          <li className="list-disc">
            pentru efectuarea analizei datelor, testarea și cercetarea,
            monitorizarea tendințelor de utilizare și activitate, dezvoltarea
            caracteristicilor de siguranță și autentificarea utilizatorilor;
          </li>
          <li className="list-disc">
            pentru transmiterea de comunicări comerciale de marketing, în
            condițiile și limitele prevăzute de lege;
          </li>
          <li className="list-disc">
            atunci când dezvăluirea datelor cu caracter personal este prevăzută
            de lege etc.
          </li>
        </ul>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          VI. Transferul datelor cu caracter personal
        </strong>
        <p>
          Datele cu caracter personal furnizate către Kaapo Webify S.R.L pot fi
          transferate în afara României, dar doar către state din Uniunea
          Europeană.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          VII. Drepturile de care beneficiați
        </strong>
        <p>
          În condițiile prevăzute de legislația în materia prelucrării datelor
          cu caracter personal, în calitate de persoane vizate, beneficiați de
          următoarele drepturi:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            dreptul la informare, respectiv dreptul de a primi detalii privind
            activitățile de prelucrare efectuate de către Kaapo Webify S.R.L,
            conform celor descrise în prezentul document;
          </li>
          <li className="list-disc">
            dreptul de acces la date, respectiv dreptul de a obține confirmarea
            din partea Kaapo Webify S.R.L cu privire la prelucrarea datelor cu
            caracter personal, precum și detalii privind activitățile de
            prelucrare precum modalitatea în care sunt prelucrate datele, scopul
            în care se face prelucrarea, destinatarii sau categoriile de
            destinatari ai datelor, etc;
          </li>
          <li className="list-disc">
            dreptul la rectificare, respectiv dreptul de a obține corectarea,
            fără întârzieri justificate, de către Kaapo Webify S.R.L a datelor
            cu caracter personal inexacte/ nejustificate, precum și completarea
            datelor incomplete; Rectificarea/ completarea va fi comunicată
            fiecărui destinatar la care au fost transmise datele, cu excepția
            cazului în care acest lucru se dovedește imposibil sau presupune
            eforturi disproporționate.
          </li>
          <li className="list-disc">
            dreptul la ștergerea datelor, fără întârzieri nejustificate,
            („dreptul de a fi uitat”), în cazul in care se aplică unul dintre
            următoarele motive:
            <ul className="ml-4 mb-3">
              <li className="list-disc">
                acestea nu mai sunt necesare pentru îndeplinirea scopurilor
                pentru care au fost colectate sau prelucrate;
              </li>
              <li className="list-disc">
                în cazul în care este retras consimțământul și nu există niciun
                alt temei juridic pentru prelucrare;
              </li>
              <li className="list-disc">
                în cazul în care persoana vizată se opune prelucrării și nu
                există motive legitime care să prevaleze;
              </li>
              <li className="list-disc">
                în cazul în care datele cu caracter personal au fost prelucrate
                ilegal;
              </li>
              <li className="list-disc">
                în cazul în care datele cu caracter personal trebuie șterse
                pentru respectarea unei obligații legale;
              </li>
              <li className="list-disc">
                datele cu caracter personal au fost colectate în legătură cu
                oferirea de servicii ale societății informaționale conform
                dreptului Uniunii sau al dreptului intern sub incidenta căruia
                se află operatorul.
              </li>
            </ul>
          </li>
          <li className="list-disc">
            Este posibil ca, în urma solicitării de ștergere a datelor, Kaapo
            Webify S.R.L să anonimizeze aceste date (lipsindu-le astfel de
            caracterul personal) și să continue în aceste condiții prelucrarea
            pentru scopuri statistice;
          </li>

          <li className="list-disc">
            dreptul la restricționarea prelucrării în măsura în care :
            <ul className="ml-4 mb-3">
              <li className="list-disc">
                persoana contestă exactitatea datelor, pe o perioadă care ne
                permite verificarea corectitudinii datelor;
              </li>
              <li className="list-disc">
                prelucrarea este ilegală, iar persoana vizată se opune ștergerii
                datelor cu caracter personal, solicitând în schimb
                restricționarea utilizării lor;
              </li>
              <li className="list-disc">
                operatorul nu mai are nevoie de datele cu caracter personal în
                scopul prelucrării, dar persoana vizată i le solicită pentru
                constatarea, exercitarea sau apărarea unui drept în instanță;
                sau
              </li>
              <li className="list-disc">
                persoana vizată s-a opus prelucrării (altele decât cele de
                marketing direct), pentru intervalul de timp în care se verifică
                dacă drepturile legitime ale operatorului prevalează asupra
                celor ale persoanei vizate.
              </li>
            </ul>
          </li>
          <li className="list-disc">
            dreptul la portabilitatea datelor, respectiv (i) dreptul de a primi
            datele cu caracter personal într-o modalitate structurată, folosită
            în mod obișnuit și într-un format ușor de citit, precum și (ii)
            dreptul ca aceste date să fie transmise de către Kaapo Webify S.R.L
            către alt operator de date, în măsura în care sunt îndeplinite
            condițiile prevăzute de lege;
          </li>

          <li className="list-disc">
            dreptul la opoziție – în ceea ce privește activitățile de prelucrare
            se poate exercita prin transmiterea unei solicitări conform celor
            indicate mai jos;
            <ul className="ml-4 mb-3">
              <li className="list-disc">
                în orice moment, din motive legate de situația particulară în
                care se află persoana vizată, ca datele care o vizează să fie
                prelucrate în temeiul interesului legitim al Kaapo Webify S.R.L
                sau în temeiul interesului public, cu excepția cazurilor în care
                Kaapo Webify S.R.L poate demonstra că are motive legitime și
                imperioase care justifică prelucarea și care prevalează asupra
                intereselor, drepturilor și libertăților persoanelor vizate sau
                că scopul este constatarea, exercitarea sau apararea unui drept
                în instanță;
              </li>
              <li className="list-disc">
                în orice moment, în mod gratuit și fără nicio justificare, că
                datele care o vizează să fie prelucrate în scop de marketing
                direct.
              </li>
            </ul>
          </li>

          <li className="list-disc">
            dreptul de a nu fi supus unei decizii individuale automate,
            respectiv dreptul de a nu fi subiectul unei decizii luate numai pe
            baza unor activități de prelucrare automate, inclusiv crearea de
            profiluri, care produce efecte juridice care privesc persoana vizată
            sau o afectează în mod similar într-o măsură semnificativă;
          </li>
          <li className="list-disc">
            dreptul de a vă adresa Autorităţii Naţionale de Supraveghere a
            Prelucrării Datelor cu Caracter Personal sau instanțelor competente,
            în măsura în care considerați necesar
          </li>
        </ul>
        <p className="mb-3">
          Pentru orice întrebări suplimentare cu privire la modul în care datele
          cu caracter personal sunt prelucrate și pentru a vă exercita
          drepturile menționate mai sus, vă rugăm să vă adresați la adresa de
          email:{" "}
          <Link href="mailto:contact@fitsync.ro" target="_blank">
            contact@fitsync.ro
          </Link>
          .
        </p>
        <p>
          Această pagină de Internet folosește fișiere de tip cookie. Pentru mai
          multe informații cu privire la modul în care se folosesc aceste
          fișiere, vă rugăm să accesați următorul link:{" "}
          <Link href="https://fitsync.ro/politica-cookie/" target="_blank">
            https://fitsync.ro/politica-cookie/
          </Link>
        </p>
      </article>
    </div>
  );
}
