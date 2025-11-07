import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Sparkles, ArrowRight, Code, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              Innovación y Automatización
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Automatiza<span className="text-primary">Éxito</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desarrollo de soluciones tecnológicas y automatizaciones con Inteligencia Artificial para impulsar tu negocio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg group">
                Comienza Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Conoce Más
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground">
              Transformamos tu negocio con tecnología de vanguardia y soluciones personalizadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Bot className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Automatización con IA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos inteligencia artificial para automatizar procesos y optimizar operaciones de tu empresa
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Code className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Desarrollo Web</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creamos aplicaciones web modernas, escalables y orientadas a resultados para tu negocio
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Optimización de Procesos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analizamos y mejoramos tus flujos de trabajo para maximizar eficiencia y productividad
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Machine Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollamos modelos de aprendizaje automático para predicciones y análisis avanzados
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Integración de Sistemas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conectamos tus herramientas y plataformas existentes para un ecosistema tecnológico unificado
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Consultoría Tecnológica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Asesoramiento experto para tu transformación digital y adopción de nuevas tecnologías
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SaaS Products Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nuestros Productos SaaS
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluciones listas para implementar que transformarán tu negocio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* RAG System */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">Sistema RAG</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Plataforma de Retrieval-Augmented Generation que combina búsqueda inteligente con IA generativa para respuestas precisas basadas en tus documentos
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Procesamiento de documentos en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Respuestas contextualizadas con IA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Integración con múltiples fuentes de datos</span>
                    </li>
                  </ul>
                  <Link to="/sistema-rag" className="block">
                    <Button className="w-full group-hover:scale-105 transition-transform">
                      Conocer Más
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Real Estate Mobile App */}
            <Card className="border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-2xl overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-accent to-primary" />
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">App Inmobiliaria</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Aplicación móvil completa para gestión inmobiliaria con catálogo de propiedades, tours virtuales y sistema de contacto directo
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Catálogo interactivo de propiedades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Búsqueda avanzada con filtros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Panel de administración integrado</span>
                    </li>
                  </ul>
                  <Link to="/app-inmobiliaria" className="block">
                    <Button className="w-full group-hover:scale-105 transition-transform">
                      Conocer Más
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Listo para automatizar tu éxito?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Déjanos ayudarte a transformar tu negocio con soluciones tecnológicas de vanguardia
            </p>
            <Button size="lg" className="text-lg group">
              Solicita una Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Automatiza<span className="text-primary">Éxito</span>
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
