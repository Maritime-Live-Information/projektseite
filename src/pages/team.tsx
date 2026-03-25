import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";

const teamMembers = [
  {
    name: "Daniel",
    role: "Projektmanagement",
    description:
      "Koordiniert das Team und überwacht den Projektfortschritt. Verantwortlich für Planung und Organisation.",
    skills: ["Projektmanagement"],
  },
  {
    name: "Fatih",
    role: "Frontend & Mobile App",
    description:
      "Entwickelt die Benutzeroberfläche und mobile Anwendung. Spezialisiert auf React Native und moderne UI/UX.",
    skills: [
      "React Native",
      "TypeScript",
      "Tamagui",
      "UI/UX Design",
      "Frontend Entwicklung",
      "Mobile Entwicklung",
    ],
  },
  {
    name: "Julian",
    role: "Frontend & Kartenvisualisierung",
    description:
      "Entwickelt die Kartenansicht und Frontend-Komponenten. Spezialisiert auf React Native und Visualisierung.",
    skills: [
      "React Native",
      "TypeScript",
      "Tamagui",
      "UI/UX Design",
      "Frontend Development",
      "Kartenvisualisierung",
    ],
  },
  {
    name: "Krister",
    role: "Backend & Datenanalyse",
    description:
      "Entwickelt Backend-Services und analysiert Sensordaten. Expertise in API-Entwicklung und Datenverarbeitung.",
    skills: ["Backend Entwicklung", "Datenanalyse", "API Entwicklung"],
  },
  {
    name: "Tarek",
    role: "Backend & DevOps",
    description:
      "Entwickelt Backend-Systeme und verwaltet die Infrastruktur. Expertise in Cloud-Technologien und CI/CD.",
    skills: [
      "AWS",
      "Kubernetes",
      "CI/CD",
      "Monitoring",
      "Backend Entwicklung",
      "DEVOPS",
      "Infrastruktur",
    ],
  },
];

export default function TeamPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <h1 className={title()}>Unser Team</h1>
        <p className="mt-4 text-lg text-default-600">
          Studenten des Master Angewandte Informatik, die gemeinsam das
          MARLIN-Projekt entwickeln
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-6 w-full">
        {teamMembers.map((member) => (
          <Card key={member.name} className="p-4">
            <CardHeader className="flex flex-col items-start gap-2 pb-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-2">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {member.name[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                {member.role}
              </p>
            </CardHeader>
            <CardBody className="pt-2">
              <p className="text-sm text-default-600 dark:text-default-700 mb-4">
                {member.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Chip key={skill} size="sm" variant="flat" className="bg-primary-100 text-primary-700 dark:bg-primary-400 dark:text-black">
                    {skill}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-12 max-w-4xl px-6 w-full">
        <Card className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
          <CardBody className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Gemeinsam für smarte Hafenlösungen
            </h3>
            <p className="text-default-700">
              Unser interdisziplinäres Team vereint Expertise aus verschiedenen
              Bereichen der Informatik, um innovative Lösungen für die maritime
              Datenerfassung und -visualisierung zu entwickeln. Durch die
              Kombination von Hardware, Software und Datenanalyse schaffen wir
              eine ganzheitliche Plattform für smartes Hafenmanagement.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
