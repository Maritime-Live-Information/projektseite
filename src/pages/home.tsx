import {motion} from "framer-motion";
import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import {title, subtitle} from "@/components/primitives";
import AnimatedLogo from "@/components/AnimatedLogo";
import MapFeature from "@/components/MapFeature";
import AdvantageCards from "@/components/AdvantageCards";
import PartnerLogos from "@/components/PartnerLogos";
import PushNotificationSection from "@/components/PushNotificationSection";

export default function HomePage() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 min-h-[80vh]">
                <AnimatedLogo/>

                <motion.div
                    className="inline-block max-w-xl text-center justify-center"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 0.6}}
                >
                    <h1 className={title()}>MARLIN&nbsp;</h1>
                    <h1 className={title({color: "blue"})}>
                        Maritime Live Information&nbsp;
                    </h1>
                    <h2 className={subtitle({class: "mt-4"})}>
                        Live-Messungen in Häfen zu Wasser- und Luftbedingungen
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center gap-8 max-w-4xl"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.6, duration: 0.6}}
                >
                    <div className="text-center px-6">
                        <p className="text-lg text-default-700">
                            Ein gemeinsames Masterprojekt der Hochschule Flensburg und GEOMAR zur
                            Echtzeit-Erfassung und Visualisierung von Meeres- und Wetterdaten in
                            verschiedenen Marinas - entwickelt im Rahmen des Masterstudiengangs
                            Angewandte Informatik.
                        </p>
                    </div>

                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 w-full px-4">
                        {[
                            {
                                icon: "🌊",
                                title: "Wasserdaten",
                                desc: "Temperatur, Wasserstand und Wellenhöhe in Echtzeit"
                            },
                            {
                                icon: "💨",
                                title: "Winddaten",
                                desc: "Geschwindigkeit, Richtung und Böen kontinuierlich gemessen"
                            },
                            {icon: "🌡️", title: "Luftdaten", desc: "Druck und Feuchtigkeit für präzise Wetteranalysen"},
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="p-4 rounded-lg bg-default-100 pointer-none:"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.8 + index * 0.1, duration: 0.5}}
                                whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                            >
                                <h3 className="font-semibold text-lg mb-2">{item.icon} {item.title}</h3>
                                <p className="text-sm text-default-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="flex gap-4 mt-8"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 1.1, duration: 0.5}}
                    >
                        <motion.div
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <Button
                                as={Link}
                                href="https://www.marlin-live.com"
                                isExternal
                                color="primary"
                                size="lg"
                                className="font-semibold"
                            >
                                Zur Live-Plattform
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <div className="relative left-[50%] right-[50%] -mx-[50vw] w-[100vw]">
                <AdvantageCards/>
            </div>

            <MapFeature/>

            <div className="relative left-[50%] right-[50%] -mx-[50vw] w-[100vw]">
                <PushNotificationSection/>
            </div>

            <PartnerLogos/>
        </>
    );
}
