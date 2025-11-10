import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plaqueType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "5527307356XX";
    const message = `*Novo Contato - Vitória Placas*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Tipo de Placa:* ${formData.plaqueType}\n*Mensagem:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });

    setFormData({ name: "", phone: "", plaqueType: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone/WhatsApp</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(27) 99999-9999"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="plaqueType">Tipo de Placa</Label>
        <Select value={formData.plaqueType} onValueChange={(value) => setFormData({ ...formData, plaqueType: value })}>
          <SelectTrigger id="plaqueType">
            <SelectValue placeholder="Selecione o tipo de placa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="homenagem">Placa de Homenagem em Acrílico</SelectItem>
            <SelectItem value="premiacao">Placa de Premiação</SelectItem>
            <SelectItem value="inauguracao">Placa de Inauguração</SelectItem>
            <SelectItem value="tumulo">Placa para Túmulo</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Descreva o que você precisa..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full gap-2">
        <Send className="h-5 w-5" />
        Enviar Mensagem via WhatsApp
      </Button>
    </form>
  );
};

export default ContactForm;
