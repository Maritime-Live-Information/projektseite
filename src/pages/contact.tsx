import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { MailIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <>
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            className="text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Kontakt
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-center text-xl text-default-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Haben Sie Fragen zum MARLIN-Projekt? Kontaktieren Sie uns!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-xl">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h2 className="text-2xl font-bold">Nachricht senden</h2>
                </CardHeader>
                <CardBody className="p-6">
                  <form className="space-y-6">
                    <Input
                      label="Name"
                      placeholder="Ihr Name"
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="E-Mail"
                      placeholder="ihre.email@beispiel.de"
                      type="email"
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="Betreff"
                      placeholder="Betreff Ihrer Nachricht"
                      variant="bordered"
                      isRequired
                    />
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nachricht *</label>
                      <textarea
                        className="w-full min-h-[120px] px-3 py-2 text-sm rounded-xl border-2 border-default-200 dark:border-gray-700 bg-transparent focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Ihre Nachricht..."
                        required
                      />
                    </div>
                    <Button 
                      color="primary" 
                      className="w-full"
                      size="lg"
                      startContent={<MailIcon size={20} />}
                    >
                      Nachricht senden
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <Card className="shadow-xl">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h2 className="text-2xl font-bold">Projektinformationen</h2>
                </CardHeader>
                <CardBody className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Projektentwicklung</h3>
                    <p className="text-default-600">Dieses Projekt wird im Rahmen des Masterstudiengangs</p>
                    <p className="text-default-600">Angewandte Informatik an der Hochschule Flensburg</p>
                    <p className="text-default-600">in Zusammenarbeit mit GEOMAR entwickelt.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Gemeinsam entwickelt von</h3>
                    <div className="flex gap-2 flex-wrap">
                      <Chip color="primary" variant="flat">Hochschule Flensburg</Chip>
                      <Chip color="secondary" variant="flat">GEOMAR</Chip>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Projektlaufzeit</h3>
                    <p className="text-default-600">April 2025 - April 2026</p>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-xl">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h2 className="text-2xl font-bold">Schnellkontakt</h2>
                </CardHeader>
                <CardBody className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <MailIcon className="text-primary-600 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">E-Mail</p>
                      <a href="mailto:marlin@marlin-live.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                        marlin@marlin-live.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-warning-100 dark:bg-warning-900/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-default-600">
                        Hochschule Flensburg<br />
                        Kanzleistraße 91-93<br />
                        24943 Flensburg
                      </p>
                    </div>
                  </div>

                </CardBody>
              </Card>

              <Card className="shadow-xl">
                <CardHeader className="pb-0 pt-6 px-6">
                  <h2 className="text-2xl font-bold">Links</h2>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="flex gap-4">
                    <Button
                      as="a"
                      href="https://github.com/Maritime-Live-Information"
                      target="_blank"
                      variant="flat"
                      color="default"
                      startContent={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      }
                    >
                      GitHub
                    </Button>
                    <Button
                      as="a"
                      href="https://www.marlin-live.com"
                      target="_blank"
                      variant="flat"
                      color="primary"
                    >
                      Live-Plattform
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}