import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold gradient-text">Sivanesan R</h3>
            <p className="text-muted-foreground">AI/ML Enthusiast | Future-Focused Developer</p>
          </div>
          
          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Sivanesan R</span>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sivanesan R. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;