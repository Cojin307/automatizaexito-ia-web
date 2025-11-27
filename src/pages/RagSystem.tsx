import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Database, Brain, Search, Zap, Shield, Code, Sparkles, Check, Lock, Server, FileText, TrendingUp, Users, Workflow } from "lucide-react";
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

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-6">
            <Brain className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">IA Empresarial 100% Privada</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary-glow bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              AutomatizaExitoRAG
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            IA Empresarial con Datos 100% Bajo tu Control
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Una plataforma de Inteligencia Artificial diseñada para que las empresas puedan crear su propio asistente inteligente, entrenado exclusivamente con sus documentos, procesos y bases de conocimiento. 
            <span className="text-primary font-medium"> A diferencia de la IA pública</span>, AutomatizaExitoRAG funciona en un entorno completamente privado y seguro.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="w-6 h-6 text-primary animate-glow-pulse" />
            <Lock className="w-6 h-6 text-accent" />
            <Server className="w-6 h-6 text-secondary-glow" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl">
              Solicitar Demo
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow">
              Contactar Ventas
            </Button>
          </div>
        </div>

        {/* What Does It Do Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ¿Qué hace AutomatizaExitoRAG?
              </span>
            </h2>
          </div>
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            AutomatizaExitoRAG convierte todos los documentos de tu empresa —PDFs, manuales, contratos, políticas internas, bases de datos, correos, normativas— en un sistema de consulta inteligente capaz de responder preguntas en lenguaje natural.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Search, text: "Encontrar información interna en segundos" },
              { icon: FileText, text: "Automatizar análisis y resúmenes" },
              { icon: Database, text: "Consultar políticas, procesos o reglamentos sin perder tiempo" },
              { icon: Shield, text: "Reducir errores humanos" },
              { icon: TrendingUp, text: "Digitalizar el conocimiento empresarial" },
              { icon: Brain, text: "ChatGPT privado entrenado únicamente con tu información" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-background/30 border border-primary/10">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cómo funciona AutomatizaExitoRAG
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistema RAG (Retrieval-Augmented Generation) para máxima precisión
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Search,
                title: "Recuperación de información",
                subtitle: "(Retrieval)",
                desc: "AutomatizaExitoRAG localiza automáticamente los documentos más relevantes de tu base de conocimiento cada vez que alguien hace una pregunta.",
                color: "primary"
              },
              {
                step: "02",
                icon: Brain,
                title: "Generación con contexto",
                subtitle: "(Generation)",
                desc: "Un modelo de lenguaje procesa esos documentos y genera una respuesta clara utilizando solo la información recuperada.",
                color: "accent"
              },
              {
                step: "03",
                icon: Shield,
                title: "Validación y filtros",
                subtitle: "(Security)",
                desc: "Si la información no existe en tus documentos, AutomatizaExitoRAG lo indica y evita generar contenido inventado.",
                color: "secondary-glow"
              }
            ].map((item, i) => (
              <Card key={i} className="glass-card hover-glow border-primary/20 group relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none p-4">
                  {item.step}
                </div>
                <CardHeader className="relative">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-${item.color} to-${item.color}-glow w-fit mb-4 shadow-lg shadow-${item.color}/20`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="text-sm font-medium text-primary">{item.subtitle}</p>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-foreground font-medium">
              Todo esto ocurre en <span className="text-primary">segundos</span>, en un entorno totalmente <span className="text-accent">controlado por tu empresa</span>.
            </p>
          </div>
        </div>

        {/* Main Benefits Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Beneficios Principales
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Check,
                title: "Respuestas precisas basadas en tus propios documentos",
                items: ["El sistema no usa internet ni fuentes externas", "Solo responde con la información que tú cargas"]
              },
              {
                icon: Shield,
                title: "Reducción drástica de errores y 'alucinaciones'",
                items: ["Si algo no está en tus archivos, AutomatizaExitoRAG simplemente no lo responde"]
              },
              {
                icon: Workflow,
                title: "Flujo visual y flexible",
                items: ["Pipelines personalizables", "Conectores y reglas de negocio", "Interfaz gráfica intuitiva"]
              },
              {
                icon: Code,
                title: "Integración con herramientas empresariales",
                items: ["Drive, SharePoint, bases SQL", "APIs y sistemas internos", "Múltiples conectores disponibles"]
              },
              {
                icon: TrendingUp,
                title: "Adaptable a cualquier industria",
                items: ["Finanzas, legal, construcción", "Salud, educación, contabilidad", "Bienes raíces y más"]
              }
            ].map((benefit, i) => (
              <Card key={i} className="glass-card border-primary/10 group hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-foreground">{benefit.title}</h3>
                      <ul className="space-y-2">
                        {benefit.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 glass-card mb-4">
              <Shield className="w-5 h-5 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">Seguridad de Nivel Profesional</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Seguridad Empresarial
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              La seguridad es uno de los pilares de AutomatizaExitoRAG
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                number: "01",
                title: "Datos 100% privados",
                desc: "Tu información jamás se envía a modelos externos ni a servidores de terceros"
              },
              {
                icon: Server,
                number: "02",
                title: "Instalación local o nube privada",
                desc: "Úsalo en tu propio servidor, AWS, Google Cloud o contenedor aislado"
              },
              {
                icon: Users,
                number: "03",
                title: "Control de accesos y roles",
                desc: "Define qué usuarios pueden ver qué documentos y administrar la plataforma"
              },
              {
                icon: Shield,
                number: "04",
                title: "Cifrado completo",
                desc: "Protección de datos en tránsito y en reposo frente a accesos no autorizados"
              },
              {
                icon: FileText,
                number: "05",
                title: "Auditoría y registro",
                desc: "Cada consulta queda registrada para garantizar trazabilidad interna"
              },
              {
                icon: Brain,
                number: "06",
                title: "Modo estricto anti-alucinaciones",
                desc: "El modelo solo puede responder con contenido de documentos indexados"
              },
              {
                icon: Check,
                number: "07",
                title: "Cumplimiento normativo",
                desc: "Compatible con LFPDPPP y alineado a buenas prácticas ISO 27001"
              }
            ].map((item, i) => (
              <Card key={i} className="glass-card hover-glow border-primary/20 group relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[80px] font-bold text-primary/5 leading-none p-4">
                  {item.number}
                </div>
                <CardContent className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="glass-card hover-glow border-primary/20 p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              El Resultado
            </span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Con AutomatizaExitoRAG, tu empresa obtiene un asistente inteligente que:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: "Responde rápido" },
              { icon: Shield, text: "Es seguro" },
              { icon: Lock, text: "Entrenado solo con tu información" },
              { icon: TrendingUp, text: "Reduce costos operativos" },
              { icon: Sparkles, text: "Aumenta la productividad" },
              { icon: Database, text: "Escala conforme crece tu documentación" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card hover-glow border-primary/20 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La manera más <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">segura, eficiente y moderna</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            de implementar IA empresarial en México
          </p>
          <p className="text-2xl font-semibold text-foreground mb-8">
            ¿Listo para revolucionar tu gestión de información?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:opacity-90 shadow-lg hover:shadow-xl">
              Solicitar Demo Gratuita
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow">
              Contactar a Ventas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagSystem;
