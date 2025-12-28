import { Bot, ArrowLeft, CheckCircle, Zap, TrendingUp, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";
import AppointmentDialog from "@/components/AppointmentDialog";

const AIAutomation = () => {
  const benefits = [
    { icon: Clock, title: "Ahorro de Tiempo", description: "Reduce hasta un 80% el tiempo en tareas repetitivas" },
    { icon: TrendingUp, title: "Mayor Productividad", description: "Incrementa la eficiencia operativa de tu equipo" },
    { icon: Zap, title: "Respuestas Instantáneas", description: "Atención al cliente 24/7 con chatbots inteligentes" },
    { icon: CheckCircle, title: "Menos Errores", description: "Elimina errores humanos en procesos críticos" },
  ];

  const useCases = [
    "Automatización de respuestas a clientes con chatbots IA",
    "Procesamiento automático de documentos y facturas",
    "Clasificación y priorización de correos electrónicos",
    "Generación automática de reportes y análisis",
    "Automatización de flujos de trabajo empresariales",
    "Asistentes virtuales para soporte interno",
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
              <Bot className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent">
                  Automatización con IA
                </span>
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">Transforma tu negocio con inteligencia artificial avanzada</p>
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
            <span className="text-sm font-medium text-primary">Tecnología de Vanguardia</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            La automatización con inteligencia artificial permite a las empresas optimizar operaciones, reducir costos 
            y liberar a su equipo para enfocarse en tareas de mayor valor. Implementamos soluciones personalizadas 
            que se adaptan a las necesidades específicas de tu negocio, desde chatbots inteligentes hasta sistemas 
            completos de procesamiento automático de datos.
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

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Casos de uso
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 p-5 glass-card rounded-xl border border-primary/20 hover-glow group">
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card hover-glow border-primary/20 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">automatizar tu negocio</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo la IA puede transformar tus operaciones.
          </p>
          <AppointmentDialog>
            <Button size="lg" className="tech-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-xl group">
              Solicitar Consulta Gratuita
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </AppointmentDialog>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default AIAutomation;
