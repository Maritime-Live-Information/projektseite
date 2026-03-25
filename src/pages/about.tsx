import { title, subtitle } from "@/components/primitives";
import HochschuleLogo from "@/assets/Logo_der_Hochschule_Flensburg.png";
import GeomarLogo from "@/assets/geomar_logo.svg";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <h1 className={title()}>Über das Projekt</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Smartes Hafenmonitoring durch IoT-Sensorik
        </h2>
      </div>

      <div className="max-w-4xl px-6">
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-semibold mb-4">
            Wie läuft die smarte Hafenanalyse?
          </h3>
          <p className="text-default-700 mb-6">
            In unserem gemeinsamen Masterprojekt arbeiten die Hochschule Flensburg
            und GEOMAR zusammen an einer innovativen Lösung für Hafenmonitoring.
            GEOMAR entwickelt und betreibt die Sensorboxen, welche die Messwerte per
            LoRaWAN übermitteln. Die Sensorboxen sind dabei teilweise autark und
            werden mit Solarzellen betrieben. Das Studententeam der Hochschule
            Flensburg entwickelt gemeinsam mit GEOMAR die Aufbereitung und
            Visualisierung der erfassten Daten.
          </p>

          <h3 className="text-xl font-semibold mb-4">Unsere Messwerte</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                🌊 Wasserdaten
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Wassertemperatur</li>
                <li>• Wasserstand</li>
                <li>• Wellenhöhe</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                💨 Winddaten
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Windrichtung</li>
                <li>• Windgeschwindigkeit</li>
                <li>• Windrichtung Böen</li>
                <li>• Windgeschwindigkeit Böen</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                🌤️ Luftdaten
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Luftdruck</li>
                <li>• Luftfeuchtigkeit</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Projektfortschritt</h3>
          <p className="text-default-700 mb-4">
            Dieses gemeinsame Masterprojekt wird im Rahmen des Masterstudiengangs
            &quot;Angewandte Informatik&quot; von einem Team aus fünf Studierenden
            in Zusammenarbeit mit GEOMAR durchgeführt. Gemeinsam entwickeln wir die
            Aufbereitung und Visualisierung der Messwerte. Das Projekt läuft bis
            April 2026.
          </p>

          <div className="bg-default-100 rounded-lg p-6">
            <h4 className="font-semibold mb-6 text-center">Gemeinsam entwickelt von</h4>
            <div className="flex flex-wrap gap-12 items-center justify-center">
              <div className="text-center">
                <div className="bg-white dark:bg-gray-200 rounded-lg p-3 w-fit mx-auto mb-3">
                  <img
                    src={HochschuleLogo}
                    alt="Hochschule Flensburg"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <p className="font-semibold">Hochschule Flensburg</p>
                <p className="text-sm text-default-600">Masterstudiengang Angewandte Informatik</p>
              </div>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-200 rounded-lg p-3 w-fit mx-auto mb-3">
                  <img
                    src={GeomarLogo}
                    alt="GEOMAR"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <p className="font-semibold">GEOMAR</p>
                <p className="text-sm text-default-600">Helmholtz-Zentrum für Ozeanforschung Kiel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
