"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Clock, 
  Thermometer, 
  Shield, 
  CheckCircle,
  Truck,
  Package,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GroceryServicePage = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Temperature-Controlled Delivery",
      description: "Specialized refrigerated vehicles to maintain freshness of perishable items"
    },
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Quick turnaround times to ensure fresh groceries reach customers promptly"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Careful handling and quality checks to maintain product integrity"
    },
    {
      icon: Package,
      title: "Bulk Order Handling",
      description: "Efficient processing of large orders for restaurants and businesses"
    }
  ];

  const serviceAreas = [
    "Dubai Marina",
    "Downtown Dubai", 
    "Business Bay",
    "Jumeirah",
    "Deira",
    "Bur Dubai",
    "Sharjah City",
    "Al Qasimia"
  ];

  const deliveryOptions = [
    {
      title: "Express Delivery",
      time: "1-2 Hours",
      description: "For urgent grocery needs"
    },
    {
      title: "Same Day",
      time: "4-6 Hours", 
      description: "Standard grocery delivery"
    },
    {
      title: "Scheduled",
      time: "Next Day+",
      description: "Plan ahead for convenience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <ShoppingCart className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Grocery Store Delivery
                </h1>
              </div>
              <p className="text-xl text-green-100 mb-8">
                Fresh groceries delivered safely and efficiently across Dubai and Sharjah. 
                Our specialized grocery delivery service ensures your products maintain their 
                quality from store to customer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    Get Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-4">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">1-2hrs</div>
                    <div className="text-sm">Express Delivery</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <Thermometer className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">2-8°C</div>
                    <div className="text-sm">Cold Chain</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Quality Assured</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Grocery Delivery Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the importance of fresh groceries and have built our service 
              around maintaining quality throughout the delivery process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Delivery Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the delivery option that best fits your schedule and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {option.time}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              We deliver fresh groceries across major areas in Dubai and Sharjah
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
              >
                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <span className="text-gray-800 font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Delivery Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined process ensuring quality and efficiency at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Order Received", description: "We receive your grocery delivery request" },
              { step: "2", title: "Quality Check", description: "Our team carefully selects and inspects items" },
              { step: "3", title: "Secure Packaging", description: "Temperature-controlled packaging for freshness" },
              { step: "4", title: "Safe Delivery", description: "GPS-tracked delivery to your specified location" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Grocery Delivery Service?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your grocery delivery requirements and get a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroceryServicePage;

