import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import {title, subtitle} from "@/components/primitives";
import AnimatedLogo from "@/components/AnimatedLogo";
import MapFeature from "@/components/MapFeature";
import AdvantageCards from "@/components/AdvantageCards";
import PartnerLogos from "@/components/PartnerLogos";
import PushNotificationSection from "@/components/PushNotificationSection";

const videoOptions = [
    {key: "full", label: "Vollversion", src: "/projectVideoMP4.mp4"},
    {key: "short", label: "Kurzversion", src: "/shotVideo.mp4"},
];

export default function HomePage() {
    const [activeVideo, setActiveVideo] = useState("full");
    const currentVideo = videoOptions.find((v) => v.key === activeVideo)!;

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

            <div className="relative left-[50%] right-[50%] -mx-[50vw] w-[100vw]">
                <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-100 via-blue-50/60 to-gray-100 dark:from-gray-800 dark:via-blue-950/40 dark:to-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 via-transparent to-cyan-200/20 dark:from-primary-900/20 dark:to-cyan-900/20" />

                    <div className="relative max-w-5xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-12"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className={title({size: "sm"})}>Das Projekt in&nbsp;</h2>
                            <h2 className={title({size: "sm", color: "blue"})}>Aktion</h2>
                            <p className="text-default-600 mt-4 max-w-xl mx-auto text-lg">
                                Erlebe MARLIN im Einsatz – von der Sensorik bis zur Live-Plattform.
                            </p>

                            <div className="flex justify-center gap-2 mt-6">
                                {videoOptions.map((option) => (
                                    <button
                                        key={option.key}
                                        onClick={() => setActiveVideo(option.key)}
                                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                            activeVideo === option.key
                                                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                                                : "bg-default-100 dark:bg-gray-700 text-default-600 dark:text-gray-300 hover:bg-default-200 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 dark:ring-white/10"
                            initial={{opacity: 0, scale: 0.92}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true, margin: "-80px"}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                        >
                            <AnimatePresence mode="wait">
                                <motion.video
                                    key={currentVideo.key}
                                    className="w-full aspect-video bg-black"
                                    controls
                                    playsInline
                                    preload="metadata"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.3}}
                                >
                                    <source src={currentVideo.src} type="video/mp4"/>
                                    Dein Browser unterstützt das Video-Format nicht.
                                </motion.video>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
            </div>

            <div className="relative left-[50%] right-[50%] -mx-[50vw] w-[100vw]">
                <PartnerLogos/>
            </div>
        </>
    );
}
