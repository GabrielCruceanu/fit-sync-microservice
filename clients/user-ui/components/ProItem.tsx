import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@nextui-org/shared-icons";

export default function ProItem({
  link,
  photoSrc,
  name,
  type,
  proType,
  reviews,
  certificate,
  city,
}: {
  link: string;
  certificate: boolean;
  name: string;
  type: string;
  proType: string;
  city: string | null;
  photoSrc?: string;
  reviews?: any[];
}) {
  let rate = undefined;
  let rateMedia = undefined;

  let reviewCounter = 0;
  if (reviews) {
    reviews.map((review) => {
      if (review?.stars) {
        ++reviewCounter;
        rate = review?.stars;
        rateMedia = rate / reviewCounter;
      }
    });
  }
  console.log("type", type);
  console.log("name", name);
  return (
    <Link href={link}>
      {type}
      <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
        <div className="flex items-center">
          <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-gray-500 md:h-[100px] md:w-[100px]">
            {photoSrc ? (
              <Image
                src={photoSrc}
                alt={name + " " + proType}
                className="h-full w-full object-cover"
                width="100"
                height="100"
              />
            ) : (
              <p className="text-xl text-gray-100">{name[0]}</p>
            )}
          </div>
          <div>
            <h4 className="mb-1 text-lg font-medium leading-none text-white md:text-xl">
              {name}
            </h4>
            <h6 className="mb-1 text-sm text-gray-300">
              {city ? city : null} / {proType}
            </h6>
            {certificate ? (
              <span className="mr-2 flex max-w-fit items-center rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                CERTIFICAT
              </span>
            ) : (
              <span className="mr-2  flex max-w-fit items-center rounded-md bg-gray-500 px-2 py-1 text-xs font-bold leading-none text-white">
                NECERTIFICAT
              </span>
            )}
          </div>
        </div>
        <div>
          <ArrowRightIcon className="h-[24px] text-teal-500" />
        </div>
      </div>
    </Link>
  );
}
