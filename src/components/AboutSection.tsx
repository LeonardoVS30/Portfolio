import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Server, Database, Zap, Trophy, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WindowsXPWindow } from './WindowsXPWindow';
import { ExplorerIcon, MediaPlayerIcon } from './XPIcons';

export function AboutSection() {
  const achievements = [
    { icon: Trophy, label: "5+ Años", desc: "Experiencia" },
    { icon: Target, label: "100+", desc: "Proyectos" },
    { icon: Zap, label: "99.9%", desc: "Uptime" },
  ];

  const interests = [
    "Gaming Retro", "Arquitectura de Software", "Cloud Computing", 
    "DevOps", "Microservicios", "Performance Optimization"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="retro-scan absolute inset-0 opacity-50"></div>
      
      {/* Background Elements with XP Windows */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-16 right-10 transform rotate-6 animate-float [animation-delay:3s]">
          <WindowsXPWindow title="My Computer" icon={<ExplorerIcon />} className="w-72">
            <div className="p-4 h-48">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-sm">C# Projects (100GB)</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="text-sm">.NET Framework (50GB)</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <span className="text-sm">APIs Collection (25GB)</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                  <span className="text-sm">Databases (75GB)</span>
                </div>
              </div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute bottom-20 left-10 transform -rotate-3 animate-float [animation-delay:5s]">
          <WindowsXPWindow title="Windows Media Player" icon={<MediaPlayerIcon />} className="w-64">
            <div className="p-3">
              <div className="bg-black p-3 mb-2 rounded">
                <div className="text-center text-white text-xs mb-2">♪ Now Playing ♪</div>
                <div className="text-green-400 text-xs text-center">"Coding in C# Blues"</div>
                <div className="bg-gray-700 h-1 rounded mt-2">
                  <div className="bg-blue-400 h-1 rounded w-3/4"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-2">
                <button className="xp-button w-6 h-6 text-xs">⏮</button>
                <button className="xp-button w-6 h-6 text-xs">⏸</button>
                <button className="xp-button w-6 h-6 text-xs">⏭</button>
              </div>
            </div>
          </WindowsXPWindow>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 chrome-text">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full chrome-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm border-border y2k-border p-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5MmslMjBjb21wdXRlciUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NTkwMjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace Y2K"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center group">
                      <achievement.icon className="w-8 h-8 mx-auto mb-2 text-primary y2k-glow group-hover:scale-110 transition-transform" />
                      <div className="text-2xl text-primary neon-text">{achievement.label}</div>
                      <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <Card className="glass-surface p-6">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-primary mr-3 chrome-glow" />
                <h3 className="text-2xl chrome-text">Mi Historia</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Soy un desarrollador backend apasionado por la tecnología .NET y la arquitectura de software. 
                Mi viaje comenzó en la era dorada de los videojuegos, donde aprendí que el código debe ser 
                <span className="text-primary"> elegante</span>, 
                <span className="text-secondary"> eficiente</span> y 
                <span className="text-accent"> escalable</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Especializado en crear APIs robustas, sistemas distribuidos y soluciones cloud-native 
                que pueden manejar millones de requests. Mi filosofía: "El código es poesía, la arquitectura es arte."
              </p>

              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-secondary mr-3 y2k-glow" />
                <h4 className="text-xl text-secondary">Especialidades</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="flex items-center text-sm">
                  <Database className="w-4 h-4 text-accent mr-2" />
                  <span>ASP.NET Core</span>
                </div>
                <div className="flex items-center text-sm">
                  <Database className="w-4 h-4 text-accent mr-2" />
                  <span>Entity Framework</span>
                </div>
                <div className="flex items-center text-sm">
                  <Database className="w-4 h-4 text-accent mr-2" />
                  <span>SQL Server</span>
                </div>
                <div className="flex items-center text-sm">
                  <Database className="w-4 h-4 text-accent mr-2" />
                  <span>Azure Cloud</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg text-accent">Intereses & Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}