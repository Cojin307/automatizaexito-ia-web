import { Code, ArrowLeft, CheckCircle, Globe, Smartphone, Gauge, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";
import AppointmentDialog from "@/components/AppointmentDialog";

const WebDevelopment = () => {
  const benefits = [
    { icon: Globe, title: "Presencia Global", description: "Alcanza clientes en cualquier parte del mundo" },
    { icon: Smartphone, title: "Diseño Responsivo", description: "Experiencia perfecta en cualquier dispositivo" },
    { icon: Gauge, title: "Alto Rendimiento", description: "Aplicaciones rápidas y optimizadas" },
    { icon: CheckCircle, title: "Escalabilidad", description: "Crece sin límites con arquitectura moderna" },
  ];

  const services = [
    "Sitios web corporativos y landing pages",
    "Aplicaciones web progresivas (PWA)",
    "Plataformas e-commerce personalizadas",
    "Dashboards y paneles administrativos",
    "Integraciones con APIs y servicios externos",
    "Optimización SEO y rendimiento web",
  ];

  const technologies = ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL"];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative glass-card border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-secondary-glow shadow-lg" style={{ boxShadow: '0 0 40px hsl(271 81% 60% / 0.3)' }}>
              <Code className="w-10 h-10 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-accent via-primary to-secondary-glow bg-clip-text text-transparent">
                  Desarrollo Web
                </span>
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">Aplicaciones web modernas y escalables</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container relative mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 glass-card mb-6">
            <Sparkles className="w-4 h-4 text-accent animate-glow-pulse" />
            <span className="text-sm font-medium text-accent">Tecnologías Modernas</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desarrollamos aplicaciones web de alta calidad que impulsan el crecimiento de tu negocio. 
            Utilizamos las tecnologías más modernas para crear soluciones rápidas, seguras y fáciles de mantener. 
            Desde sitios web corporativos hasta plataformas complejas de comercio electrónico, 
            construimos exactamente lo que tu empresa necesita.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Beneficios para tu empresa
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover-glow border-accent/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-secondary-glow w-fit mb-4 shadow-lg">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Nuestros servicios
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-5 glass-card rounded-xl border border-accent/20 hover-glow group">
                <div className="p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Tecnologías que usamos
            </span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, index) => (
              <span key={index} className="px-6 py-3 glass-card border border-accent/20 text-foreground rounded-full font-medium hover-glow">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card hover-glow border-accent/20 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">proyecto en mente</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad con la mejor tecnología.
          </p>
          <AppointmentDialog>
            <Button size="lg" className="bg-gradient-to-r from-accent to-secondary-glow hover:opacity-90 transition-all shadow-lg hover:shadow-xl group text-accent-foreground">
              Solicitar Cotización
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </AppointmentDialog>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default WebDevelopment;
