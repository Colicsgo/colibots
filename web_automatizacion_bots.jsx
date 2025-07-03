import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RocketIcon, BotIcon, BrainIcon, GlobeIcon } from "lucide-react";

const services = [
  {
    icon: <BotIcon className="w-8 h-8 text-primary" />,
    title: "Automatización Web",
    description: "Bots que automatizan tareas repetitivas en sitios web: scraping, formularios, navegación automática."
  },
  {
    icon: <GlobeIcon className="w-8 h-8 text-primary" />,
    title: "Bots para Redes Sociales",
    description: "Publicación automática en Twitter, Instagram y más. Programación de contenido, interacción con usuarios."
  },
  {
    icon: <BrainIcon className="w-8 h-8 text-primary" />,
    title: "IA Conversacional",
    description: "Integración de ChatGPT en Telegram, Discord o sitios web para atención automática 24/7."
  },
  {
    icon: <RocketIcon className="w-8 h-8 text-primary" />,
    title: "Bots Personalizados",
    description: "Desde bots para videojuegos hasta bots que analizan pantallas o automatizan tu PC."
  }
];

export default function AutomationPage() {
  return (
    <div className="p-10 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Servicios de Automatización e Inteligencia Artificial</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Potencia tu productividad o negocio con bots inteligentes diseñados a medida. Desde automatizaciones simples hasta soluciones con IA conversacional.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-xl transition">
            <CardContent className="p-6 space-y-4">
              {service.icon}
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center pt-10">
        <Button size="lg">Solicita tu Bot Personalizado</Button>
      </div>
    </div>
  );
}
