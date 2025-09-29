import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Calendar,
  Clock,
  Globe
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    const emailBody = `Hola Leonardo,

Mi nombre es ${name || '[Nombre no proporcionado]'}${email ? ` (${email})` : ''}.

${subject ? `Asunto: ${subject}` : ''}

${message || '[Mensaje no proporcionado]'}

Saludos,
${name || '[Nombre no proporcionado]'}`;

    const mailtoLink = `mailto:verdesotoleonardo@gmail.com?subject=${encodeURIComponent(subject || 'Consulta desde Portfolio')}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "verdesotoleonardo@gmail.com",
      href: "mailto:verdesotoleonardo@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+593 97 962 6374",
      href: "tel:+593979626374",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Guayaquil, Ecuador",
      href: "#",
      color: "text-accent"
    },
    {
      icon: Globe,
      label: "Timezone",
      value: "ECT (GMT-5)",
      href: "#",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-secondary"
    }
  ];

  const availability = [
    "Proyectos Freelance",
    "Consultoría Técnica", 
    "Code Review",
    "Arquitectura de Software"
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="retro-scan absolute inset-0 opacity-50"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-28 h-28 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-secondary to-accent rotate-45 animate-spin [animation-duration:20s]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-accent animate-bounce [animation-delay:2s]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 chrome-text">
            Conectemos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante? Hablemos y creemos algo increíble juntos
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full chrome-glow mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-surface p-8">
            <div className="flex items-center mb-6">
              <Send className="w-6 h-6 text-primary mr-3 chrome-glow" />
              <h3 className="text-2xl chrome-text">Envíame un mensaje</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nombre</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className="bg-input-background border-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="bg-input-background border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Asunto</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="¿En qué puedo ayudarte?"
                  className="bg-input-background border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Mensaje</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  className="bg-input-background border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full metal-button text-black hover:text-black"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Info & Availability */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-surface p-6">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-secondary mr-3 chrome-glow" />
                <h3 className="text-2xl chrome-text">Información de Contacto</h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <info.icon className={`w-5 h-5 ${info.color} mr-4 y2k-glow group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <a 
                        href={info.href} 
                        className={`${info.color} hover:underline transition-colors`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="bg-card/80 backdrop-blur-sm border-border y2k-border p-6">
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-accent mr-3 y2k-glow" />
                <h3 className="text-2xl text-accent neon-text">Disponibilidad</h3>
              </div>
              
              <div className="flex items-center mb-4">
                <Clock className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary">Estado: Disponible para proyectos</span>
              </div>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-foreground">Servicios Disponibles:</h4>
                <div className="flex flex-wrap gap-2">
                  {availability.map((service, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Tiempo de respuesta típico: 24-48 horas
              </p>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/80 backdrop-blur-sm border-border y2k-border p-6">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-primary mr-3 y2k-glow" />
                <h3 className="text-2xl text-primary neon-text">Sígueme</h3>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`flex-1 border-border ${social.color} transition-all duration-300 hover:scale-105`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
}