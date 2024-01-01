"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";

export default function PostNotFound() {
  const router = useRouter();
  return (
    <section className="bg-background h-screen flex justify-center items-center">
      <div className="h-fit max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Această pagină lipsește.
          </p>
          <p className="mb-6 text-lg font-light ">
            Ne pare rău, nu putem găsi pagina respectivă. Veți găsi multe de
            explorat pe pagina principala.
          </p>
          <Link
            className="w-full max-w-xl mx-auto flex cursor-pointer justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
            onClick={() => {
              router.push("/");
            }}
          >
            Acasă
          </Link>
        </div>
      </div>
    </section>
  );
}
