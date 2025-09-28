import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Code2, 
  Database, 
  Cloud, 
  Settings, 
  Shield, 
  Zap,
  Server,
  GitBranch,
  Container,
  Cpu
} from 'lucide-react';
import { WindowsXPWindow } from './WindowsXPWindow';
import { PaintIcon, NotepadIcon } from './XPIcons';

export function SkillsSection() {
  const skillCategories = [
    {
      title: ".NET Ecosystem",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "C#", level: 95, description: "Lenguaje principal con 5+ años" },
        { name: "ASP.NET Core", level: 90, description: "APIs REST y GraphQL" },
        { name: "Entity Framework", level: 85, description: "ORM y Code First" },
        { name: "LINQ", level: 90, description: "Consultas avanzadas" },
      ]
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "text-secondary",
      skills: [
        { name: "SQL Server", level: 90, description: "T-SQL, stored procedures" },
        { name: "PostgreSQL", level: 80, description: "RDBMS avanzado" },
        { name: "Redis", level: 75, description: "Caching y sesiones" },
        { name: "MongoDB", level: 70, description: "NoSQL y agregaciones" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-accent",
      skills: [
        { name: "Azure", level: 85, description: "App Services, Functions, SQL" },
        { name: "Docker", level: 80, description: "Containerización" },
        { name: "CI/CD", level: 75, description: "Azure DevOps, GitHub Actions" },
        { name: "Kubernetes", level: 65, description: "Orquestación básica" },
      ]
    },
    {
      title: "Arquitectura",
      icon: Settings,
      color: "text-primary",
      skills: [
        { name: "Microservicios", level: 85, description: "Diseño distribuido" },
        { name: "Domain-Driven Design", level: 80, description: "DDD patterns" },
        { name: "SOLID Principles", level: 90, description: "Código limpio" },
        { name: "Design Patterns", level: 85, description: "GoF patterns" },
      ]
    }
  ];

  const tools = [
    { name: "Visual Studio", icon: "🚀" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📡" },
    { name: "Git", icon: "🌿" },
    { name: "Azure Portal", icon: "☁️" },
    { name: "SQL Server Management Studio", icon: "🗄️" },
    { name: "Docker Desktop", icon: "🐳" },
    { name: "Swagger", icon: "📋" },
  ];

  const certifications = [
    "Microsoft Certified: Azure Developer Associate",
    "Microsoft Certified: Azure Fundamentals", 
    "Clean Code & SOLID Principles",
    "ASP.NET Core Advanced Patterns"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="retro-scan absolute inset-0 opacity-30"></div>
      
      {/* Background Gaming Elements with XP Windows */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-16 transform rotate-12 animate-float [animation-delay:2s]">
          <WindowsXPWindow title="Paint - tech_stack.bmp" icon={<PaintIcon />} className="w-56">
            <div className="p-2 h-32 bg-white">
              <div className="flex space-x-1 mb-2">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
              </div>
              <div className="text-xs space-y-1">
                <div>🎨 Drawing: C# Architecture</div>
                <div>🖌️ Brush: .NET Framework</div>
                <div>🎯 Tools: APIs & Databases</div>
              </div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute top-40 right-20 transform -rotate-6 animate-float [animation-delay:4s]">
          <WindowsXPWindow title="Skills.txt - Notepad" icon={<NotepadIcon />} className="w-64">
            <div className="p-3 h-36 bg-white font-mono text-xs">
              <div className="space-y-1">
                <div><span className="text-blue-600">namespace</span> Developer.Skills;</div>
                <div></div>
                <div><span className="text-purple-600">public class</span> BackendDev</div>
                <div>{"{"}</div>
                <div>  <span className="text-green-600">// Primary Stack</span></div>
                <div>  <span className="text-blue-600">string</span> Language = <span className="text-red-600">"C#"</span>;</div>
                <div>  <span className="text-blue-600">string</span> Framework = <span className="text-red-600">".NET"</span>;</div>
                <div>  <span className="text-blue-600">int</span> Experience = 5;</div>
                <div>{"}"}</div>
              </div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute bottom-32 left-1/4 transform rotate-3 animate-float [animation-delay:6s]">
          <div className="xp-desktop-icon">
            <div className="w-10 h-10 mb-1">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded border border-gray-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">SQL</span>
              </div>
            </div>
            <span className="text-white text-xs text-center">Database</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 chrome-text">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mi arsenal de tecnologías para crear soluciones backend robustas y escalables
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full chrome-glow mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-surface p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-3 chrome-glow group-hover:scale-110 transition-transform`} />
                <h3 className={`text-2xl chrome-text`}>{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className={`text-sm ${category.color}`}>{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools */}
          <Card className="bg-card/80 backdrop-blur-sm border-border y2k-border p-6">
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-primary mr-3 y2k-glow" />
              <h3 className="text-2xl text-primary neon-text">Herramientas</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors">
                  <span className="text-lg">{tool.icon}</span>
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="bg-card/80 backdrop-blur-sm border-border y2k-border p-6">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-secondary mr-3 y2k-glow" />
              <h3 className="text-2xl text-secondary neon-text">Certificaciones</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="w-full justify-start p-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  {cert}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Architecture Philosophy */}
        <Card className="mt-8 bg-card/80 backdrop-blur-sm border-border y2k-border p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Cpu className="w-8 h-8 text-accent mr-3 y2k-glow" />
            <h3 className="text-2xl text-accent neon-text">Filosofía de Desarrollo</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Código limpio, arquitectura sólida, performance óptimo. Cada línea de código debe tener un propósito, 
            cada componente debe ser testeable, y cada sistema debe ser mantenible. 
            <span className="text-primary"> Think big, code smart</span>."
          </p>
        </Card>
      </div>
    </section>
  );
}