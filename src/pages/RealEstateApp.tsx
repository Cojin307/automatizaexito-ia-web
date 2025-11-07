import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, ArrowLeft, Check, Sparkles, Smartphone, MapPin, Camera, Users } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateApp = () => {
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
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-foreground mb-4">
              <Smartphone className="w-5 h-5 text-accent" />
              Aplicación Móvil para Inmobiliarias
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Tu Inmobiliaria en el <span className="text-accent">Bolsillo</span> de tus Clientes
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aplicación móvil completa para gestión inmobiliaria con catálogo de propiedades, tours virtuales y sistema de contacto directo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg">
                Ver Demo
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Funcionalidades Destacadas
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas para gestionar tu inmobiliaria desde tu dispositivo móvil
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Catálogo Interactivo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Galería de propiedades con fotos de alta calidad, videos y descripciones detalladas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Búsqueda Geolocalizada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Encuentra propiedades cercanas con mapas interactivos y filtros avanzados
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Camera className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Tours Virtuales</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recorridos 360° y realidad aumentada para visitas virtuales inmersivas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Gestión de Clientes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CRM integrado para seguimiento de leads, citas y comunicación con clientes
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Code className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Panel de Admin</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dashboard web completo para gestionar propiedades, usuarios y estadísticas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Notificaciones Push</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mantén a tus clientes informados sobre nuevas propiedades y actualizaciones
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
                Ventajas Competitivas
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Multiplataforma</h3>
                    <p className="text-muted-foreground">
                      Disponible para iOS y Android con una única base de código
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
                    <h3 className="text-xl font-bold mb-2 text-foreground">Diseño Personalizable</h3>
                    <p className="text-muted-foreground">
                      Adaptamos los colores, logo y diseño a la identidad de tu inmobiliaria
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
                    <h3 className="text-xl font-bold mb-2 text-foreground">Offline First</h3>
                    <p className="text-muted-foreground">
                      Funciona sin conexión y sincroniza automáticamente cuando hay internet
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Integración con Portales</h3>
                    <p className="text-muted-foreground">
                      Publica automáticamente en portales inmobiliarios populares
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
                    <h3 className="text-xl font-bold mb-2 text-foreground">Chat en Tiempo Real</h3>
                    <p className="text-muted-foreground">
                      Comunicación instantánea entre agentes y clientes potenciales
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
                    <h3 className="text-xl font-bold mb-2 text-foreground">Analytics Integrado</h3>
                    <p className="text-muted-foreground">
                      Métricas detalladas sobre visitas, favoritos y conversiones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Casos de Uso
              </h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Para Agencias Inmobiliarias</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gestiona todo tu catálogo de propiedades, asigna clientes a agentes específicos, programa visitas y mantén un seguimiento completo del ciclo de ventas desde una sola plataforma.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Para Agentes Independientes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Presenta tu portfolio de forma profesional, gestiona tus contactos, agenda citas y destaca tus propiedades con tours virtuales y fotos de alta calidad sin necesidad de conocimientos técnicos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Para Desarrolladores</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Muestra tus proyectos inmobiliarios en construcción o preventa con planos interactivos, renders 3D, información de financiamiento y seguimiento de preventa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Listo para digitalizar tu inmobiliaria?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comienza a usar nuestra app y lleva tu negocio inmobiliario al siguiente nivel
            </p>
            <Button size="lg" className="text-lg">
              Solicitar Demo
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

export default RealEstateApp;
