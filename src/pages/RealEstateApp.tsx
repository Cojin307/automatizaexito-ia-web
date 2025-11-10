import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Users, Camera, BarChart, MessageSquare, MapPin, Sparkles, Zap, Check, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateApp = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 glass-card mb-6">
            <Home className="w-4 h-4 text-accent animate-glow-pulse" />
            <span className="text-sm font-medium text-accent">Solución Inmobiliaria Completa</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-secondary-glow to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              App Móvil Inmobiliaria
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            La solución integral de última generación para gestionar tu negocio inmobiliario de manera eficiente y profesional
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Sparkles className="w-5 h-5 text-accent animate-glow-pulse" />
            <Zap className="w-5 h-5 text-secondary-glow" />
            <Home className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-accent to-secondary-glow hover:opacity-90 shadow-lg hover:shadow-xl text-white">
              Ver Demo
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-glow">
              Solicitar Información
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Home, title: "Gestión de Propiedades", desc: "Administra tu portafolio completo de propiedades con herramientas intuitivas de última generación", color: "accent" },
            { icon: Users, title: "CRM Integrado", desc: "Gestiona clientes, leads y seguimientos en una sola plataforma centralizada y potente", color: "primary" },
            { icon: Camera, title: "Tours Virtuales", desc: "Crea experiencias inmersivas con tours virtuales 360° y galerías multimedia avanzadas", color: "secondary-glow" }
          ].map((feature, i) => (
            <Card key={i} className="glass-card hover-glow border-accent/20 group">
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`}></div>
              <CardHeader className="relative">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${feature.color} to-accent w-fit mb-4 shadow-lg shadow-${feature.color}/20`}>
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

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: MapPin, title: "Geolocalización Inteligente", desc: "Búsqueda por ubicación con mapas interactivos" },
            { icon: MessageSquare, title: "Chat en Tiempo Real", desc: "Comunicación instantánea con clientes potenciales" },
            { icon: BarChart, title: "Analytics Avanzado", desc: "Métricas detalladas sobre rendimiento y conversiones" },
            { icon: Smartphone, title: "Apps Nativas", desc: "Experiencia óptima en iOS y Android" }
          ].map((feature, i) => (
            <Card key={i} className="glass-card hover-glow border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-secondary-glow">
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
        <div className="glass-card hover-glow border-accent/20 p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-accent to-secondary-glow bg-clip-text text-transparent">
              Ventajas Competitivas
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Multiplataforma iOS y Android",
              "Diseño personalizable a tu marca",
              "Funciona offline con sincronización automática",
              "Integración con portales inmobiliarios",
              "Sistema de notificaciones push",
              "Panel de administración web completo"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-accent to-secondary-glow">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-4 mb-16">
          {[
            { title: "Para Agencias Inmobiliarias", desc: "Gestiona catálogo, asigna agentes, programa visitas y controla todo el ciclo de ventas desde una plataforma unificada" },
            { title: "Para Agentes Independientes", desc: "Portfolio profesional, gestión de contactos y tours virtuales sin necesidad de conocimientos técnicos" },
            { title: "Para Desarrolladores", desc: "Muestra proyectos en construcción con planos 3D, renders y seguimiento de preventas en tiempo real" }
          ].map((useCase, i) => (
            <Card key={i} className="glass-card hover-glow border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card hover-glow border-accent/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-accent to-secondary-glow bg-clip-text text-transparent">digitalizar</span> tu inmobiliaria?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comienza a usar nuestra app y lleva tu negocio inmobiliario al siguiente nivel con tecnología de punta
          </p>
          <Button size="lg" className="bg-gradient-to-r from-accent to-secondary-glow hover:opacity-90 shadow-lg hover:shadow-xl text-white">
            Solicitar Demo
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateApp;
