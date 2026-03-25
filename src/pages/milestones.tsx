import { Card, CardBody } from "@heroui/card";
import { Progress } from "@heroui/progress";

import { title, subtitle } from "@/components/primitives";

const milestones = [
  {
    title: "Konzepterstellung",
    status: "completed",
    date: "April 2025 - Mai 2025",
    description:
      "Anforderungsanalyse und Recherche zu verwandten Arbeiten. Erste Prototypen für die Visualisierung werden vorgestellt.",
    deliverables: [
      "Anforderungsdokument",
      "Technologie-Evaluation",
      "Erste UI-Mockups",
      "Architektur-Entwurf",
    ],
  },
  {
    title: "MVP (Minimal Viable Product)",
    status: "completed",
    date: "Mai 2025 - Juli 2025",
    description:
      "Erste technische Umsetzung des vorgestellten Konzepts. Das Feedback zur Grundidee und zum ersten funktionalen Entwurf ist ausschlaggebend für die weitere Entwicklung.",
    deliverables: [
      "Basis-Webapplikation",
      "Sensor-Datenanbindung",
      "Einfache Visualisierung",
      "API-Grundstruktur",
    ],
  },
  {
    title: "Release 1 - Webseite",
    status: "completed",
    date: "Juli 2025 - Oktober 2025",
    description:
      "Funktionale, öffentliche Webseite als Weiterentwicklung des MVP. Aufgebaut auf einem festgelegten Technologiestack.",
    deliverables: [
      "Vollständige Webseite",
      "Erweiterte Visualisierungen",
      "Historische Datenansicht",
      "Benutzer-Dashboard",
    ],
  },
  {
    title: "Release 2 - Mobile App",
    status: "completed",
    date: "Oktober 2025 - Januar 2026",
    description:
      "Mobile Anwendung mit dem Umfang der Webseite, optimiert für Smartphones mit zusätzlichen Features.",
    deliverables: [
      "iOS & Android App",
      "Push-Benachrichtigungen",
      "Mobile-optimierte Charts",
    ],
  },
  {
    title: "Final Release - Public Displays",
    status: "completed",
    date: "Januar 2026 - April 2026",
    description:
      "Ansicht der Sensordaten auf öffentlichen Displays in Hafenmeisterbüros und an Stränden für umfassende Datenverfügbarkeit.",
    deliverables: [
      "Display-Anwendung",
      "Automatische Updates",
      "Wetter-Warnungen",
      "Mehrsprachige Unterstützung",
    ],
  },
];

const getProgressValue = (status: string) => {
  switch (status) {
    case "completed":
      return 100;
    case "in-progress":
      return 50;
    default:
      return 0;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "primary";
    case "in-progress":
      return "primary";
    default:
      return "default";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Abgeschlossen";
    case "in-progress":
      return "In Bearbeitung";
    default:
      return "Geplant";
  }
};

export default function MilestonesPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <h1 className={title()}>Projekt-Meilensteine</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Unser Weg zu einer umfassenden maritimen Datenplattform
        </h2>
      </div>

      <div className="max-w-4xl px-6 w-full">
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
            <CardBody className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Gesamtfortschritt</h3>
                <span className="text-sm text-default-600">Bis April 2026</span>
              </div>
              <Progress className="mb-2" color="primary" size="md" value={100} />
              <p className="text-sm text-default-600">
                100% abgeschlossen - Alle Meilensteine erreicht
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className={
                milestone.status === "in-progress"
                  ? "border-2 border-primary"
                  : ""
              }
            >
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                      ${
                        milestone.status === "completed"
                          ? "bg-primary"
                          : milestone.status === "in-progress"
                            ? "bg-primary-800"
                            : "bg-default-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-default-600">
                        {milestone.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        milestone.status === "completed"
                          ? "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                          : milestone.status === "in-progress"
                            ? "bg-primary-50 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400"
                            : "bg-default-100 text-default-600"
                      }`}
                    >
                      {getStatusText(milestone.status)}
                    </span>
                  </div>
                </div>

                <p className="text-default-700 mb-4">{milestone.description}</p>

                <div className="mb-4">
                  <Progress
                    color={getStatusColor(milestone.status) as any}
                    size="sm"
                    value={getProgressValue(milestone.status)}
                  />
                </div>

                <div>
                  <p className="font-medium text-sm mb-2">Hauptergebnisse:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {milestone.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span
                          className={`text-xs ${milestone.status === "completed" ? "text-primary" : "text-default-400"}`}
                        >
                          {milestone.status === "completed" ? "✓" : "○"}
                        </span>
                        <span className="text-sm text-default-600">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-default-50 dark:bg-default-100/50">
            <CardBody className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Projektlaufzeit</h3>
              <div className="flex justify-center items-center gap-8">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    April 2025
                  </p>
                  <p className="text-sm text-default-600">Projektstart</p>
                </div>
                <div className="text-4xl">→</div>
                <div>
                  <p className="text-2xl font-bold text-primary">April 2026</p>
                  <p className="text-sm text-default-600">Projektabschluss</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
