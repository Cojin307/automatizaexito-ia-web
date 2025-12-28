import { LineChart, ArrowLeft, CheckCircle, Target, TrendingUp, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";
import AppointmentDialog from "@/components/AppointmentDialog";

const ProcessOptimization = () => {
  const benefits = [
    { icon: TrendingUp, title: "Mayor Eficiencia", description: "Optimiza recursos y reduce tiempos de ejecución" },
    { icon: DollarSign, title: "Reducción de Costos", description: "Elimina gastos innecesarios y desperdicios" },
    { icon: Target, title: "Mejores Resultados", description: "Alcanza tus objetivos de manera consistente" },
    { icon: CheckCircle, title: "Calidad Garantizada", description: "Procesos estandarizados y medibles" },
  ];

  const services = [
    "Análisis y mapeo de procesos actuales",
    "Identificación de cuellos de botella",
    "Rediseño de flujos de trabajo",
    "Implementación de metodologías ágiles",
    "Automatización de procesos manuales",
    "Capacitación y gestión del cambio",
  ];

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
              <LineChart className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent">
                  Optimización de Procesos
                </span>
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">Maximiza la eficiencia de tu empresa</p>
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
            <span className="text-sm font-medium text-primary">Mejora Continua</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Analizamos cada aspecto de tus operaciones para identificar oportunidades de mejora. 
            Nuestro enfoque combina metodologías probadas con tecnología de punta para transformar 
            procesos ineficientes en flujos de trabajo optimizados que impulsan el crecimiento 
            y la rentabilidad de tu empresa.
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

        {/* CTA */}
        <section className="glass-card hover-glow border-primary/20 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">optimizar tus procesos</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una sesión de diagnóstico gratuita y descubre cómo podemos ayudarte.
          </p>
          <AppointmentDialog>
            <Button size="lg" className="tech-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-xl group">
              Agendar Diagnóstico
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </AppointmentDialog>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default ProcessOptimization;
