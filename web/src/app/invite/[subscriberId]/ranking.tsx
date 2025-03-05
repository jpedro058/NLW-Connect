import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import cooper from "../../../assets/medal-cooper.svg";
import Image from "next/image";

export function Ranking() {
  const ranking = await fetch(
    `https://localhost:3333/invite/ranking/${subscriberId}`
  ).then((res) => res.json());

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none font-heading font-semibold text-xl">
        Ranking de Indicações{" "}
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rankingPosition = index + 1;
          return (
            <div
              key={rank.id}
              className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center p-6  gap-3 relative"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º - </span>
                {rank.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {rank.invites}
              </span>

              {rankingPosition === 1 && (
                <Image src={gold} alt="gold" width={30} height={30} />
              )}
              {rankingPosition === 2 && (
                <Image src={gold} alt="gold" width={30} height={30} />
              )}
              {rankingPosition === 3 && (
                <Image src={gold} alt="gold" width={30} height={30} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
