import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const partners = [
  // "Gate.io","Kommunitas","Klaytn","OrbitX",
  // "IBC Group","AntChain","Supra Oracles","Magic Square",
  // "KGEN","Neurochain","Agora","NODO",
  // "TBV","Kaizen Finance","Cube Network","Block Tides",
  // "Growfitter","Plumdale","Levitate Labs","CrewsphereICPHub",
  // "Solus Partners","Everstake","daGama","TON Launchpad",
  // "Gate.io","Kommunitas","Klaytn","OrbitX","IBC Group"
];

const HexagonTile = ({ name, index }: { name?: string; index: number }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center text-center"
      style={{
        width: "100%",
        height: "100%",
        clipPath:
          "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
        background: "linear-gradient(145deg,#f7f7f7,#e2e2e2)",
        border: "1px solid rgba(0,0,0,0.15)",
        boxShadow: `
          inset 4px 4px 8px rgba(255,255,255,0.7),
          inset -4px -4px 8px rgba(0,0,0,0.15),
          6px 6px 20px rgba(0,0,0,0.25),
          -6px -6px 20px rgba(0,0,0,0.1)
        `
      }}
      initial={{ opacity: 0.9, scale: 1 }}
      animate={{
        opacity: [0.9, 1, 0.9],
        scale: [1, 1.07, 1],
        boxShadow: [
          `inset 4px 4px 8px rgba(255,255,255,0.7),
           inset -4px -4px 8px rgba(0,0,0,0.15),
           6px 6px 20px rgba(0,0,0,0.25),
           -6px -6px 20px rgba(0,0,0,0.1)`,
          `inset 4px 4px 8px rgba(255,255,255,0.7),
           inset -4px -4px 8px rgba(0,0,0,0.15),
           0 0 30px rgba(73,194,191,0.6),
           6px 6px 25px rgba(0,0,0,0.3)`,
          `inset 4px 4px 8px rgba(255,255,255,0.7),
           inset -4px -4px 8px rgba(0,0,0,0.15),
           6px 6px 20px rgba(0,0,0,0.25),
           -6px -6px 20px rgba(0,0,0,0.1)`
        ]
      }}
      transition={{
        duration: 1.5,
        delay: index * 0.08,
        repeat: Infinity,
        repeatDelay: 2
      }}
    >
      {name && (
        <span
          className="text-xs md:text-sm font-semibold px-3"
          style={{ color: "#4a5a5a" }}
        >
          {name}
        </span>
      )}
    </motion.div>
  );
};

const HeroSection = () => {

  const generateHexGrid = () => {

    const hexagons:any[] = [];
    const rows = 8;
    const cols = 10;

    let partnerIndex = 0;
    let hexagonCount = 0;

    for (let row = 0; row < rows; row++) {

      const colsInRow = row % 2 === 0 ? cols : cols - 1;

      for (let col = 0; col < colsInRow; col++) {

        let name;

        if (hexagonCount % 2 === 0 && partnerIndex < partners.length) {
          name = partners[partnerIndex++];
        }

        hexagons.push({
          id: `${row}-${col}`,
          row,
          col,
          name
        });

        hexagonCount++;
      }
    }

    return hexagons;
  };

  const hexagons = generateHexGrid();
  const hexSize = 220;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#ececec]">

      {/* HEX GRID */}

      <div className="absolute inset-0">

        {hexagons.map((hex, index) => {

          const isEvenRow = hex.row % 2 === 0;

          const x =
            hex.col * hexSize * 0.87 +
            (isEvenRow ? 0 : hexSize * 0.43);

          const y = hex.row * hexSize * 0.75;

          const gridWidth = 10 * hexSize * 0.87;
          const gridHeight = 8 * hexSize * 0.75;

          const centerOffsetX =
            `calc(50% - ${gridWidth / 2}px + ${x}px)`;

          const centerOffsetY =
            `calc(50% - ${gridHeight / 2}px + ${y}px)`;

          return (
            <div
              key={hex.id}
              className="absolute"
              style={{
                left: centerOffsetX,
                top: centerOffsetY,
                width: `${hexSize}px`,
                height: `${hexSize * 1.15}px`
              }}
            >
              <HexagonTile name={hex.name} index={index} />
            </div>
          );
        })}

      </div>

      {/* CENTER LIGHT FADE */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)"
        }}
      />

      {/* HERO TEXT */}

      <div className="relative z-10 text-center px-6 max-w-5xl mt-10">

        <motion.img
          src="/logo_full.png"
          alt="Nova Growth Capital"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-28 md:h-25 w-auto object-contain mx-auto mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-[#49c2bf]"
        >
          Your Gateway to Success
        </motion.h1>

      </div>

      {/* SCROLL ICON */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.6, duration: 0.5 },
          y: { repeat: Infinity, duration: 2 }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-12 h-12 rounded-full border border-[#49c2bf] flex items-center justify-center bg-white">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;