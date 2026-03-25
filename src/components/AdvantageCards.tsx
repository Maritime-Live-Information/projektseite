import { motion } from "framer-motion";
import { Card } from "@heroui/card";

type AdvantagesProps = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  delay: number;
};


const advantages: AdvantagesProps[] = [
  {
    icon: "📡",
    title: "Echtzeitdaten 24/7",
    description: "Kontinuierliche Überwachung von Wasser- und Wetterbedingungen mit modernster Sensortechnik.",
    gradient: "from-blue-500 to-cyan-400",
    delay: 0
  },
  {
    icon: "⚓",
    title: "Hafensicherheit",
    description: "Frühwarnsystem bei kritischen Bedingungen schützt Infrastruktur und ermöglicht optimale Planung.",
    gradient: "from-purple-500 to-pink-400",
    delay: 0.1
  },
  {
    icon: "🌊",
    title: "Open Data Platform",
    description: "Transparente API und öffentlicher Zugang fördern Innovation im maritimen Bereich.",
    gradient: "from-orange-500 to-red-400",
    delay: 0.2
  },
  {
    icon: "🗺️",
    title: "Live Sensorkarte",
    description: "Interaktive Visualisierung aller Sensordaten mit Echtzeitwerten auf einer Karte.",
    gradient: "from-cyan-500 to-blue-400",
    delay: 0.3
  },
  {
    icon: "📱",
    title: "Smart Notifications",
    description: "Push-Benachrichtigungen bei Unwetter und kritischen Bedingungen direkt aufs Smartphone.",
    gradient: "from-indigo-500 to-blue-400",
    delay: 0.4
  }
];

export default function AdvantageCards() {
  return (
    <section className="w-full py-20 px-8 lg:px-16 xl:px-24 relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-secondary-100/30 dark:from-primary-950/20 dark:to-secondary-950/20" />
      </div>
      
      <div className="w-full relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-primary-900 bg-clip-text text-transparent">
            Warum MARLIN?
          </h2>
          <p className="text-lg text-default-600 max-w-3xl mx-auto">
            Erleben Sie die Zukunft der maritimen Datenverarbeitung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8">
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: advantage.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} rounded-2xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
              
              <Card 
                className="relative h-full backdrop-blur-md bg-white/80 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
              >
                <div className="p-8">
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-4xl filter drop-shadow-md">
                      {advantage.icon}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-default-800 dark:text-white">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-default-600 dark:text-gray-300 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  <motion.div 
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${advantage.gradient} opacity-10 rounded-tl-full`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}