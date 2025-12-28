import { Smartphone, ArrowLeft, CheckCircle, Zap, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";
import AppointmentDialog from "@/components/AppointmentDialog";

const MobileApps = () => {
  const benefits = [
    { icon: Smartphone, title: "Multiplataforma", description: "Apps para iOS y Android con un solo desarrollo" },
    { icon: Zap, title: "Alto Rendimiento", description: "Experiencia nativa fluida y rápida" },
    { icon: Shield, title: "Seguridad", description: "Protección de datos y transacciones" },
    { icon: Users, title: "Engagement", description: "Notificaciones push y experiencia personalizada" },
  ];

  const services = [
    "Aplicaciones móviles nativas iOS y Android",
    "Apps híbridas con React Native",
    "Aplicaciones web progresivas (PWA)",
    "Integración con APIs y backends",
    "Publicación en App Store y Google Play",
    "Mantenimiento y actualizaciones continuas",
  ];

  const technologies = ["React Native", "iOS Swift", "Android Kotlin", "Flutter", "Capacitor", "Firebase"];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
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
            <div className="p-4 rounded-2xl tech-gradient shadow-lg glow-effect">
              <Smartphone className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent">
                  Desarrollo de Apps Móviles
                </span>
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">Aplicaciones móviles de alto impacto</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container relative mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">iOS & Android</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desarrollamos aplicaciones móviles que conectan tu negocio directamente con tus clientes. 
            Ya sea que necesites una app para ventas, servicios internos o engagement con usuarios, 
            creamos soluciones móviles que destacan en las tiendas de aplicaciones y generan resultados reales.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Beneficios para tu empresa
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover-glow border-primary/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative">
                  <div className="p-3 rounded-xl tech-gradient w-fit mb-4 shadow-lg">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestros servicios
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-5 glass-card rounded-xl border border-primary/20 hover-glow group">
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologías que usamos
            </span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, index) => (
              <span key={index} className="px-6 py-3 glass-card border border-primary/20 text-foreground rounded-full font-medium hover-glow">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card hover-glow border-primary/20 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes una <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">idea para una app</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Convierte tu visión en una aplicación móvil exitosa.
          </p>
          <AppointmentDialog>
            <Button size="lg" className="tech-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-xl group">
              Iniciar Proyecto
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </AppointmentDialog>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default MobileApps;
