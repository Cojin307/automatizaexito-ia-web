import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Database, Brain, Search, Zap, Shield, Code, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";

const RagSystem = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container relative mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 glass-card hover-glow">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-6">
            <Brain className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">Inteligencia Artificial Avanzada</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Sistema RAG Inteligente
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Revoluciona la forma en que tu empresa accede y utiliza su información con tecnología de IA de última generación
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
            <Zap className="w-5 h-5 text-accent" />
            <Shield className="w-5 h-5 text-secondary-glow" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl">
              Solicitar Demo
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow">
              Ver Precios
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Database, title: "Gestión de Documentos", desc: "Procesa y organiza automáticamente todo tipo de documentos empresariales con IA avanzada", color: "primary" },
            { icon: Brain, title: "IA Contextual", desc: "Comprende el contexto empresarial y proporciona respuestas ultra-precisas basadas en tus datos", color: "accent" },
            { icon: Search, title: "Búsqueda Avanzada", desc: "Encuentra información relevante al instante con búsqueda semántica de última generación", color: "primary" }
          ].map((feature, i) => (
            <Card key={i} className="glass-card hover-glow border-primary/20 group">
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`}></div>
              <CardHeader className="relative">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${feature.color} to-${feature.color}-glow w-fit mb-4 shadow-lg shadow-${feature.color}/20`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Zap, title: "Procesamiento Rápido", desc: "Respuestas en milisegundos con arquitectura optimizada" },
            { icon: Shield, title: "Seguridad Enterprise", desc: "Encriptación de grado militar para tus datos" },
            { icon: Code, title: "API Flexible", desc: "Integración sencilla con tu stack tecnológico" },
            { icon: Sparkles, title: "Actualizaciones Real-Time", desc: "Sincronización instantánea de cambios" }
          ].map((feature, i) => (
            <Card key={i} className="glass-card hover-glow border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Beneficios Empresariales
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reduce tiempo de búsqueda en un 95%",
              "Aumenta productividad del equipo",
              "Escala sin límites con tu negocio",
              "Precisión superior a búsquedas tradicionales",
              "Implementación rápida en días",
              "Soporte multiidioma integrado"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-primary to-accent">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card hover-glow border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">revolucionar</span> tu gestión de información?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicita una demostración personalizada y descubre el poder de la IA aplicada a tus datos
          </p>
          <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl">
            Solicitar Demo Gratuita
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RagSystem;
