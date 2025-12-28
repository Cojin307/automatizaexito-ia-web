import { Bot, ArrowLeft, CheckCircle, Zap, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Automatización con IA</h1>
              <p className="text-muted-foreground mt-1">Transforma tu negocio con inteligencia artificial avanzada</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="max-w-4xl mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-4">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La automatización con inteligencia artificial permite a las empresas optimizar operaciones, reducir costos 
            y liberar a su equipo para enfocarse en tareas de mayor valor. Implementamos soluciones personalizadas 
            que se adaptan a las necesidades específicas de tu negocio, desde chatbots inteligentes hasta sistemas 
            completos de procesamiento automático de datos.
          </p>
        </section>

        {/* Benefits */}
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

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Casos de uso</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo la IA puede transformar tus operaciones.
          </p>
          <Link to="/#contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar Consulta Gratuita
            </Button>
          </Link>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default AIAutomation;
