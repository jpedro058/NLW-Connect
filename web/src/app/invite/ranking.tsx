import gold from "../../assets/medal-gold.svg";
import silver from "../../assets/medal-silver.svg";
import cooper from "../../assets/medal-cooper.svg";
import Image from "next/image";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none font-heading font-semibold text-xl">
        Ranking de Indicações{" "}
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center p-6  gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º - </span>
            João
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1200
          </span>

          <Image
            src={gold}
            alt="Medalha de Ouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center p-6  gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">João</span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1200
          </span>

          <Image
            src={silver}
            alt="Medalha de Ouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center p-6  gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">João</span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1200
          </span>

          <Image
            src={cooper}
            alt="Medalha de Ouro"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
}
