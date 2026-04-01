import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Card } from "@heroui/card";
import pushAnimation from "@/assets/push_animation.json";

export default function PushNotificationSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950/30">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-center lg:-ml-12 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-25 animate-pulse scale-125" />

              <Card className="relative backdrop-blur-md bg-white/80 dark:bg-gray-900/60 p-10 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <Lottie
                  animationData={pushAnimation}
                  loop={true}
                  className="w-80 h-80 lg:w-96 lg:h-96"
                />
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Immer informiert
                </span>
                <br />
                <span className="text-default-800 dark:text-white">
                  mit Push-Benachrichtigungen
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-default-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Erhalten Sie wichtige Warnungen direkt auf Ihr Smartphone.
                Unser intelligentes Benachrichtigungssystem informiert Sie
                sofort bei kritischen Wetterbedingungen, Sturmwarnungen oder
                außergewöhnlichen Wasserständen.
              </motion.p>
            </div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "⚡", text: "Echtzeitwarnungen bei Unwetter" },
                { icon: "🌊", text: "Hochwasseralarme und Wellenhöhe" },
                { icon: "🌡️", text: "Temperatur- und Luftdruckänderungen" },
                { icon: "⚓", text: "Personalisierte Hafenbenachrichtigungen" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <p className="text-default-700 dark:text-gray-300 font-medium">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}