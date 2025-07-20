import { Code, Database, Brain, BarChart3, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python"],
      color: "text-neon-blue"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
      color: "text-neon-green"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL"],
      color: "text-neon-purple"
    },
    {
      icon: Brain,
      title: "AI/ML Technologies",
      skills: ["Machine Learning", "OpenCV", "TensorFlow"],
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: ["Power BI"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="tech-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All skills as animated tags */}
        <div className="tech-card">
          <h3 className="text-2xl font-semibold text-center mb-6 gradient-text">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Java", "Python", "MySQL", "HTML", "CSS", "Machine Learning", "OpenCV", "TensorFlow", "Power BI"].map((skill, index) => (
              <span
                key={skill}
                className="skill-tag hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;