import { Lightbulb, ArrowLeft, CheckCircle, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const TechConsulting = () => {
  const benefits = [
    { icon: Target, title: "Estrategia Clara", description: "Roadmap tecnológico alineado a tus objetivos" },
    { icon: TrendingUp, title: "ROI Optimizado", description: "Inversiones tecnológicas con retorno medible" },
    { icon: Users, title: "Expertise", description: "Acceso a conocimiento especializado sin contratar" },
    { icon: CheckCircle, title: "Reducción de Riesgos", description: "Evita errores costosos en implementaciones" },
  ];

  const services = [
    "Evaluación y auditoría de infraestructura tecnológica",
    "Estrategia de transformación digital",
    "Selección de tecnologías y proveedores",
    "Arquitectura de soluciones empresariales",
    "Gestión de proyectos tecnológicos",
    "Capacitación y transferencia de conocimiento",
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Consultoría Tecnológica</h1>
              <p className="text-muted-foreground mt-1">Asesoramiento experto en transformación digital</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-4">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Te acompañamos en cada paso de tu transformación digital. Nuestros consultores expertos 
            te ayudan a tomar las mejores decisiones tecnológicas, desde la evaluación de tu situación 
            actual hasta la implementación de soluciones que impulsen el crecimiento de tu negocio.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Beneficios para tu empresa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Nuestros servicios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Necesitas orientación tecnológica?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Agenda una sesión de consultoría y descubre las mejores opciones para tu empresa.
          </p>
          <Link to="/#contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Agendar Consultoría
            </Button>
          </Link>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default TechConsulting;
