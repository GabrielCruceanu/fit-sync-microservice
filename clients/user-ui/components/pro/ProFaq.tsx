"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ProFaq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="bg-white dark:bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Întrebări frecvente
        </h2>
        <div className="mx-auto max-w-screen-md">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="How long does it take to ship my order?"
              className="py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-background dark:text-white"
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {defaultContent}
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How long does it take to ship my order?"
              className="py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-background dark:text-white"
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {defaultContent}
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
