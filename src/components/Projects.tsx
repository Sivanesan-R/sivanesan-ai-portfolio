import { ExternalLink, Github, TrendingUp, Database, Brain, Eye } from 'lucide-react';

const Projects = () => {
  const project = {
    title: "Sales Prediction Using Machine Learning",
    description: "Predicts future product sales using historical data to support business decisions and inventory management. Built with comprehensive data analysis, multiple ML algorithms, and interactive visualizations.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    algorithms: ["Linear Regression", "Decision Tree", "Random Forest"],
    features: [
      "Full-cycle data preprocessing and cleaning",
      "Exploratory Data Analysis (EDA)",
      "Multiple ML model implementation",
      "Hyperparameter tuning optimization",
      "Interactive data visualizations",
      "Business intelligence insights"
    ],
    role: "Full-cycle ownership from data prep to model building, EDA, hyperparameter tuning, and visualization.",
    icon: TrendingUp
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Project Showcase */}
        <div className="tech-card max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
              </div>

              <p className="text-foreground/90 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">My Role</h4>
                <p className="text-foreground/80 italic">
                  {project.role}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="btn-neon flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </button>
                <button className="btn-cyber flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-accent mb-3 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Algorithms */}
              <div>
                <h4 className="text-lg font-semibold text-neon-green mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  ML Algorithms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.algorithms.map((algo) => (
                    <span key={algo} className="px-3 py-1 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded-full text-sm">
                      {algo}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-neon-purple mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects Placeholder */}
        <div className="mt-16 text-center">
          <div className="tech-card max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm constantly working on new AI/ML projects and innovative solutions. Stay tuned for more exciting developments!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;