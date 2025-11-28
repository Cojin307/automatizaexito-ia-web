import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Database, Brain, Search, Zap, Shield, Code, Sparkles, Check, Lock, Server, FileText, TrendingUp, Users, Workflow, Image, Video, Play, X, CheckCircle2, Phone, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const RagSystem = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 glass-card hover-glow">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        {/* Hero Section - Mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-6">
            <Shield className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">100% Privado • 100% Seguro • 100% Bajo tu Control</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Tu propio <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">ChatGPT privado</span><br />
            para empresas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-3">
            Seguro, rápido y 100% bajo tu control
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            <span className="font-semibold text-foreground">AutomatizaExitoRAG</span> — La plataforma de IA que convierte todos tus documentos empresariales en un asistente inteligente
          </p>
          
          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl text-base">
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Demo Gratuita
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow text-base">
              <Phone className="mr-2 w-5 h-5" />
              Contactar a Ventas
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow text-base">
              <MessageSquare className="mr-2 w-5 h-5" />
              Solicitar Cotización
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Implementación en menos de 7 días</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Soporte directo en México</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Sin compromisos a largo plazo</span>
            </div>
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mira el Sistema en Acción
              </span>
            </h2>
            <p className="text-muted-foreground">Descubre cómo funciona en menos de 2 minutos</p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 group hover:border-primary/40 transition-all">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
                <p className="text-muted-foreground">Video próximamente</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Does It Do - Simplificado */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ¿Qué hace nuestra plataforma?
              </span>
            </h2>
          </div>
          <p className="text-lg text-foreground mb-4 leading-relaxed">
            Convierte <span className="font-semibold">PDFs, contratos, manuales, políticas, bases de datos y correos</span> en un sistema inteligente de consulta en lenguaje natural.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              { icon: Search, text: "Encuentra información en segundos" },
              { icon: FileText, text: "Automatiza análisis y resúmenes" },
              { icon: Shield, text: "Reduce errores humanos" },
              { icon: TrendingUp, text: "Digitaliza conocimiento empresarial" },
              { icon: Zap, text: "Respuestas instantáneas 24/7" },
              { icon: Lock, text: "Información siempre protegida" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/30 border border-primary/10">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="glass-card border-primary/20 p-6 bg-primary/5">
            <p className="text-center text-foreground text-lg">
              <span className="font-bold text-primary">Es como tener tu propio ChatGPT</span> entrenado únicamente con la información de tu empresa
            </p>
          </div>
        </div>

        {/* Product Screenshots Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Interfaz Intuitiva y Profesional
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Diseñada para que cualquier persona en tu empresa pueda usarla
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Dashboard Principal", desc: "Métricas y estadísticas en tiempo real" },
              { title: "Gestión de Documentos", desc: "Sube y organiza archivos fácilmente" },
              { title: "Chat Inteligente", desc: "Pregunta en lenguaje natural" },
              { title: "Configuración Avanzada", desc: "Personaliza todo según tus necesidades" }
            ].map((item, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group hover:border-primary/40 transition-all">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                    <Image className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works - Simplificado */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cómo Funciona (Sistema RAG)
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tecnología avanzada, uso sencillo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Búsqueda Inteligente",
                desc: "El sistema localiza los documentos más relevantes de tu base de conocimiento automáticamente",
                color: "primary"
              },
              {
                step: "02",
                icon: Brain,
                title: "Análisis Contextual",
                desc: "Procesa la información y genera respuestas claras usando solo tus documentos",
                color: "accent"
              },
              {
                step: "03",
                icon: Shield,
                title: "Validación de Seguridad",
                desc: "Si no está en tus archivos, no lo inventa. Cero alucinaciones garantizado",
                color: "secondary-glow"
              }
            ].map((item, i) => (
              <Card key={i} className="glass-card hover-glow border-primary/20 group relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[100px] font-bold text-primary/5 leading-none p-4">
                  {item.step}
                </div>
                <CardHeader className="relative">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-${item.color} to-${item.color}-glow w-fit mb-4 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 glass-card border-primary/20 p-6">
            <p className="text-lg text-foreground font-medium">
              <Zap className="inline w-5 h-5 text-primary mr-2" />
              Todo ocurre en <span className="text-primary font-bold">menos de 3 segundos</span>
            </p>
          </div>
        </div>

        {/* Security - Compactado */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-4">
              <Shield className="w-5 h-5 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">Seguridad de Grado Empresarial</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                7 Capas de Seguridad
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Lock, title: "Datos 100% privados", desc: "Nunca salen de tu infraestructura" },
              { icon: Server, title: "Instalación flexible", desc: "Local, AWS o nube privada" },
              { icon: Users, title: "Control de accesos", desc: "Roles y permisos granulares" },
              { icon: Shield, title: "Cifrado completo", desc: "En tránsito y en reposo" },
              { icon: FileText, title: "Auditoría total", desc: "Registro de cada consulta" },
              { icon: Brain, title: "Anti-alucinación", desc: "Solo responde lo documentado" },
              { icon: Check, title: "Cumplimiento", desc: "LFPDPPP e ISO 27001" }
            ].map((item, i) => (
              <Card key={i} className="glass-card border-primary/10 hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases Gallery */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Casos de Uso Reales
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Empresas de todas las industrias ya lo están usando
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Sector Legal", desc: "Búsqueda instantánea de jurisprudencia y contratos" },
              { title: "Sector Salud", desc: "Consulta de protocolos médicos y expedientes" },
              { title: "Sector Financiero", desc: "Análisis de normativas y compliance automático" },
              { title: "Construcción", desc: "Acceso rápido a especificaciones técnicas" },
              { title: "Educación", desc: "Gestión de contenido académico centralizado" },
              { title: "Recursos Humanos", desc: "Políticas y procedimientos siempre disponibles" }
            ].map((item, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group hover:border-primary/40 transition-all">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-3">
                    <Image className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparación ChatGPT vs Nuestra Solución */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ¿Por qué no usar ChatGPT directamente?
              </span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left p-4 font-bold text-foreground">Característica</th>
                  <th className="text-center p-4 font-bold text-foreground">ChatGPT Público</th>
                  <th className="text-center p-4 font-bold text-primary">AutomatizaExitoRAG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Privacidad total de datos", chatgpt: false, ours: true },
                  { feature: "Entrenado con tus documentos", chatgpt: false, ours: true },
                  { feature: "Control de accesos por usuario", chatgpt: false, ours: true },
                  { feature: "Almacenamiento local/nube privada", chatgpt: false, ours: true },
                  { feature: "Anti-alucinación garantizado", chatgpt: false, ours: true },
                  { feature: "Cumplimiento normativo (LFPDPPP)", chatgpt: false, ours: true },
                  { feature: "Integración con sistemas internos", chatgpt: false, ours: true },
                  { feature: "Auditoría y trazabilidad", chatgpt: false, ours: true },
                  { feature: "Soporte empresarial en México", chatgpt: false, ours: true }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <td className="p-4 text-foreground">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.chatgpt ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.ours ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Results - Compactado */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resultados Garantizados
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: "Respuestas en menos de 3 segundos" },
              { icon: Shield, text: "100% seguro y privado" },
              { icon: TrendingUp, text: "Reduce costos hasta 60%" },
              { icon: Sparkles, text: "Aumenta productividad 3x" },
              { icon: Lock, text: "Control total de tu información" },
              { icon: Database, text: "Escala sin límites" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-foreground text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Planes e Inversión
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluciones adaptadas a cada tamaño de empresa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "Desde $15,000 MXN/mes",
                features: [
                  "Hasta 1,000 documentos",
                  "5 usuarios incluidos",
                  "Soporte por email",
                  "Almacenamiento 50GB",
                  "Instalación incluida"
                ]
              },
              {
                name: "Business",
                price: "Desde $35,000 MXN/mes",
                features: [
                  "Hasta 10,000 documentos",
                  "20 usuarios incluidos",
                  "Soporte prioritario",
                  "Almacenamiento 500GB",
                  "Integraciones personalizadas",
                  "Capacitación incluida"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Cotización personalizada",
                features: [
                  "Documentos ilimitados",
                  "Usuarios ilimitados",
                  "Soporte 24/7 dedicado",
                  "Almacenamiento personalizado",
                  "On-premise disponible",
                  "SLA garantizado",
                  "Gerente de cuenta dedicado"
                ]
              }
            ].map((plan, i) => (
              <Card key={i} className={`glass-card border-primary/20 ${plan.popular ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-bold">
                    Más Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-3xl font-bold text-primary mt-2">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'tech-gradient' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    {plan.name === 'Enterprise' ? 'Contactar Ventas' : 'Solicitar Demo'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center glass-card border-primary/20 p-6">
            <p className="text-foreground font-medium mb-2">
              <span className="text-primary font-bold">Implementación inicial:</span> Desde $25,000 MXN
            </p>
            <p className="text-sm text-muted-foreground">
              Incluye: Configuración, migración de documentos, capacitación y soporte inicial
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="glass-card hover-glow border-primary/20 p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">revolucionar</span> tu empresa?
          </h2>
          <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
            La forma más segura y eficiente de implementar IA empresarial en México
          </p>
          <p className="text-2xl font-bold text-foreground mb-8">
            Implementación garantizada en menos de 7 días
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl text-base">
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Demo Gratuita
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow text-base">
              <MessageSquare className="mr-2 w-5 h-5" />
              Solicitar Cotización
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Sin permanencia forzosa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Prueba 30 días garantizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Soporte en español</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagSystem;
