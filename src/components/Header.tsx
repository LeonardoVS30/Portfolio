import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Terminal, Code2, User, Briefcase, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="retro-scan">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-primary chrome-glow" />
              <span className="text-xl chrome-text">DEV.EXE</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <User className="w-4 h-4" />
                <span>Inicio</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Code2 className="w-4 h-4" />
                <span>Sobre Mí</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Terminal className="w-4 h-4" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Briefcase className="w-4 h-4" />
                <span>Proyectos</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Contacto</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-3 pt-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  <User className="w-4 h-4" />
                  <span>Inicio</span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Sobre Mí</span>
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Skills</span>
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Proyectos</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contacto</span>
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}