"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Smartphone, 
  Cloud, 
  Zap,
  Shield,
  BarChart3,
  MapPin,
  Clock,
  Users,
  Truck,
  Brain,
  Wifi,
  Database,
  Lock,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Monitor,
  Tablet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TechnologyPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const techStack = [
    {
      category: "Artificial Intelligence",
      icon: Brain,
      description: "Advanced AI algorithms for route optimization and predictive analytics",
      technologies: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      description: "Scalable cloud-based architecture ensuring 99.9% uptime",
      technologies: ["AWS Cloud Services", "Microservices Architecture", "Auto-scaling", "Load Balancing"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Mobile Technology",
      icon: Smartphone,
      description: "Native mobile applications for seamless user experience",
      technologies: ["React Native", "iOS Development", "Android Development", "Progressive Web Apps"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "IoT & Sensors",
      icon: Wifi,
      description: "Internet of Things integration for real-time monitoring",
      technologies: ["GPS Tracking", "Temperature Sensors", "RFID Technology", "Bluetooth Beacons"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const platformFeatures = [
    {
      title: "Real-Time Tracking",
      description: "GPS-powered tracking with live updates and ETA predictions",
      icon: MapPin,
      benefits: ["Live location updates", "Accurate ETA calculations", "Route optimization", "Geofencing alerts"]
    },
    {
      title: "Smart Analytics",
      description: "AI-driven insights for performance optimization and decision making",
      icon: BarChart3,
      benefits: ["Performance metrics", "Predictive analytics", "Custom reports", "Trend analysis"]
    },
    {
      title: "Automated Dispatch",
      description: "Intelligent order assignment based on location, capacity, and priority",
      icon: Zap,
      benefits: ["Automatic assignment", "Load optimization", "Priority handling", "Efficiency maximization"]
    },
    {
      title: "Customer Portal",
      description: "Self-service portal for booking, tracking, and managing deliveries",
      icon: Users,
      benefits: ["Easy booking", "Order tracking", "History access", "Support integration"]
    }
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest",
      icon: Lock
    },
    {
      title: "Multi-Factor Authentication",
      description: "Enhanced security with multiple verification layers",
      icon: Shield
    },
    {
      title: "Secure API Gateway",
      description: "Protected API endpoints with rate limiting and monitoring",
      icon: Database
    },
    {
      title: "Compliance Standards",
      description: "GDPR, ISO 27001, and local data protection compliance",
      icon: CheckCircle
    }
  ];

  const integrations = [
    {
      name: "E-commerce Platforms",
      platforms: ["Shopify", "WooCommerce", "Magento", "Custom APIs"],
      icon: Monitor,
      color: "text-blue-600"
    },
    {
      name: "POS Systems",
      platforms: ["Square", "Clover", "Toast", "Custom POS"],
      icon: Tablet,
      color: "text-green-600"
    },
    {
      name: "ERP Systems",
      platforms: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"],
      icon: Database,
      color: "text-purple-600"
    },
    {
      name: "Communication Tools",
      platforms: ["WhatsApp Business", "SMS Gateway", "Email API", "Push Notifications"],
      icon: Smartphone,
      color: "text-orange-600"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Up to 40% improvement in delivery efficiency through AI optimization",
      metric: "40%",
      icon: TrendingUp
    },
    {
      title: "Cost Reduction",
      description: "Significant reduction in operational costs through automation",
      metric: "35%",
      icon: BarChart3
    },
    {
      title: "Customer Satisfaction",
      description: "Higher customer satisfaction with real-time tracking and updates",
      metric: "95%",
      icon: Users
    },
    {
      title: "Delivery Accuracy",
      description: "Improved delivery accuracy with GPS and verification systems",
      metric: "99.8%",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-purple text-white py-20 relative overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"tech\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"white\" opacity=\"0.3\"/><path d=\"M5,5 L15,5 L15,15 L5,15 Z\" fill=\"none\" stroke=\"white\" stroke-width=\"0.3\" opacity=\"0.2\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23tech)\"/></svg>')",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology <span className="bg-black px-4 py-2">Platform</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Powered by cutting-edge technology, our platform delivers intelligent, 
              efficient, and scalable delivery solutions for the modern business world.
            </p>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Cpu className="h-16 w-16 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Built on modern, scalable technologies for maximum performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${tech.gradient} p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4"
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold">{tech.category}</h3>
                    </div>
                    <p className="text-white/90">{tech.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.technologies.map((technology, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{technology}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive features designed to streamline your delivery operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your data security is our top priority. We implement multiple layers 
                of protection to ensure your information remains safe and secure.
              </p>
              
              <div className="space-y-6">
                {securityFeatures.map((security, index) => {
                  const IconComponent = security.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{security.title}</h3>
                        <p className="text-gray-600">{security.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Shield className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    99.9% Security Uptime
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Continuous monitoring and protection with zero security incidents in 2023
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-red-500">256-bit</div>
                      <div className="text-sm text-gray-600">Encryption</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-green-500">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your existing systems and tools for a unified workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <IconComponent className={`h-8 w-8 ${integration.color}`} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{integration.name}</h3>
                  <div className="space-y-2">
                    {integration.platforms.map((platform, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        {platform}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Measurable Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Real results from businesses using our technology platform
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="h-full"
                    >
                      <div className="bg-white rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </motion.div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-purple text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Technology?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Discover how our advanced technology platform can transform 
              your delivery operations and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnologyPage;

