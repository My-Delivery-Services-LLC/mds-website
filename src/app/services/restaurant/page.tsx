"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  UtensilsCrossed, 
  Clock, 
  Thermometer, 
  Shield,
  CheckCircle,
  Star,
  Coffee,
  Pizza,
  IceCream,
  Cake,
  ChefHat,
  Timer,
  Truck,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RestaurantServicePage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const foodCategories = [
    {
      name: "Hot Meals",
      icon: Pizza,
      description: "Fresh, hot meals delivered with temperature control",
      gradient: "from-red-500 to-orange-500",
      items: ["Ready meals", "Cooked dishes", "Hot beverages", "Soups & stews"]
    },
    {
      name: "Desserts & Sweets",
      icon: Cake,
      description: "Delicate desserts and celebration cakes",
      gradient: "from-pink-500 to-purple-500",
      items: ["Birthday cakes", "Pastries", "Chocolates", "Ice cream"]
    },
    {
      name: "Beverages",
      icon: Coffee,
      description: "Hot and cold beverages for all occasions",
      gradient: "from-brown-500 to-amber-500",
      items: ["Coffee & tea", "Fresh juices", "Smoothies", "Specialty drinks"]
    },
    {
      name: "Frozen Items",
      icon: IceCream,
      description: "Frozen foods with specialized cold chain delivery",
      gradient: "from-blue-500 to-cyan-500",
      items: ["Ice cream", "Frozen meals", "Frozen desserts", "Cold storage items"]
    }
  ];

  const deliveryOptions = [
    {
      type: "Express Delivery",
      time: "30-45 mins",
      description: "For hot, fresh meals that can't wait",
      icon: Timer,
      color: "bg-red-500"
    },
    {
      type: "Scheduled Delivery",
      time: "Custom time",
      description: "Perfect for events and special occasions",
      icon: Calendar,
      color: "bg-blue-500"
    },
    {
      type: "Bulk Orders",
      time: "2-4 hours",
      description: "Large orders for corporate events",
      icon: Users,
      color: "bg-green-500"
    }
  ];

  const restaurantPartners = [
    { name: "Fine Dining", count: "150+", icon: ChefHat },
    { name: "Fast Food", count: "300+", icon: Pizza },
    { name: "Cafes", count: "200+", icon: Coffee },
    { name: "Bakeries", count: "100+", icon: Cake }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % foodCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderCount(25000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Food Animation */}
      <section className="relative gradient-orange text-white py-20 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          {/* Floating food icons */}
          {[Pizza, Coffee, Cake, IceCream].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 10}%`
              }}
            >
              <Icon className="h-8 w-8 text-white/30" />
            </motion.div>
          ))}
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
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-4"
                >
                  <UtensilsCrossed className="h-12 w-12" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Restaurant Delivery
                </h1>
              </div>
              <p className="text-xl text-orange-100 mb-8">
                From gourmet meals to sweet treats, we deliver culinary excellence 
                with the care and speed your food deserves. Hot, fresh, and on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    Start Delivery Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    View Menu Options
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Animated Order Counter */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl font-bold mb-2"
                  >
                    {orderCount.toLocaleString()}+
                  </motion.div>
                  <p className="text-orange-100 text-lg">Orders Delivered This Month</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {restaurantPartners.map((partner, index) => {
                    const IconComponent = partner.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/20 rounded-lg p-4 text-center"
                      >
                        <IconComponent className="h-6 w-6 mx-auto mb-2" />
                        <div className="text-xl font-bold">{partner.count}</div>
                        <div className="text-xs text-orange-100">{partner.name}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Categories Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Food Categories We Deliver
            </h2>
            <p className="text-lg text-gray-600">
              Specialized handling for every type of food and beverage
            </p>
          </motion.div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {foodCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="h-full"
                    >
                      <div className={`bg-gradient-to-br ${category.gradient} rounded-xl p-8 text-white h-full flex flex-col`}>
                        <div className="flex items-center mb-6">
                          <motion.div
                            animate={{ 
                              rotate: activeCategory === index ? 360 : 0,
                              scale: activeCategory === index ? 1.1 : 1
                            }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4"
                          >
                            <IconComponent className="h-6 w-6" />
                          </motion.div>
                          <h3 className="text-xl font-bold">{category.name}</h3>
                        </div>
                        <p className="text-white/90 mb-6 flex-grow">{category.description}</p>
                        <div className="space-y-2">
                          {category.items.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-white/90"
                            >
                              <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                              {item}
                            </motion.div>
                          ))}
                        </div>
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

      {/* Delivery Options with Interactive Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Delivery Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the delivery option that best fits your restaurant's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{option.type}</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-4">{option.time}</div>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Temperature Control Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Temperature-Controlled Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our specialized delivery vehicles maintain optimal temperatures 
                to ensure your food arrives exactly as intended.
              </p>
              
              <div className="space-y-6">
                {[
                  { temp: "65°C+", desc: "Hot food delivery", icon: Pizza, color: "text-red-500" },
                  { temp: "2-8°C", desc: "Chilled items", icon: IceCream, color: "text-blue-500" },
                  { temp: "-18°C", desc: "Frozen products", icon: Thermometer, color: "text-cyan-500" },
                  { temp: "Room temp", desc: "Ambient storage", icon: Coffee, color: "text-amber-500" }
                ].map((temp, index) => {
                  const IconComponent = temp.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className={`h-6 w-6 ${temp.color}`} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{temp.temp}</div>
                        <div className="text-gray-600">{temp.desc}</div>
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
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
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
                    className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Thermometer className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smart Temperature Monitoring
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Real-time temperature tracking ensures food safety and quality
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-orange-500">98%</div>
                      <div className="text-sm text-gray-600">Temperature Accuracy</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-green-500">100%</div>
                      <div className="text-sm text-gray-600">Food Safety</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas with Map Effect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Delivery Coverage Areas
            </h2>
            <p className="text-lg text-gray-600">
              We deliver delicious food across major areas in Dubai and Sharjah
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Dubai Marina", "Downtown Dubai", "Business Bay", "Jumeirah",
              "Deira", "Bur Dubai", "Sharjah City", "Al Qasimia",
              "Dubai Mall", "JBR", "DIFC", "Dubai Hills"
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MapPin className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                <span className="text-gray-800 font-medium text-sm">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Restaurant Partners Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from restaurants we serve
            </p>
          </motion.div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Chef Ahmed",
                  restaurant: "Golden Spoon Restaurant",
                  review: "MDS has transformed our delivery service. Food arrives hot and fresh every time!",
                  rating: 5
                },
                {
                  name: "Maria Santos",
                  restaurant: "Sweet Dreams Bakery",
                  review: "Their temperature-controlled delivery keeps our cakes perfect. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Omar Hassan",
                  restaurant: "Fast Bites Cafe",
                  review: "Reliable, fast, and professional. Our customers love the quick delivery times.",
                  rating: 5
                }
              ].map((review, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg mb-6 italic">"{review.review}"</p>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-orange-500">{review.restaurant}</div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-orange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <UtensilsCrossed className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Restaurant Delivery?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of restaurants that trust MDS for reliable, 
              temperature-controlled food delivery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Start Delivery Service
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Call +971-4-584-0628
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

export default RestaurantServicePage;

