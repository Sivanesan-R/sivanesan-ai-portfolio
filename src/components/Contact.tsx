import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Send, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_8o0wean';
  const EMAILJS_TEMPLATE_ID = 'template_xa9kxcv';
  const EMAILJS_PUBLIC_KEY = '_mgA3eIJUqyyzd_HH';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'rsivanesan285@gmail.com', // Your email
        }
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rsivanesan285@gmail.com",
      href: "mailto:rsivanesan285@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9790029375",
      href: "tel:+919790029375",
      color: "text-neon-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sivanesan-ravichandran",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sivanesan-R",
      color: "text-foreground"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/sivanesan_E/",
      color: "text-neon-green"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="tech-card">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="btn-neon w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="tech-card">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center">
                    <div className={`p-3 rounded-lg bg-muted mr-4 ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a 
                        href={info.href} 
                        className={`font-medium ${info.color} hover:opacity-80 transition-opacity`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="tech-card">
              <h3 className="text-2xl font-semibold text-accent mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                  >
                    <social.icon className={`w-6 h-6 ${social.color} mr-4 group-hover:scale-110 transition-transform`} />
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.href.replace('https://', '')}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;