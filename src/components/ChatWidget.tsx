import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    birthDate: undefined as Date | undefined,
    email: "",
    phone: ""
  });

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          toast({ title: "Por favor ingresa tu nombre", variant: "destructive" });
          return false;
        }
        break;
      case 2:
        if (!formData.birthDate) {
          toast({ title: "Por favor selecciona tu fecha de nacimiento", variant: "destructive" });
          return false;
        }
        break;
      case 3:
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast({ title: "Por favor ingresa un correo válido", variant: "destructive" });
          return false;
        }
        break;
      case 4:
        if (!formData.phone.trim() || formData.phone.length < 10) {
          toast({ title: "Por favor ingresa un número de celular válido", variant: "destructive" });
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);
    setIsSubmitted(true);
    toast({
      title: "¡Gracias por contactarnos!",
      description: "Nos pondremos en contacto contigo pronto."
    });
  };

  const resetForm = () => {
    setFormData({ name: "", birthDate: undefined, email: "", phone: "" });
    setStep(1);
    setIsSubmitted(false);
  };

  const questions = [
    { label: "¿Cuál es tu nombre?", field: "name", placeholder: "Tu nombre completo" },
    { label: "¿Cuál es tu fecha de nacimiento?", field: "birthDate" },
    { label: "¿Cuál es tu correo electrónico?", field: "email", placeholder: "correo@ejemplo.com" },
    { label: "¿Cuál es tu número de celular?", field: "phone", placeholder: "+52 123 456 7890" }
  ];

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
            <p className="text-white/80 text-sm">Cuéntanos sobre ti</p>
          </div>

          {/* Content */}
          <div className="p-4 min-h-[280px]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <div className="p-4 rounded-full bg-green-500/20 mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">¡Gracias {formData.name}!</h4>
                <p className="text-muted-foreground mb-4">
                  Hemos recibido tu información. Te contactaremos pronto.
                </p>
                <Button variant="outline" onClick={resetForm}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Progress indicator */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 h-1 rounded-full transition-colors",
                        i <= step ? "bg-primary" : "bg-muted"
                      )}
                    />
                  ))}
                </div>

                {/* Question */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">
                    {questions[step - 1].label}
                  </Label>

                  {step === 2 ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
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
                  ) : (
                    <Input
                      type={step === 3 ? "email" : step === 4 ? "tel" : "text"}
                      placeholder={questions[step - 1].placeholder}
                      value={formData[questions[step - 1].field as keyof typeof formData] as string || ""}
                      onChange={(e) => handleInputChange(questions[step - 1].field, e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleNext()}
                      className="h-12"
                    />
                  )}
                </div>

                {/* Navigation */}
                <div className="flex gap-2 pt-4">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="flex-1"
                    >
                      Atrás
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    className="flex-1 tech-gradient"
                  >
                    {step === 4 ? "Enviar" : "Siguiente"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
