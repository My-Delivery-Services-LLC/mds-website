"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Package, 
  ShoppingBag, 
  Truck, 
  BarChart3,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  RefreshCw,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Monitor,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EcommerceServicePage = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const metrics = [
    { label: "Orders Delivered", value: "2M+", icon: Package, color: "text-purple-600" },
    { label: "E-commerce Partners", value: "500+", icon: ShoppingBag, color: "text-blue-600" },
    { label: "Average Delivery Time", value: "2.5hrs", icon: Clock, color: "text-green-600" },
    { label: "Customer Satisfaction", value: "98%", icon: Star, color: "text-yellow-600" }
  ];

  const platforms = [
    {
      name: "Noon",
      description: "Leading Middle East marketplace",
      gradient: "from-yellow-400 to-orange-500",
      icon: Monitor
    },
    {
      name: "Amazon UAE",
      description: "Global e-commerce giant",
      gradient: "from-orange-400 to-red-500",
      icon: Globe
    },
    {
      name: "Carrefour Online",
      description: "Retail and grocery platform",
      gradient: "from-blue-400 to-cyan-500",
      icon: ShoppingBag
    },
    {
      name: "Local Brands",
      description: "UAE-based online stores",
      gradient: "from-green-400 to-emerald-500",
      icon: Smartphone
    }
  ];

  const services = [
    {
      title: "Last-Mile Delivery",
      description: "Direct delivery from fulfillment centers to customers",
      icon: Truck,
      features: ["Same-day delivery", "Real-time tracking", "Flexible time slots", "Contactless delivery"]
    },
    {
      title: "Inventory Management",
      description: "Efficient stock replenishment and warehouse operations",
      icon: Package,
      features: ["Stock monitoring", "Automated reordering", "Warehouse optimization", "Inventory analytics"]
    },
    {
      title: "Returns Processing",
      description: "Seamless return and exchange handling",
      icon: RefreshCw,
      features: ["Easy returns", "Quality inspection", "Refund processing", "Exchange management"]
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven delivery optimization and reporting",
      icon: BarChart3,
      features: ["Performance metrics", "Route optimization", "Customer insights", "Cost analysis"]
    }
  ];

  const successStories = [
    {
      company: "Fashion Forward",
      improvement: "40% faster delivery",
      description: "Reduced average delivery time from 4 hours to 2.4 hours",
      metric: "2.4hrs",
      color: "from-pink-500 to-purple-600"
    },
    {
      company: "Tech Gadgets UAE",
      improvement: "95% on-time delivery",
      description: "Achieved industry-leading delivery reliability",
      metric: "95%",
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "Home & Living",
      improvement: "60% cost reduction",
      description: "Optimized logistics reduced operational costs significantly",
      metric: "60%",
      color: "from-green-500 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative gradient-purple text-white py-20 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"dots\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23dots)\"/></svg>')",
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-4"
                >
                  <Package className="h-12 w-12" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  E-commerce Delivery
                </h1>
              </div>
              <p className="text-xl text-purple-100 mb-8">
                The backbone of UAE's leading e-commerce platforms. We power seamless 
                online shopping experiences with lightning-fast, reliable delivery services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Animated Metrics Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <motion.div
                        key={index}
                        animate={{ 
                          scale: activeMetric === index ? 1.05 : 1,
                          opacity: activeMetric === index ? 1 : 0.7
                        }}
                        className="bg-white/20 rounded-xl p-4 text-center"
                      >
                        <IconComponent className={`h-6 w-6 mx-auto mb-2 ${metric.color}`} />
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <div className="text-xs text-purple-100">{metric.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Partners Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading E-commerce Platforms
            </h2>
            <p className="text-lg text-gray-600">
              We power delivery for the biggest names in online retail
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="h-full"
                    >
                      <div className={`bg-gradient-to-br ${platform.gradient} rounded-xl p-8 text-white h-full flex flex-col justify-center items-center text-center`}>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4"
                        >
                          <IconComponent className="h-8 w-8" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                        <p className="text-white/90">{platform.description}</p>
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

      {/* Services Grid with Hover Effects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive E-commerce Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From inventory management to last-mile delivery, we handle every aspect 
              of your e-commerce logistics chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                      >
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
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

      {/* Success Stories with Animated Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from our e-commerce partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl"
              >
                <div className={`bg-gradient-to-br ${story.color} p-8 text-white h-full`}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {story.metric}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <p className="text-lg font-semibold text-white/90 mb-4">{story.improvement}</p>
                  <p className="text-white/80">{story.description}</p>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        animate={{
                          y: [0, -100],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeOut"
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          bottom: 0
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our advanced technology platform integrates seamlessly with your 
                e-commerce systems to provide real-time visibility and control.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Real-time API Integration", desc: "Instant order processing and status updates" },
                  { icon: Shield, title: "Secure Data Handling", desc: "Enterprise-grade security for customer data" },
                  { icon: TrendingUp, title: "Advanced Analytics", desc: "AI-powered insights and optimization" },
                  { icon: Globe, title: "Multi-platform Support", desc: "Works with all major e-commerce platforms" }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{tech.title}</h3>
                        <p className="text-gray-600">{tech.desc}</p>
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Monitor className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Unified Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Monitor all your deliveries, inventory, and analytics in one place
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Orders/Hour", value: "1,200+" },
                    { label: "Accuracy", value: "99.8%" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Response Time", value: "<100ms" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-lg p-4 text-center shadow-sm"
                    >
                      <div className="text-xl font-bold text-purple-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="relative gradient-purple text-white py-20 overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"circuit\" width=\"50\" height=\"50\" patternUnits=\"userSpaceOnUse\"><path d=\"M10,10 L40,10 L40,40 L10,40 Z\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\" opacity=\"0.3\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23circuit)\"/></svg>')",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your E-commerce Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful e-commerce businesses that trust MDS 
              for their delivery and logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Start Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Schedule Demo
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

export default EcommerceServicePage;

