import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    birthDate: undefined as Date | undefined,
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({ title: "Por favor ingresa tu nombre", variant: "destructive" });
      return;
    }
    if (!formData.birthDate) {
      toast({ title: "Por favor selecciona tu fecha de nacimiento", variant: "destructive" });
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Por favor ingresa un correo válido", variant: "destructive" });
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast({ title: "Por favor ingresa un número de celular válido", variant: "destructive" });
      return;
    }

    console.log("Datos del formulario:", formData);
    setIsSubmitted(true);
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto."
    });
  };

  const resetForm = () => {
    setFormData({ name: "", birthDate: undefined, email: "", phone: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300",
          "bg-gradient-to-r from-primary to-accent hover:scale-110",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4">
            <h3 className="text-white font-bold text-lg">¡Hola! 👋</h3>
            <p className="text-white/80 text-sm">¿Tienes alguna pregunta? Escríbenos</p>
          </div>

          {/* Content */}
          <div className="p-4 max-h-[70vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="p-4 rounded-full bg-green-500/20 mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">¡Gracias {formData.name}!</h4>
                <p className="text-muted-foreground mb-4">
                  Hemos recibido tu mensaje. Te contactaremos pronto.
                </p>
                <Button variant="outline" onClick={resetForm}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="chat-name" className="text-sm">Nombre</Label>
                  <Input
                    id="chat-name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-9"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm">Fecha de nacimiento</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-9",
                          !formData.birthDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.birthDate ? (
                          format(formData.birthDate, "PPP", { locale: es })
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.birthDate}
                        onSelect={(date) => handleInputChange("birthDate", date)}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="chat-email" className="text-sm">Correo electrónico</Label>
                  <Input
                    id="chat-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-9"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="chat-phone" className="text-sm">Número de celular</Label>
                  <Input
                    id="chat-phone"
                    type="tel"
                    placeholder="+52 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-9"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="chat-message" className="text-sm">Tu mensaje (opcional)</Label>
                  <Textarea
                    id="chat-message"
                    placeholder="Escribe tu pregunta, duda o comentario..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full tech-gradient mt-4">
                  Enviar mensaje
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
