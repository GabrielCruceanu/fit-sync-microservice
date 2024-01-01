import { Metadata } from "next";
import { Link } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "Termeni de utilizare | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-9">
      <h1 className="mb-4 text-center text-3xl">Termeni de utilizare</h1>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          Ultima actualizare: Ianuarie 2023
        </strong>
        <p>
          Acești termeni și condiții vă prezintă regulile de utilizare a
          fiecăruia dintre site-urile web operate de Kaapo Webify S.R.L. și de
          filialele și subsidiarele sale controlate (denumite colectiv {'"'}noi
          {'"'},{'"'}al nostru{'"'} sau site-urile noastre). Vă rugăm să le
          citiți cu atenție înainte de a utiliza oricare dintre site-urile
          noastre. <br className="mb-3" />
          Site-urile noastre sunt:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            <Link href="https://FitSync.ro" target="_blank">
              https://FitSync.ro
            </Link>
          </li>
          <li className="list-disc">
            <Link href="https://kaapo.ro" target="_blank">
              https://kaapo.ro
            </Link>
          </li>
          <li className="list-disc">
            <Link href="https://kaapo.studio" target="_blank">
              https://kaapo.studio
            </Link>
          </li>
        </ul>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          1. Cine suntem și cum ne puteți contacta
        </strong>
        <p className="mb-3">
          Această platformă digitală este deținută de Kaapo Webify S.R.L., o
          companie înregistrată în Bucuresti cu numărul de 42008930 |
          J40/16943/2019.
        </p>
        <p>Ne puteți contacta folosind una dintre opțiunile de mai jos:</p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            Ne puteți trimite un e-mail:
            <Link href="mailto:contact@kaapo.studio" target="_blank">
              contact@kaapo.studio
            </Link>
          </li>
          <li className="list-disc">
            Ne puteți suna:
            <Link href="tel:+40770121947" target="_blank">
              +40 770 121 947
            </Link>
          </li>
        </ul>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          2. Prin utilizarea site-urilor noastre, acceptați acești termeni
        </strong>
        <p className="mb-3">
          Prin utilizarea site-urilor noastre, confirmați că acceptați aceste
          condiții de utilizare și că sunteți de acord să le respectați. Dacă nu
          sunteți de acord cu acești termeni, atunci nu trebuie să utilizați
          site-urile noastre.
        </p>
        <p className="mb-3">
          Vă recomandăm să imprimați o copie a acestor termeni pentru referințe
          viitoare.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          3. Există alți termeni care vi se aplică
        </strong>
        <p className="mb-3">
          Acești termeni de utilizare se referă la notificarea noastră privind
          confidențialitatea, care se aplică, de asemenea, utilizării de către
          dvs. a site-urilor noastre și poate fi găsită la:{" "}
          <Link
            href="https://www.fitsync.ro/politica-de-confidentialitate"
            target="_blank"
          >
            https://www.fitsync.ro/politica-de-confidentialitate
          </Link>
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          4. Putem aduce modificări la acești termeni
        </strong>
        <p className="mb-3">
          Putem modifica acești termeni din când în când. De fiecare dată când
          doriți să utilizați site-urile noastre, vă rugăm să verificați acești
          termeni de utilizare pentru a vă asigura că ați înțeles termenii și
          condițiile care se aplică în acel moment. Recunoașteți și sunteți de
          acord că accesul și utilizarea în continuare a site-urilor noastre
          constituie acceptarea de către dumneavoastră a oricăror astfel de
          modificări.
        </p>
        <p>
          De asemenea, aveți responsabilitatea de a vă asigura că toate
          persoanele care accesează site-urile noastre prin intermediul
          conexiunii dvs. la internet sunt la curent cu acești termeni de
          utilizare și cu alți termeni și condiții aplicabile și că se
          conformează acestora.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          5. Putem face modificări la site-urile noastre
        </strong>
        <p className="mb-3">
          Este posibil să actualizăm și să aducem modificări site-urilor noastre
          din când în când. Recunoașteți și sunteți de acord că forma și natura
          conținutului site-urilor noastre se pot schimba fără notificare
          prealabilă.
        </p>
        <p className="mb-3">
          Conținutul site-urilor noastre este furnizat doar pentru informații
          generale. Acesta nu este destinat să reprezinte un sfat pe care să vă
          bazați. Trebuie să obțineți consultanță profesională sau de
          specialitate înainte de a întreprinde sau de a vă abține de la orice
          acțiune pe baza conținutului site-urilor noastre.
        </p>
        <p className="mb-3">
          Deși depunem eforturi rezonabile pentru a actualiza informațiile de pe
          site-urile noastre, nu facem nicio declarație, garanție sau asigurare,
          expresă sau implicită, că conținutul site-urilor noastre este precis,
          complet sau actualizat.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          6. Putem suspenda sau retrage site-urile noastre
        </strong>
        <p className="mb-3">
          Site-urile noastre sunt puse la dispoziție în mod gratuit. Nu garantăm
          că site-urile noastre, sau orice conținut de pe acestea, vor fi
          întotdeauna accesibile sau neîntrerupte. Putem suspenda, retrage sau
          restricționa disponibilitatea tuturor sau a oricărei părți a
          site-urilor noastre din motive comerciale și operaționale. Nu ne
          asumăm nicio răspundere sau responsabilitate pentru orice probleme de
          acces pe care le puteți întâmpina.
        </p>
        <p className="mb-3">
          Ne putem transfera drepturile și obligațiile noastre în temeiul
          acestor termeni către o altă organizație.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          7. Cum puteți utiliza materialele de pe site-urile noastre
        </strong>
        <p className="mb-3">
          Noi suntem proprietarii sau deținătorii de licențe pentru toate
          drepturile de proprietate intelectuală asupra site-urilor noastre și a
          materialelor publicate pe acestea. Aceste lucrări sunt protejate de
          legile și tratatele privind drepturile de autor din întreaga lume.
          Toate aceste drepturi sunt rezervate.
        </p>
        <p className="mb-3">
          Trebuie să presupuneți că drepturile de autor subzistă în tot ceea ce
          vedeți sau citiți pe site-urile noastre. Aveți permisiunea de a
          vizualiza și de a utiliza imaginile și conținutul disponibil pe
          site-urile noastre pentru uz personal și necomercial. Nu trebuie să
          utilizați imaginile sau conținutul de pe site-urile noastre în scopuri
          comerciale fără a obține o licență în acest sens de la noi sau de la
          licențiatorii noștri. Orice utilizare neautorizată a imaginilor și a
          conținutului poate încălca legile privind drepturile de autor, legile
          privind mărcile comerciale și legile privind confidențialitatea,
          precum și reglementările și statutele privind comunicațiile. Nu ne
          asumăm niciun angajament că utilizarea de către dvs. a materialelor
          afișate pe site-urile noastre nu va încălca drepturile unor terțe
          părți.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          8. Utilizarea acceptabilă a site-urilor noastre și regulile de
          conduită
        </strong>
        <p>
          Puteți utiliza site-urile noastre numai în scopuri legale. Nu trebuie
          să:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            să introducă cu bună știință viruși, troieni, viermi, bombe logice,
            programe spion sau alte coduri informatice, fișiere sau programe
            care sunt dăunătoare sau invazive sau care sunt destinate să
            deterioreze sau să deturneze funcționarea sau să monitorizeze
            utilizarea oricărui hardware, software sau echipament.
          </li>
          <li className="list-disc">
            încercarea de a obține acces neautorizat la oricare dintre
            site-urile noastre, la serverele pe care sunt stocate site-urile
            noastre sau la orice server, calculator sau bază de date conectată
            la oricare dintre site-urile noastre.
          </li>
          <li className="list-disc">
            să restricționați sau să împiedicați orice persoană să folosească
            oricare dintre site-urile noastre (inclusiv prin piratarea sau
            distrugerea oricărei porțiuni din oricare dintre site-urile
            noastre).
          </li>
          <li className="list-disc">
            să modifice, să adapteze, să traducă, să facă inginerie inversă, să
            decompileze sau să dezasambleze orice porțiune din oricare dintre
            site-urile noastre, cu excepția cazului în care acest lucru este
            permis în mod expres de legea aplicabilă.
          </li>
          <li className="list-disc">
            să eliminați orice notificare privind drepturile de autor, mărci
            comerciale sau alte drepturi de proprietate de pe oricare dintre
            site-urile noastre sau din materialele care provin de pe site-urile
            noastre.
          </li>
          <li className="list-disc">
            încadrați sau oglindiți orice parte din oricare dintre site-urile
            noastre fără consimțământul nostru expres în scris.
          </li>
          <li className="list-disc">
            să creeze o bază de date prin descărcarea și stocarea sistematică a
            întregului sau a oricărui conținut accesibil pe oricare dintre
            site-urile noastre.
          </li>
          <li className="list-disc">
            să utilizați orice robot, spider, aplicație de căutare/recuperare a
            site-ului sau orice alt dispozitiv manual sau automat pentru a
            prelua, indexa, {'"'}răzui{'"'}, {'"'}extrage date{'"'} sau, în
            orice fel, să reproduceți sau să eludați structura de navigare sau
            prezentarea oricăruia dintre site-urile noastre, fără acordul nostru
            expres în scris în prealabil.
          </li>
          <li className="list-disc">
            să publice orice publicitate nesolicitată sau neautorizată,
            materiale promoționale, {'"'}junk mail{'"'}, {'"'}spam{'"'}, {'"'}
            scrisori în lanț{'"'},{'"'}scheme piramidale{'"'} sau oportunități
            de investiții sau orice altă formă de solicitare.
          </li>
          <li className="list-disc">
            să publice orice informație materială nepublică despre o persoană
            sau o societate fără a fi autorizat în acest sens.
          </li>
          <li className="list-disc">
            să încălcați orice legi sau reglementări aplicabile atunci când
            utilizați site-urile noastre și/sau partajați conținut cu noi.
          </li>
        </ul>
        <p className="mb-3">
          În plus, atunci când utilizați site-urile noastre și/sau partajați
          conținut cu noi, vă este interzis să partajați orice conținut care
          încalcă drepturile de proprietate intelectuală sau protecția datelor,
          confidențialitatea sau alte drepturi ale oricărei alte persoane, este
          defăimător sau încalcă orice obligație contractuală sau orice
          obligație de confidențialitate, este obscen, explicit din punct de
          vedere sexual, amenințător, abuziv, hărțuitor, care incită la violență
          sau la ură, blasfemator, discriminatoriu (din orice motiv), care poate
          provoca anxietate, alarmă sau jenă, care este cu bună știință fals sau
          înșelător sau care nu respectă toate legile și reglementările
          aplicabile sau care este în orice alt mod inacceptabil sau interzis.
        </p>
        <p className="mb-3">
          Garantați că orice astfel de contribuție respectă standardele descrise
          mai sus și veți fi răspunzător față de noi și ne veți despăgubi pentru
          orice încălcare a acestei garanții. Acest lucru înseamnă că veți fi
          responsabil pentru orice pierdere sau prejudiciu pe care îl suferim ca
          urmare a încălcării garanției dumneavoastră.
        </p>
        <p className="mb-3">
          Ne rezervăm dreptul de a raporta orice astfel de încălcare
          autorităților de aplicare a legii relevante și vom coopera pe deplin
          cu aceste autorități și/sau cu orice ordin judecătoresc care ne
          solicită sau ne ordonă să vă dezvăluim identitatea. Ne rezervăm
          dreptul de a elimina orice conținut sau material sau de a anula orice
          link în orice moment, după cum considerăm necesar.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          9. Cum putem utiliza informațiile dumneavoastră personale
        </strong>
        <p>
          Vom utiliza informațiile dvs. personale numai așa cum este prevăzut în
          Notificarea noastră privind confidențialitatea:{" "}
          <Link
            href="https://www.fitsync.ro/politica-de-confidentialitate"
            target="_blank"
          >
            https://www.fitsync.ro/politica-de-confidentialitate
          </Link>
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          10. Nu suntem răspunzători pentru site-urile web cu care ne legăm
        </strong>
        <p>
          În cazul în care site-urile noastre conțin linkuri către alte site-uri
          și resurse furnizate de terți, aceste linkuri sunt furnizate doar
          pentru informarea dumneavoastră. Nu avem niciun control asupra
          conținutului, politicilor de confidențialitate, securității sau
          practicilor acestor site-uri terțe și nu ne asumăm nicio
          responsabilitate pentru acestea.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          11. Limitarea de răspundere a garanțiilor
        </strong>
        <p>
          Înțelegeți că nu putem și nu garantăm sau nu garantăm că fișierele
          disponibile pentru descărcare de pe internet sau de pe site-ul web vor
          fi lipsite de viruși sau alte coduri distructive. Sunteți responsabil
          pentru implementarea unor proceduri și puncte de control suficiente
          pentru a satisface cerințele dumneavoastră specifice privind protecția
          antivirus și acuratețea introducerii și ieșirii datelor, precum și
          pentru menținerea unui mijloc extern site-ului nostru pentru orice
          reconstrucție a datelor pierdute.
        </p>
      </article>
    </div>
  );
}
