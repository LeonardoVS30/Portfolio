import React from 'react';
import { Button } from './ui/button';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WindowsXPWindow } from './WindowsXPWindow';
import { NotepadIcon, CalculatorIcon } from './XPIcons';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="retro-scan absolute inset-0"></div>
      
      {/* Animated Background Elements & XP Windows */}
      <div className="absolute inset-0 opacity-60">
        {/* Floating XP Windows */}
        <div className="absolute top-16 left-10 transform rotate-12 animate-float">
          <WindowsXPWindow title="Notepad - curriculum.txt" icon={<NotepadIcon />} className="w-64 text-xs">
            <div className="p-3 h-32 font-mono">
              <div className="text-blue-600">// Backend Developer</div>
              <div>Name: Leonardo Verdesoto</div>
              <div>Skills: C#, .NET, APIs</div>
              <div>Experience: 5+ años</div>
              <div className="text-green-600">Status: Available</div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute top-32 right-16 transform -rotate-6 animate-float [animation-delay:2s]">
          <WindowsXPWindow title="Calculator" icon={<CalculatorIcon />} className="w-48">
            <div className="p-2">
              <div className="bg-white border-2 border-gray-400 p-2 mb-2 text-right text-lg font-mono">
                100% READY
              </div>
              <div className="grid grid-cols-4 gap-1 text-xs">
                <button className="xp-button p-1">C</button>
                <button className="xp-button p-1">±</button>
                <button className="xp-button p-1">%</button>
                <button className="xp-button p-1">÷</button>
                <button className="xp-button p-1">7</button>
                <button className="xp-button p-1">8</button>
                <button className="xp-button p-1">9</button>
                <button className="xp-button p-1">×</button>
              </div>
            </div>
          </WindowsXPWindow>
        </div>
        
        <div className="absolute bottom-32 left-1/4 transform rotate-3 animate-float [animation-delay:4s]">
          <div className="xp-desktop-icon">
            <div className="w-8 h-8 mb-1">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded border border-gray-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">VS</span>
              </div>
            </div>
            <span className="text-white text-xs text-center">Visual Studio</span>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-1/3 transform -rotate-12 animate-float [animation-delay:1s]">
          <div className="xp-desktop-icon">
            <div className="w-8 h-8 mb-1">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded border border-gray-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">.NET</span>
              </div>
            </div>
            <span className="text-white text-xs text-center">Framework</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://raw.githubusercontent.com/LeonardoVS30/Portfolio/773fc55bdc2bca78fe1d99b6a083daead2406934/Leonardo_sqr_c.jpeg"
                  alt="Leonardo Verdesoto"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary y2k-glow"
                />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="mb-2 text-6xl md:text-8xl chrome-text">
              Leonardo<span className="text-primary"> </span>Verdesoto
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <span className="text-primary text-sm tracking-[0.3em] px-4 chrome-glow">BACKEND DEVELOPER</span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Desarrollador junior especializado en <span className="text-primary chrome-glow">C# .NET</span> con un enfoque en la creación de
            <span className="text-secondary chrome-glow"> soluciones eficientes </span> y 
            <span className="text-accent chrome-glow"> escalables</span>. 
            Me apasiona aprender y mejorar mis habilidades en el desarrollo de software.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="metal-button text-black hover:text-black group"
              onClick={() => scrollToSection('projects')}
            >
              <span>Ver Proyectos</span>
              <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="chrome-border bg-transparent text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open('/Leonardo Efrain Verdesoto Santana.pdf', '_blank')}
            >
              <Download className="mr-2 w-4 h-4" />
              Descargar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => window.open('https://github.com/LeonardoVS30', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-secondary transition-colors"
              onClick={() => window.open('https://linkedin.com/in/leonardo-vs30', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-accent transition-colors"
              onClick={() => window.open('mailto:verdesotoleonardo@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => scrollToSection('about')}
          className="text-primary hover:text-secondary transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}