import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Server, Database, Cloud, Gamepad2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WindowsXPWindow } from './WindowsXPWindow';
import { SolitaireIcon, MinesweeperIcon } from './XPIcons';

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "API REST completa para e-commerce con microservicios, autenticación JWT, procesamiento de pagos y sistema de inventario en tiempo real.",
      image: "https://images.unsplash.com/photo-1642791401714-a0d4e02d4bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMHNldHVwJTIwbmVvbnxlbnwxfHx8fDE3NTkwMjE0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["C#", "ASP.NET Core", "SQL Server", "Redis", "Azure"],
      category: "Enterprise",
      icon: Server,
      gradient: "from-primary to-secondary",
      features: ["Microservicios", "JWT Auth", "Rate Limiting", "Swagger Docs"]
    },
    {
      title: "Real-Time Gaming Analytics",
      description: "Sistema de análisis en tiempo real para métricas de gaming, con dashboard y alertas automáticas. Procesa +1M eventos/día.",
      image: "https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5MmslMjBjb21wdXRlciUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NTkwMjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["C#", ".NET 8", "SignalR", "PostgreSQL", "Docker"],
      category: "Gaming",
      icon: Gamepad2,
      gradient: "from-secondary to-accent",
      features: ["Real-time", "WebSockets", "Big Data", "Dashboards"]
    },
    {
      title: "Cloud Document Manager",
      description: "Sistema de gestión documental en la nube con versionado, búsqueda inteligente y colaboración en tiempo real.",
      image: "https://images.unsplash.com/photo-1750449821191-68a5facd2be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5MDIxNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["ASP.NET Core", "Azure Blob", "ElasticSearch", "MongoDB"],
      category: "Cloud",
      icon: Cloud,
      gradient: "from-accent to-primary",
      features: ["File Upload", "Search", "Versioning", "Permissions"]
    },
    {
      title: "Banking API Gateway",
      description: "Gateway seguro para servicios bancarios con autenticación multi-factor, encriptación end-to-end y compliance PCI DSS.",
      image: "https://images.unsplash.com/photo-1631624220291-8f191fbdb543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjeWJlcnB1bmslMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzU5MDIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["C#", "ASP.NET Core", "Azure Key Vault", "SQL Server"],
      category: "FinTech",
      icon: Database,
      gradient: "from-primary to-accent",
      features: ["Security", "Encryption", "MFA", "Compliance"]
    }
  ];

  const stats = [
    { label: "Proyectos Completados", value: "10+", icon: Server },
    { label: "APIs Desarrolladas", value: "10+", icon: Database },
    { label: "Uptime Promedio", value: "99.9%", icon: Cloud },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="retro-scan absolute inset-0 opacity-40"></div>
      
      {/* Background Elements with XP Gaming Windows */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-16 transform rotate-6 animate-float [animation-delay:1s]">
          <WindowsXPWindow title="Solitaire" icon={<SolitaireIcon />} className="w-64">
            <div className="p-3 h-40 bg-green-600">
              <div className="bg-green-700 p-2 rounded mb-2">
                <div className="flex justify-between text-white text-xs">
                  <span>Game</span>
                  <span>Help</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 h-24">
                <div className="bg-red-500 rounded-sm border border-white text-white text-xs flex items-center justify-center">K♥</div>
                <div className="bg-black rounded-sm border border-white text-white text-xs flex items-center justify-center">Q♠</div>
                <div className="bg-red-500 rounded-sm border border-white text-white text-xs flex items-center justify-center">J♦</div>
                <div className="bg-green-800 rounded-sm border border-green-600"></div>
                <div className="bg-green-800 rounded-sm border border-green-600"></div>
                <div className="bg-green-800 rounded-sm border border-green-600"></div>
                <div className="bg-green-800 rounded-sm border border-green-600"></div>
              </div>
              <div className="text-white text-xs mt-2">Score: 1337 • Time: 02:30</div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute top-32 right-20 transform -rotate-3 animate-float [animation-delay:3s]">
          <WindowsXPWindow title="Minesweeper" icon={<MinesweeperIcon />} className="w-56">
            <div className="p-3 h-32 bg-gray-300">
              <div className="flex justify-between mb-2">
                <div className="bg-black text-red-500 text-xs p-1 font-mono">💣 010</div>
                <div className="bg-black text-red-500 text-xs p-1 font-mono">😎</div>
                <div className="bg-black text-red-500 text-xs p-1 font-mono">⏰ 030</div>
              </div>
              <div className="grid grid-cols-8 gap-0.5">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 border border-gray-400 text-xs flex items-center justify-center ${
                    i % 5 === 0 ? 'bg-gray-200' : 'bg-gray-100'
                  } ${i === 10 ? 'text-blue-600' : i === 15 ? 'text-red-600' : ''}`}>
                    {i === 10 ? '1' : i === 15 ? '2' : ''}
                  </div>
                ))}
              </div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute bottom-32 left-1/3 transform rotate-12 animate-float [animation-delay:5s]">
          <div className="xp-desktop-icon">
            <div className="w-12 h-12 mb-1">
              <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded border border-gray-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">API</span>
              </div>
            </div>
            <span className="text-white text-xs text-center">REST APIs</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 chrome-text">
            Proyectos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Soluciones backend que demuestran experiencia en arquitectura, performance y escalabilidad
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full chrome-glow"></div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border y2k-border p-6 text-center group hover:scale-105 transition-transform duration-300">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 y2k-glow group-hover:scale-110 transition-transform" />
              <div className="text-3xl text-primary neon-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-surface overflow-hidden group hover:scale-105 transition-all duration-300">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Category Badge */}
                <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white border-0`}>
                  <project.icon className="w-3 h-3 mr-1" />
                  {project.category}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 chrome-text">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="text-xs border-primary/50 text-primary">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="metal-button text-black hover:text-black flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button variant="outline" size="sm" className="chrome-border bg-transparent text-primary hover:bg-primary/10">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-card/80 backdrop-blur-sm border-border y2k-border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl text-accent neon-text mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-muted-foreground mb-6">
              Transformemos tu idea en una solución backend robusta y escalable
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent transition-all duration-300 y2k-glow"
            >
              Hablemos del proyecto
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}