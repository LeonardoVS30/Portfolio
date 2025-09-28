import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Terminal, 
  Heart, 
  Coffee, 
  Code2, 
  Github, 
  Linkedin, 
  Mail,
  ArrowUp
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" }
  ];

  const techStack = [
    "C#", ".NET Core", "ASP.NET", "SQL Server", "Azure", "Docker"
  ];

  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      <div className="retro-scan absolute inset-0 opacity-30"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-24 h-24 border border-primary rotate-12 animate-pulse"></div>
        <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full animate-bounce [animation-delay:1s]"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 border-2 border-accent rotate-45 animate-spin [animation-duration:30s]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Terminal className="w-8 h-8 text-primary chrome-glow" />
              <span className="text-2xl chrome-text">Leonardo Verdesoto</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Desarrollador Backend especializado en <span className="text-primary">C# .NET</span>, 
              creando soluciones escalables y robustas para el mundo digital. 
              <span className="text-secondary"> Code with passion</span>.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl chrome-text">Navegación</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl chrome-text">Conecta Conmigo</h3>
            <div className="space-y-4">
              <a 
                href="mailto:dev@tudominio.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                verdesotoleonardo@gmail.com
              </a>
              
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors p-2">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary transition-colors p-2">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent transition-colors p-2">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} Leonardo Verdesoto</span>
            <span>•</span>
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-secondary animate-pulse" />
            <span>y</span>
            <Coffee className="w-4 h-4 text-accent" />
            <span>en Ecuador</span>
          </div>

          {/* Tech Credit */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <Code2 className="w-4 h-4" />
            <span>Powered by React + Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Volver arriba
          </Button>
        </div>

        {/* Easter Egg - Gaming Reference */}
        <div className="text-center mt-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 max-w-md mx-auto">
            <p className="text-xs text-muted-foreground">
              "Code is like a game - every bug is a boss to defeat" 🎮
            </p>
          </Card>
        </div>
      </div>
    </footer>
  );
}