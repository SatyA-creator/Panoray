import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const partners = [
  "Gate.io",
  "Kommunitas",
  "Klaytn",
  "OrbitX",

  "IBC Group",
  "AntChain",
  "Supra Oracles",
  "Magic Square",

  "KGEN",
  "Neurochain",
  "Agora",
  "NODO",

  "TBV",
  "Kaizen Finance",
  "Cube Network",
  "Block Tides",

  "Growfitter",
  "Plumdale",
  "Levitate Labs",
  "Crewsphere ICP Hub",

  "Solus Partners",
  "Everstake",
  "daGama",
  "TON Launchpad"
];

const HexagonTile = ({ name }: { name?: string }) => {
  const isPartner = !!name;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center group transition-all duration-500"
      style={{
        clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",

        background: isPartner
          ? "linear-gradient(145deg,#ffffff,#f2f2f2)"
          : "linear-gradient(145deg,#f1f1f1,#e6e6e6)",

        border: isPartner
          ? "1.5px solid rgba(73,194,191,0.7)"
          : "1px solid rgba(73,194,191,0.35)",

        animation: "hexFloat 6s ease-in-out infinite",

        boxShadow: isPartner
          ? `
            inset 6px 6px 12px rgba(255,255,255,0.9),
            inset -8px -8px 16px rgba(73,194,191,0.25),
            0 0 18px rgba(73,194,191,0.45),
            0 0 36px rgba(73,194,191,0.35)
          `
          : `
            inset 6px 6px 12px rgba(255,255,255,0.9),
            inset -8px -8px 16px rgba(73,194,191,0.12),
            0 0 6px rgba(73,194,191,0.15)
          `
      }}
    >

      {/* Neon outline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
          border: isPartner
            ? "1.5px solid rgba(73,194,191,0.9)"
            : "1px solid rgba(73,194,191,0.55)"
        }}
      />

      {/* Hover shimmer */}
      <div
        className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition"
        style={{
          clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)"
        }}
      >
        <div
          style={{
            width: "60%",
            height: "100%",
            background:
              "linear-gradient(120deg,transparent,rgba(73,194,191,0.5),transparent)",
            animation: "lightSweep 3s linear infinite"
          }}
        />
      </div>

      {/* Partner name */}
      {name && (
        <span
          className="text-base font-bold text-gray-800 text-center px-4 tracking-wide"
          style={{
            textShadow: "0 0 8px rgba(73,194,191,0.35)"
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
};

const HeroSection = () => {

  const generateHexGrid = () => {
    const hexagons = [];
    const rows = 8;
    const cols = 7;

    let partnerIndex = 0;

    for (let row = 0; row < rows; row++) {
      const colsInRow = row % 2 === 0 ? cols : cols - 1;

      for (let col = 0; col < colsInRow; col++) {

        const name =
          partnerIndex < partners.length
            ? partners[partnerIndex++]
            : undefined;

        hexagons.push({
          id: `${row}-${col}`,
          row,
          col,
          name
        });
      }
    }

    return hexagons;
  };

  const hexagons = generateHexGrid();
  const hexSize = 200;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d8d8d8]">

      <div className="absolute inset-0 overflow-hidden opacity-60">

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="relative" style={{ width: "120vw", height: "120vh" }}>

            {hexagons.map((hex) => {

              const isEvenRow = hex.row % 2 === 0;

              const x =
                hex.col * hexSize * 0.866 +
                (isEvenRow ? 0 : hexSize * 0.433);

              const y = hex.row * hexSize * 0.75;

              return (
                <div
                  key={hex.id}
                  className="absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${hexSize}px`,
                    height: `${hexSize * 1.15}px`
                  }}
                >
                  <HexagonTile name={hex.name} />
                </div>
              );
            })}

          </div>

        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(232,232,232,0.7) 0%, rgba(73,194,191,0.1) 65%, transparent 100%)"
          }}
        />

      </div>

     <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mt-24">

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-[#49c2bf]"
  >
    Your Gateway to Success
  </motion.h1>

</div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.6, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-12 h-12 rounded-full border-2 border-[#49c2bf] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;