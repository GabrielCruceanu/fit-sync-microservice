import {
  ActivitySquare,
  ClipboardList,
  ScanSearch,
  UsersRound,
} from "lucide-react";

export default function ProBenefits() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          De ce FitSync PRO?
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Cu FitSync PRO, obțineți acces la o lume de posibilități - de la
          extinderea clientelei dvs. până la eficientizarea operațiunilor de
          afaceri.
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          <div>
            <ScanSearch className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Extindeți-vă raza de acțiune
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Conectați-vă cu o rețea vastă de pasionați de fitness care caută
              îndrumare de specialitate.
            </p>
          </div>
          <div>
            <ClipboardList className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Simplificați-vă operațiunile
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Utilizați instrumentele noastre de programare și de gestionare de
              ultimă generație pentru o eficiență maximă.
            </p>
          </div>
          <div>
            <ActivitySquare className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Analiză inteligentă
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Accesați analize detaliate pentru a vă urmări creșterea, pentru a
              înțelege nevoile clienților și pentru a vă optimiza serviciile.
            </p>
          </div>
          <div>
            <UsersRound className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Rețea comunitară
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Alăturați-vă unei comunități de profesioniști care gândesc la fel,
              împărtășiți experiențe și creșteți împreună.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
