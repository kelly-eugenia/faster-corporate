import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface CarouselItem {
  icon: string;
  title: string;
  desc: string;
}

const swipeConfidenceThreshold = 80;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function MobileCarousel({ items }: { items: CarouselItem[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const loop = (n: number) => (n + items.length) % items.length;

  const next = () => {
    setDirection(1);
    setIndex((i) => loop(i + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => loop(i - 1));
  };

  const current = items[index];
  const prevCard = items[loop(index - 1)];
  const nextCard = items[loop(index + 1)];

  /* -------- VARIANTS -------- */

  const centerVariants = {
    enter: (dir: -1 | 1) => ({
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      x: 0,
    },
    exit: (dir: -1 | 1) => ({
      x: dir > 0 ? 40 : -40,
    }),
  };

  const leftVariants = {
    enter: (dir: -1 | 1) => ({
      opacity: 0.4,
      x: dir > 0 ? -40 : -120,
      scale: 0.8,
      filter: "blur(6px)",
    }),
    center: {
      opacity: 0.4,
      x: -80,
      scale: 0.8,
      filter: "blur(3px)",
    },
    exit: (dir: -1 | 1) => ({
      opacity: 0.4,
      x: dir > 0 ? -40 : -120,
      scale: 0.8,
      filter: "blur(6px)",
    }),
  };

  const rightVariants = {
    enter: (dir: -1 | 1) => ({
      opacity: 0.4,
      x: dir > 0 ? 120 : 40,
      scale: 0.8,
      filter: "blur(6px)",
    }),
    center: {
      opacity: 0.4,
      x: 80,
      scale: 0.8,
      filter: "blur(3px)",
    },
    exit: (dir: -1 | 1) => ({
      opacity: 0.4,
      x: dir > 0 ? 120 : 40,
      scale: 0.8,
      filter: "blur(6px)",
    }),
  };

  // --- AUTOPLAY ---
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // clear previous interval
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      setDirection(1); // autoplay always moves forward
      setIndex((i) => loop(i + 1)); // loop around smoothly
    }, 4000); // <-- autoplay interval (4 seconds)

    return () => clearInterval(autoplayRef.current!);
  }, [index]); // restart after each slide animation

  return (
    <div className="relative w-full sm:hidden">
      <div className="relative w-full overflow-hidden">
        <div className="relative flex items-center justify-center h-full min-h-[240px]">
          {/* PREVIOUS (left faded) */}
          <motion.div
            key={`prev-${index}`}
            custom={direction}
            variants={leftVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              delay: direction > 0 ? 0 : 0.1,
              duration: 0.35,
              ease: "easeOut",
            }}
            className="absolute right-1/2 -translate-x-1/2 w-[70%] pointer-events-none"
          >
            <Card item={prevCard} />
          </motion.div>

          {/* CURRENT (center) */}
          <motion.div
            key={`current-${index}`}
            custom={direction}
            variants={centerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ delay: 0.05, duration: 0.35, ease: "easeOut" }}
            className="w-[75%] z-10"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                next();
              } else if (swipe > swipeConfidenceThreshold) {
                prev();
              }
            }}
          >
            <Card item={current} />
          </motion.div>

          {/* NEXT (right faded) */}
          <motion.div
            key={`next-${index}`}
            custom={direction}
            variants={rightVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              delay: direction > 0 ? 0.1 : 0,
              duration: 0.35,
              ease: "easeOut",
            }}
            className="absolute left-1/2 -translate-x-1/2 w-[70%] pointer-events-none"
          >
            <Card item={nextCard} />
          </motion.div>
        </div>

        {/* BUTTONS */}
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-primary px-3 py-1 rounded-full text-bg-primary z-20"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-primary px-3 py-1 rounded-full text-bg-primary z-20"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function Card({ item }: { item: CarouselItem }) {
  return (
    <div className="w-3/4 mx-auto bg-bg-secondary rounded-2xl p-8 text-center shadow-sm">
      <div className="w-1/4 mx-auto mb-4">
        <img src={item.icon} alt={item.title} className="w-full h-auto" />
      </div>
      <h2 className="text-2xl">{item.title}</h2>
      <p className="text-sm mt-2">{item.desc}</p>
    </div>
  );
}
