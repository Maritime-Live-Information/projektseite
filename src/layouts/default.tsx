import {Link} from "@heroui/link";
import {Outlet, Link as RouterLink} from "react-router-dom";

import {Navbar} from "@/components/navbar";
import HochschuleLogo from "@/assets/Logo_der_Hochschule_Flensburg.png";
import GeomarLogo from "@/assets/geomar_logo.svg";

export default function DefaultLayout() {
    return (
        <div className="relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
            <Navbar/>
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                <Outlet/>
            </main>
            <footer className="w-full bg-gray-100 dark:bg-gray-800 mt-12">
                <div className="container mx-auto max-w-7xl px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-lg mb-3">MARLIN</h4>
                            <p className="text-sm text-default-600">
                                Maritime Live Information - Ein gemeinsames Masterprojekt der
                                Hochschule Flensburg und GEOMAR
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-3">Links</h4>
                            <div className="flex flex-col gap-2">
                                <Link
                                    isExternal
                                    className="text-sm text-default-600 hover:text-primary"
                                    href="https://www.marlin-live.com"
                                >
                                    Live-Plattform
                                </Link>
                                <Link
                                    isExternal
                                    className="text-sm text-default-600 hover:text-primary"
                                    href="https://hs-flensburg.de"
                                >
                                    Hochschule Flensburg
                                </Link>
                                <Link
                                    isExternal
                                    className="text-sm text-default-600 hover:text-primary"
                                    href="https://www.geomar.de"
                                >
                                    GEOMAR
                                </Link>
                                <Link
                                    isExternal
                                    className="text-sm text-default-600 hover:text-primary"
                                    href="https://hs-flensburg.de/impressum"
                                >
                                    Impressum (Hochschule)
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-3">Kontakt</h4>
                            <p className="text-sm text-default-600">
                                Masterstudiengang Angewandte Informatik
                                <br/>
                                Hochschule Flensburg
                            </p>
                            <RouterLink
                                to="/contact"
                                className="inline-block mt-3 text-sm text-primary hover:text-primary-600 transition-colors"
                            >
                                Kontaktformular →
                            </RouterLink>
                        </div>
                    </div>
                    <div className="border-t border-default-200 dark:border-default-100 mt-8 pt-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-sm text-default-600">
                                © 2026 MARLIN Project. Alle Rechte vorbehalten.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="bg-white dark:bg-gray-200 rounded p-2">
                                    <img
                                        src={HochschuleLogo}
                                        alt="Hochschule Flensburg"
                                        className="h-6 w-auto object-contain"
                                    />
                                </div>
                                <div className="bg-white dark:bg-gray-200 rounded p-2">
                                    <img
                                        src={GeomarLogo}
                                        alt="GEOMAR"
                                        className="h-6 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
