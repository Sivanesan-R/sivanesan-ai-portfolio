import { ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative tech-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-green rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Photo */}
          <div className="mb-8">
            <img 
              src={profilePhoto} 
              alt="Sivanesan R" 
              className="w-48 h-48 rounded-full mx-auto border-4 border-primary shadow-[var(--glow-primary)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Sivanesan R</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            AI/ML Enthusiast | Future-Focused Developer
          </p>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            I'm Sivanesan, an engineering student exploring the world of 
            <span className="text-primary font-semibold"> Artificial Intelligence</span>, 
            <span className="text-accent font-semibold"> Machine Learning</span>, and 
            <span className="text-neon-green font-semibold"> Smart Systems</span>.
          </p>

          {/* CTA Button */}
          <button 
            onClick={scrollToAbout}
            className="btn-neon font-semibold text-lg"
          >
            Explore My Work
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;