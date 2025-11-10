import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Smartphone, Sparkles, Zap, Shield, Bot, Code, Database, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="container relative mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-6">
          <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
          <span className="text-sm font-medium text-primary">Tecnología de Última Generación</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Soluciones Tecnológicas
          </span>
          <br />
          <span className="text-foreground">Innovadoras</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Descubre nuestras herramientas de vanguardia diseñadas para transformar tu negocio con IA y tecnología moderna
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Zap className="w-5 h-5 text-primary" />
          <Shield className="w-5 h-5 text-accent" />
          <Sparkles className="w-5 h-5 text-secondary-glow" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="tech-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-xl group">
            Comienza Ahora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="glass-card hover-glow">
            Conoce Más
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container relative mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestros Servicios
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transformamos tu negocio con tecnología de vanguardia
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Bot, title: "Automatización con IA", desc: "Implementamos inteligencia artificial avanzada para automatizar y optimizar procesos", color: "primary" },
            { icon: Code, title: "Desarrollo Web", desc: "Aplicaciones web modernas y escalables con las últimas tecnologías", color: "accent" },
            { icon: Zap, title: "Optimización de Procesos", desc: "Mejoramos flujos de trabajo para maximizar eficiencia empresarial", color: "primary" },
            { icon: Brain, title: "Machine Learning", desc: "Modelos de aprendizaje automático para predicciones y análisis avanzados", color: "accent" },
            { icon: Database, title: "Integración de Sistemas", desc: "Conectamos tus herramientas en un ecosistema unificado", color: "primary" },
            { icon: Sparkles, title: "Consultoría Tecnológica", desc: "Asesoramiento experto en transformación digital", color: "accent" }
          ].map((service, i) => (
            <Card key={i} className="glass-card hover-glow border-primary/20 group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <CardContent className="p-6 relative">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${service.color} to-${service.color}-glow w-fit mb-4 shadow-lg shadow-${service.color}/20`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SaaS Products Section */}
      <section className="container relative mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestros Productos SaaS
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Soluciones empresariales potenciadas por IA que impulsan el crecimiento de tu negocio
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* RAG System Card */}
          <Card className="glass-card hover-glow border-primary/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-lg shadow-primary/20">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Sistema RAG Inteligente</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 text-xs rounded-full glass-card text-primary border border-primary/20">
                      IA Avanzada
                    </span>
                  </div>
                </div>
              </div>
              <CardDescription>
                Potencia tu negocio con Inteligencia Artificial de última generación
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-sm text-muted-foreground mb-6">
                Sistema de Recuperación y Generación Aumentada que revoluciona cómo interactúas con tus datos empresariales
              </p>
              <ul className="space-y-3 mb-6">
                {["Procesamiento de documentos en tiempo real", "Respuestas contextuales ultra-precisas", "Integración segura con múltiples fuentes"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm group/item">
                    <div className="mt-0.5 p-1 rounded glass-card">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sistema-rag">
                <Button className="w-full tech-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                  Conocer Más
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Real Estate App Card */}
          <Card className="glass-card hover-glow border-accent/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-secondary-glow shadow-lg shadow-accent/20">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">App Móvil Inmobiliaria</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 text-xs rounded-full glass-card text-accent border border-accent/20">
                      Todo en Uno
                    </span>
                  </div>
                </div>
              </div>
              <CardDescription>
                Gestiona tu negocio inmobiliario desde cualquier lugar del mundo
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-sm text-muted-foreground mb-6">
                Aplicación empresarial completa para la gestión moderna de propiedades, clientes y operaciones
              </p>
              <ul className="space-y-3 mb-6">
                {["Gestión de propiedades en tiempo real", "Tours virtuales y galerías multimedia", "CRM avanzado para gestión de clientes"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm group/item">
                    <div className="mt-0.5 p-1 rounded glass-card">
                      <Zap className="w-3 h-3 text-accent" />
                    </div>
                    <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/app-inmobiliaria">
                <Button className="w-full bg-gradient-to-r from-accent to-secondary-glow hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-white">
                  Conocer Más
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container relative mx-auto px-4 py-20 text-center">
        <div className="glass-card hover-glow max-w-3xl mx-auto p-12 border-primary/20">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">automatizar tu éxito</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Déjanos ayudarte a transformar tu negocio con soluciones tecnológicas de vanguardia
          </p>
          <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl group">
            Solicita una Consulta Gratuita
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t border-border/50 py-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AutomatizaÉxito</span>
            </h3>
            <p className="text-muted-foreground">
              Soluciones tecnológicas que impulsan tu negocio hacia el futuro
            </p>
            <p className="text-sm text-muted-foreground pt-4">
              © 2025 AutomatizaÉxito. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
