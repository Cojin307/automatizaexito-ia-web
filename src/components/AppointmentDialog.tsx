import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentDialogProps {
  children: React.ReactNode;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

const AppointmentDialog = ({ children }: AppointmentDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    time: ""
  });

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Correo inválido",
        description: "Por favor ingresa un correo válido",
        variant: "destructive"
      });
      return;
    }

    console.log("Cita agendada:", formData);
    setIsSubmitted(true);
    toast({
      title: "¡Cita agendada!",
      description: `Te esperamos el ${format(formData.date, "PPP", { locale: es })} a las ${formData.time}`
    });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", date: undefined, time: "" });
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] glass-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agenda tu Consulta
            </span>
          </DialogTitle>
          <DialogDescription>
            Selecciona una fecha y hora para tu consulta gratuita
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="p-4 rounded-full bg-green-500/20 mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h4 className="text-xl font-bold mb-2">¡Cita Confirmada!</h4>
            <p className="text-muted-foreground mb-2">
              {formData.name}, tu cita ha sido agendada para:
            </p>
            <p className="font-semibold text-primary mb-4">
              {formData.date && format(formData.date, "PPPP", { locale: es })} a las {formData.time}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Te enviaremos un recordatorio a {formData.email}
            </p>
            <Button onClick={resetForm}>Cerrar</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+52 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Fecha de la cita</Label>
                <div className="border rounded-lg p-3">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => handleInputChange("date", date)}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const day = date.getDay();
                      return date < today || day === 0 || day === 6;
                    }}
                    className="pointer-events-auto mx-auto"
                    locale={es}
                  />
                </div>
                {formData.date && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {format(formData.date, "PPPP", { locale: es })}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Hora de la cita</Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => handleInputChange("time", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una hora">
                      {formData.time && (
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {formData.time}
                        </span>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 tech-gradient">
                Confirmar Cita
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
