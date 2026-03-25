import { motion } from "framer-motion";
import HochschuleLogo from "@/assets/Logo_der_Hochschule_Flensburg.png";
import GeomarLogo from "@/assets/geomar_logo.svg";

export default function PartnerLogos() {
  return (
    <section className="py-12 px-6 bg-default-50 dark:bg-default-100/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Gemeinsam entwickelt von</h2>
          <p className="text-default-600">
            Ein gemeinschaftliches Projekt für maritime Innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-6"
          >
            <div className="h-24 flex items-center mb-4">
              <div className="bg-white dark:bg-gray-200 rounded-lg p-3">
                <img
                  src={HochschuleLogo}
                  alt="Hochschule Flensburg"
                  className="h-18 w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Hochschule Flensburg</h3>
            <p className="text-sm text-default-600 text-center">
              Masterstudiengang Angewandte Informatik
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center p-6"
          >
            <div className="h-24 flex items-center mb-4">
              <div className="bg-white dark:bg-gray-200 rounded-lg p-4">
                <img
                  src={GeomarLogo}
                  alt="GEOMAR"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">GEOMAR</h3>
            <p className="text-sm text-default-600 text-center">
              Helmholtz-Zentrum für Ozeanforschung Kiel
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}