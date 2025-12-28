import { Brain, ArrowLeft, CheckCircle, BarChart3, Search, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const MachineLearning = () => {
  const benefits = [
    { icon: BarChart3, title: "Predicciones Precisas", description: "Anticipa tendencias y comportamientos del mercado" },
    { icon: Search, title: "Insights Profundos", description: "Descubre patrones ocultos en tus datos" },
    { icon: Lightbulb, title: "Decisiones Informadas", description: "Toma decisiones basadas en datos reales" },
    { icon: CheckCircle, title: "Ventaja Competitiva", description: "Adelántate a tu competencia con IA" },
  ];

  const useCases = [
    "Predicción de demanda y ventas",
    "Detección de fraudes y anomalías",
    "Segmentación avanzada de clientes",
    "Sistemas de recomendación personalizados",
    "Análisis de sentimiento en redes sociales",
    "Predicción de abandono de clientes (churn)",
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
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Machine Learning</h1>
              <p className="text-muted-foreground mt-1">Predicciones y análisis avanzados con IA</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-4">¿Cómo podemos ayudar a tu negocio?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desarrollamos modelos de machine learning personalizados que transforman tus datos en valor real. 
            Desde predicciones de ventas hasta detección de patrones complejos, nuestras soluciones de IA 
            te ayudan a tomar decisiones más inteligentes y anticiparte a las necesidades del mercado.
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

        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Listo para potenciar tus datos?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Descubre cómo el machine learning puede transformar tu negocio.
          </p>
          <Link to="/#contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar Demo
            </Button>
          </Link>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
};

export default MachineLearning;
