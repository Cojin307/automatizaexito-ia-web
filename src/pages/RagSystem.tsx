import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ArrowLeft, Check, Sparkles, Database, Zap, Shield, Code } from "lucide-react";
import { Link } from "react-router-dom";

const RagSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground mb-4">
              <Brain className="w-5 h-5 text-primary" />
              Sistema RAG - Retrieval-Augmented Generation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Respuestas Inteligentes Basadas en <span className="text-primary">Tus Documentos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Combina la potencia de la búsqueda semántica con inteligencia artificial generativa para obtener respuestas precisas y contextualizadas de tus propios datos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg">
                Solicitar Demo
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Ver Precios
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Características Principales
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnología de vanguardia para transformar la forma en que interactúas con tus datos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Procesamiento Inteligente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analiza y procesa documentos PDF, Word, Excel y más formatos automáticamente
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Búsqueda Semántica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Encuentra información relevante por significado, no solo por palabras clave
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">IA Generativa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Genera respuestas coherentes y precisas basadas en tu contenido específico
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Seguridad Garantizada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tus datos permanecen privados y seguros con encriptación de nivel empresarial
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">API Flexible</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integra fácilmente con tus aplicaciones existentes mediante nuestra API REST
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Actualizaciones en Tiempo Real</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Los cambios en tus documentos se reflejan inmediatamente en el sistema
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Beneficios para tu Negocio
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Ahorro de Tiempo</h3>
                    <p className="text-muted-foreground">
                      Reduce el tiempo de búsqueda de información de horas a segundos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Mejora en Productividad</h3>
                    <p className="text-muted-foreground">
                      Tu equipo puede enfocarse en tareas de mayor valor agregado
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Escalabilidad</h3>
                    <p className="text-muted-foreground">
                      Crece sin límites con una infraestructura que se adapta a tus necesidades
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Precisión Mejorada</h3>
                    <p className="text-muted-foreground">
                      Obtén respuestas más precisas que las búsquedas tradicionales
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Fácil Implementación</h3>
                    <p className="text-muted-foreground">
                      Configuración simple y rápida, sin necesidad de conocimientos técnicos avanzados
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Soporte Multiidioma</h3>
                    <p className="text-muted-foreground">
                      Trabaja con documentos en múltiples idiomas sin configuraciones adicionales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Listo para revolucionar tu gestión de información?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solicita una demostración personalizada y descubre cómo nuestro sistema RAG puede transformar tu negocio
            </p>
            <Button size="lg" className="text-lg">
              Solicitar Demo Gratuita
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-foreground">
                Automatiza<span className="text-primary">Éxito</span>
              </h3>
            </Link>
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

export default RagSystem;
