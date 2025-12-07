"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  MessageCircle,
  FileText,
  Bell,
  Search,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Zap,
  Heart,
  Lock,
  Phone,
  Mail,
  MapPin,
  FileSignature,
  FileQuestion,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import ProblemAnimation from "@/components/ProblemAnimation";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Ganti nomor WhatsApp di sini
const WHATSAPP_NUMBER = "6289668176764";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Chat Animation Component
const ChatAnimation = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset animation every 8 seconds
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const messages = [
    { type: "bot", text: "Halo! 👋 Selamat datang di GovConnect. Ada yang bisa saya bantu?", delay: 0.5 },
    { type: "user", text: "Saya mau lapor jalan rusak di RT 05", delay: 1.5 },
    { type: "bot", text: "Baik, saya akan bantu proses laporan Anda. Mohon kirimkan foto lokasi 📸", delay: 2.5 },
    { type: "user", text: "📷 [Foto jalan rusak]", delay: 3.5 },
    { type: "bot", text: "Laporan berhasil dikirim! ✅ Nomor tiket: #GC2024001", delay: 4.5 },
    { type: "bot", text: "Estimasi penanganan 2-3 hari kerja. Terima kasih! 🙏", delay: 5.5 },
  ];

  return (
    <div key={key} className="relative w-full max-w-md mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-secondary px-4 py-3 flex items-center gap-3">
        <motion.div 
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageCircle className="h-5 w-5 text-white" />
        </motion.div>
        <div>
          <p className="text-white font-semibold text-sm">GovConnect Bot</p>
          <div className="flex items-center gap-1.5">
            <motion.div 
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <p className="text-white/70 text-xs">Online • Siap membantu</p>
          </div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="p-4 space-y-3 bg-muted/30 min-h-[300px] max-h-[300px] overflow-hidden">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: msg.delay, duration: 0.4, ease: "easeOut" }}
            className={`flex ${msg.type === "user" ? "justify-end" : "gap-2"}`}
          >
            {msg.type === "bot" && (
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <MessageCircle className="h-4 w-4 text-secondary" />
              </div>
            )}
            <div className={`rounded-2xl px-4 py-2 max-w-[80%] ${
              msg.type === "user" 
                ? "bg-secondary text-secondary-foreground rounded-tr-sm" 
                : "bg-card border border-border rounded-tl-sm"
            }`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.5, duration: 0.3 }}
          className="flex gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <MessageCircle className="h-4 w-4 text-primary" />
          </div>
          <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
            <div className="flex gap-1">
              <motion.div 
                className="w-2 h-2 rounded-full bg-muted-foreground"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-muted-foreground"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-muted-foreground"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t border-border bg-card">
        <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
          <motion.input 
            type="text" 
            placeholder="Ketik pesan..." 
            className="flex-1 bg-transparent text-sm outline-none"
            disabled
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button size="icon" className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/90">
              <MessageCircle className="h-4 w-4 text-white" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Notification Badge */}
      <motion.div
        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        1
      </motion.div>
    </div>
  );
};

// How It Works Animation Component
const HowItWorksAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Cycle through steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 3) {
          // Reset animation after completing all steps
          setKey((k) => k + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(stepInterval);
  }, []);

  const steps = [
    {
      icon: Globe,
      title: "Buka Website",
      desc: "Klik 'Mulai Sekarang'",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      title: "Kirim Keluhan",
      desc: "Via WhatsApp",
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Admin Proses",
      desc: "Sedang ditangani...",
      color: "bg-orange-500",
    },
    {
      icon: CheckCircle,
      title: "Selesai!",
      desc: "Laporan ditindaklanjuti",
      color: "bg-secondary",
    },
  ];

  return (
    <div key={key} className="relative w-full max-w-md mx-auto">
      {/* Phone Frame */}
      <div className="bg-card border-4 border-border rounded-[2.5rem] shadow-2xl overflow-hidden">
        {/* Phone Notch */}
        <div className="bg-border h-6 flex items-center justify-center">
          <div className="w-20 h-4 bg-background rounded-full" />
        </div>

        {/* App Content */}
        <div className="bg-background p-4 min-h-[400px]">
          {/* App Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">GovConnect</p>
              <p className="text-xs text-muted-foreground">Layanan Kelurahan Digital</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.3,
                  x: currentStep >= index ? 0 : -20,
                  scale: currentStep === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex items-center gap-4 p-3 rounded-xl border transition-all ${
                  currentStep >= index
                    ? "border-secondary/50 bg-secondary/5"
                    : "border-border bg-muted/30"
                }`}
              >
                {/* Step Icon */}
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= index ? step.color : "bg-muted"
                  }`}
                  animate={
                    currentStep === index
                      ? { scale: [1, 1.1, 1] }
                      : {}
                  }
                  transition={{ duration: 0.8, repeat: currentStep === index ? Infinity : 0 }}
                >
                  {currentStep > index ? (
                    <CheckCircle className="h-6 w-6 text-white" />
                  ) : (
                    <step.icon className={`h-6 w-6 ${currentStep >= index ? "text-white" : "text-muted-foreground"}`} />
                  )}
                </motion.div>

                {/* Step Content */}
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${currentStep >= index ? "" : "text-muted-foreground"}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>

                {/* Status Indicator */}
                {currentStep === index && (
                  <motion.div
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-secondary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-secondary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-secondary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </motion.div>
                )}

                {currentStep > index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    <CheckCircle className="h-4 w-4 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: currentStep >= 3 ? 1 : 0,
              y: currentStep >= 3 ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                className="text-2xl"
              >
                🎉
              </motion.div>
              <div>
                <p className="font-semibold text-green-600 text-sm">Berhasil!</p>
                <p className="text-xs text-muted-foreground">Laporan Anda telah ditindaklanjuti</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Phone Bottom Bar */}
        <div className="bg-border h-4 flex items-center justify-center">
          <div className="w-24 h-1 bg-background/50 rounded-full" />
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 bg-primary text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-medium"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        24/7 Online
      </motion.div>
    </div>
  );
};

// Benefits Animation Components - Flat Modern Style
// Animation 1: Clock to Checkmark (Faster Process)
const ClockToCheckAnimation = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-16 h-16">
      {/* Clock Phase */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: phase === 0 ? 1 : 0,
          scale: phase === 0 ? 1 : 0.5,
          rotate: phase === 0 ? 0 : -90,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Clock className="h-7 w-7 text-blue-500" />
        </div>
      </motion.div>

      {/* Transition Phase - Spinning */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: phase === 1 ? 1 : 0,
          rotate: phase === 1 ? 360 : 0,
          scale: phase === 1 ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-14 h-14 rounded-full bg-linear-to-r from-blue-500 to-green-500 flex items-center justify-center">
          <Zap className="h-7 w-7 text-white" />
        </div>
      </motion.div>

      {/* Checkmark Phase */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: phase === 2 ? 1 : 0,
          scale: phase === 2 ? [0.5, 1.1, 1] : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle className="h-7 w-7 text-white" />
        </div>
      </motion.div>

      {/* Success Ring */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: phase === 2 ? [1, 1.3, 1.3] : 1,
          opacity: phase === 2 ? [0, 0.5, 0] : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full h-full rounded-full border-2 border-green-500" />
      </motion.div>
    </div>
  );
};

// Animation 2: Three Steps Lighting Up
const StepsLightingAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((step) => (
        <motion.div
          key={step}
          className="relative"
          animate={{
            scale: activeStep === step ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Step Box */}
          <motion.div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            animate={{
              backgroundColor: activeStep >= step ? "rgb(34 197 94)" : "rgb(226 232 240)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-sm font-bold"
              animate={{
                color: activeStep >= step ? "#ffffff" : "#94a3b8",
              }}
            >
              {step + 1}
            </motion.span>
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-green-500"
            animate={{
              opacity: activeStep === step ? [0, 0.3, 0] : 0,
              scale: activeStep === step ? [1, 1.3, 1.3] : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Connector Line */}
          {step < 2 && (
            <motion.div
              className="absolute top-1/2 -right-2 w-2 h-0.5"
              animate={{
                backgroundColor: activeStep > step ? "rgb(34 197 94)" : "rgb(226 232 240)",
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Animation 3: Phone with Service Icons Popping
const PhoneServicesAnimation = () => {
  const [visibleIcons, setVisibleIcons] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIcons((prev) => (prev + 1) % 5);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: MessageCircle, color: "bg-blue-500", position: "top-1 left-1/2 -translate-x-1/2" },
    { icon: FileText, color: "bg-green-500", position: "bottom-3 left-1" },
    { icon: Bell, color: "bg-orange-500", position: "bottom-3 right-1" },
  ];

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Phone Body */}
      <div className="relative w-10 h-14 bg-slate-200 dark:bg-slate-700 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden">
        {/* Phone Screen */}
        <div className="absolute inset-1 bg-white dark:bg-slate-800 rounded-sm flex items-center justify-center">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </motion.div>
        </div>
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-300 dark:bg-slate-600 rounded-b-sm" />
      </div>

      {/* Service Icons - Popping Animation */}
      {services.map((service, index) => (
        <motion.div
          key={index}
          className={`absolute ${service.position}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: visibleIcons > index ? [0, 1.2, 1] : 0,
            opacity: visibleIcons > index ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className={`w-5 h-5 ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
            <service.icon className="h-3 w-3 text-white" />
          </div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {services.map((_, index) => (
          <motion.line
            key={index}
            x1="50%"
            y1="50%"
            x2={index === 0 ? "50%" : index === 1 ? "20%" : "80%"}
            y2={index === 0 ? "15%" : "85%"}
            stroke="rgb(59 130 246)"
            strokeWidth="1"
            strokeDasharray="2,2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: visibleIcons > index ? 1 : 0,
              opacity: visibleIcons > index ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </svg>
    </div>
  );
};

// Solution Animation Component - All in One App
const SolutionAnimation = () => {
  const [phase, setPhase] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 6);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle services on phone screen
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(serviceInterval);
  }, []);

  const services = [
    { icon: MessageCircle, label: "Lapor", color: "bg-blue-500" },
    { icon: FileText, label: "Surat", color: "bg-green-500" },
    { icon: Bell, label: "Info", color: "bg-orange-500" },
  ];

  return (
    <div className="relative w-72 h-56 flex items-center justify-center">
      {/* Left Service Icons - Pop Animation */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase >= index ? [0, 1.2, 1] : 0,
              opacity: phase >= index ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: index * 0.15 }}
          >
            <div className={`w-10 h-10 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
              <service.icon className="h-5 w-5 text-white" />
            </div>
            {/* Glow effect on active */}
            <motion.div
              className={`absolute inset-0 ${service.color} rounded-xl`}
              animate={{
                opacity: phase === index ? [0, 0.4, 0] : 0,
                scale: phase === index ? [1, 1.4, 1.4] : 1,
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Connecting Lines - Drawing Effect */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {/* Line 1: Top icon to phone */}
        <motion.path
          d="M 50 50 Q 100 50 144 90"
          fill="none"
          stroke="rgb(59 130 246)"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: phase >= 3 ? 1 : 0,
            opacity: phase >= 3 ? 0.6 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        {/* Line 2: Middle icon to phone */}
        <motion.path
          d="M 50 112 L 144 112"
          fill="none"
          stroke="rgb(34 197 94)"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: phase >= 4 ? 1 : 0,
            opacity: phase >= 4 ? 0.6 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        {/* Line 3: Bottom icon to phone */}
        <motion.path
          d="M 50 174 Q 100 174 144 134"
          fill="none"
          stroke="rgb(249 115 22)"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: phase >= 5 ? 1 : 0,
            opacity: phase >= 5 ? 0.6 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </svg>

      {/* Phone - Center Solution */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Phone Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-blue-400/30 rounded-2xl blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 bg-green-400/20 rounded-2xl blur-2xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1.1, 1.2, 1.1],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Phone Body */}
        <div className="relative w-24 h-40 bg-slate-200 dark:bg-slate-700 rounded-2xl border-4 border-slate-300 dark:border-slate-600 overflow-hidden shadow-2xl">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-300 dark:bg-slate-600 rounded-b-lg z-10" />

          {/* Phone Screen */}
          <div className="absolute inset-2 top-4 bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
            {/* App Header */}
            <div className="bg-secondary h-6 flex items-center justify-center">
              <span className="text-white text-[8px] font-semibold">GovConnect</span>
            </div>

            {/* Service Icons Display */}
            <div className="p-2 space-y-1.5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-1.5 p-1 rounded-md transition-colors ${activeService === index ? "bg-secondary/10" : "bg-slate-100 dark:bg-slate-700"}`}
                  animate={{
                    scale: activeService === index ? [1, 1.05, 1] : 1,
                    opacity: activeService === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-4 h-4 ${service.color} rounded flex items-center justify-center`}>
                    <service.icon className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-[7px] font-medium truncate">{service.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Active indicator */}
            <motion.div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5"
            >
              {services.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-1 h-1 rounded-full"
                  animate={{
                    backgroundColor: activeService === index ? "rgb(34 60 110)" : "rgb(203 213 225)",
                    scale: activeService === index ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.div>
          </div>

          {/* Phone Bottom Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
        </div>

        {/* Success Badge */}
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            scale: phase >= 5 ? [0, 1.2, 1] : 0,
            opacity: phase >= 5 ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/60"
          style={{
            left: `${30 + i * 20}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

// FAQ Animation Component - Question to Answer
const FAQAnimation = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  // Floating particles for search visualization
  const particles = [
    { x: -20, delay: 0 },
    { x: 0, delay: 0.2 },
    { x: 20, delay: 0.4 },
  ];

  return (
    <div className="relative w-48 h-40 flex items-center justify-center">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-blue-500/10"
        animate={{
          opacity: phase === 3 ? [0.1, 0.3, 0.1] : 0.1,
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* FAQ Card */}
      <motion.div
        className="relative bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 w-36"
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: phase === 3 ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon Container - Question Mark / Lightbulb */}
        <div className="flex justify-center mb-3">
          <div className="relative w-12 h-12">
            {/* Question Mark Phase */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: phase < 2 ? 1 : 0,
                rotate: phase === 1 ? 360 : 0,
                scale: phase < 2 ? 1 : 0.5,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">?</span>
              </div>
            </motion.div>

            {/* Lightbulb Phase */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                scale: phase >= 2 ? [0.5, 1.1, 1] : 0.5,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                {/* Glow effect for lightbulb */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-400"
                  animate={{
                    opacity: phase === 3 ? [0, 0.5, 0] : 0,
                    scale: phase === 3 ? [1, 1.5, 1.5] : 1,
                  }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-400"
                  animate={{
                    opacity: phase === 3 ? [0, 0.3, 0] : 0,
                    scale: phase === 3 ? [1, 1.8, 1.8] : 1,
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fake text lines */}
        <div className="space-y-2">
          <motion.div
            className="h-2 rounded-full"
            animate={{
              backgroundColor: phase >= 2 ? "rgb(34 197 94)" : "rgb(226 232 240)",
              width: phase >= 2 ? "100%" : "60%",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-2 rounded-full"
            animate={{
              backgroundColor: phase >= 3 ? "rgb(34 197 94)" : "rgb(226 232 240)",
              width: phase >= 3 ? "100%" : "80%",
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.div
            className="h-2 w-1/2 rounded-full"
            animate={{
              backgroundColor: phase >= 3 ? "rgb(34 197 94)" : "rgb(226 232 240)",
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </div>
      </motion.div>

      {/* Floating Search Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bottom-4"
          style={{ left: `calc(50% + ${particle.x}px)` }}
          animate={{
            y: phase < 2 ? [0, -30, -60] : -60,
            opacity: phase < 2 ? [0.8, 0.5, 0] : 0,
          }}
          transition={{
            duration: 1,
            repeat: phase < 2 ? Infinity : 0,
            delay: particle.delay,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        </motion.div>
      ))}

      {/* Search dots moving up */}
      <motion.div
        className="absolute left-4 bottom-8"
        animate={{
          y: phase < 2 ? [0, -20, -40] : -40,
          opacity: phase < 2 ? [0.6, 0.3, 0] : 0,
        }}
        transition={{ duration: 1.2, repeat: phase < 2 ? Infinity : 0 }}
      >
        <div className="w-1 h-1 rounded-full bg-secondary" />
      </motion.div>

      <motion.div
        className="absolute right-4 bottom-10"
        animate={{
          y: phase < 2 ? [0, -25, -50] : -50,
          opacity: phase < 2 ? [0.6, 0.3, 0] : 0,
        }}
        transition={{ duration: 1.4, repeat: phase < 2 ? Infinity : 0, delay: 0.3 }}
      >
        <div className="w-1 h-1 rounded-full bg-green-400" />
      </motion.div>

      {/* Success checkmark */}
      <motion.div
        className="absolute -top-2 -right-2"
        animate={{
          scale: phase === 3 ? [0, 1.2, 1] : 0,
          opacity: phase === 3 ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
          <CheckCircle className="h-4 w-4 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Default ke mode terang
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20GovConnect`;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Kiri */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-dashboard.png"
                alt="GovConnect Logo"
                width={150}
                height={150}
                className="object-contain dark:brightness-0 dark:invert"
              />
            </Link>

            {/* Menu - Tengah (Desktop) */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <Link
                href="#masalah"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Masalah
              </Link>
              <Link
                href="#fitur"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Fitur
              </Link>
              <Link
                href="#cara-penggunaan"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Cara Kerja
              </Link>
              <Link
                href="#manfaat"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Manfaat
              </Link>
              <Link
                href="#testimoni"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Testimoni
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                FAQ
              </Link>
            </div>

            {/* Login & Theme Toggle - Kanan (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                {isDark ? (
                  <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
                )}
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
              <Button asChild size="sm" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                {isDark ? (
                  <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Layanan Kelurahan{" "}
                <span className="text-secondary">Dalam Satu Aplikasi</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                GovConnect membantu Kamu mengurus laporan, surat, dan informasi
                kelurahan dengan cepat dan mudah. Tidak perlu lagi antre
                berjam-jam atau bolak-balik ke kantor kelurahan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Mulai Sekarang
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="#cara-penggunaan">Pelajari Lebih Lanjut</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <ChatAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="masalah" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Masalah Umum Warga Saat Mengurus Layanan Kelurahan
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Berdasarkan survei, <strong>78% warga</strong> menghabiskan waktu
              lebih dari 2 jam hanya untuk mengurus satu dokumen di kelurahan.
              Antrean panjang, informasi tidak jelas, dan proses yang berbelit
              menjadi hambatan utama.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              {
                icon: Users,
                title: "Antrean Panjang",
                desc: "Warga seringkali harus menunggu berjam-jam hanya untuk urusan administrasi sederhana.",
                animation: {
                  x: [0, -4, 4, -4, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              },
              {
                icon: FileSignature,
                title: "Proses Manual",
                desc: "Pengisian formulir berulang secara manual yang melelahkan dan rentan kesalahan.",
                animation: {
                  rotate: [0, -8, 8, -8, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                },
              },
              {
                icon: FileQuestion,
                title: "Informasi Tidak Jelas",
                desc: "Kebingungan mencari syarat dan prosedur terbaru karena minimnya informasi terpusat.",
                animation: {
                  opacity: [0.6, 1, 0.6],
                  scale: [0.95, 1.05, 0.95],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.0,
                  },
                },
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="text-center h-full border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-4">
                      <motion.div animate={item.animation as any}>
                        <item.icon className="h-8 w-8 text-destructive" />
                      </motion.div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solusi Lengkap untuk Kebutuhan Anda
            </h2>
            <p className="text-muted-foreground text-lg">
              GovConnect hadir dengan empat fitur utama yang dirancang untuk
              mempermudah setiap urusan Anda dengan kelurahan.
            </p>
          </motion.div>

          {/* Two Column Layout: Animation + Features Grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left: Solution Animation */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex justify-center"
            >
              <SolutionAnimation />
            </motion.div>

            {/* Right: Features Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: MessageCircle,
                  title: "Lapor Masalah",
                  desc: "Laporkan masalah lingkungan seperti jalan rusak, sampah menumpuk, atau lampu mati langsung dari aplikasi.",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                },
                {
                  icon: FileText,
                  title: "Layanan Surat",
                  desc: "Ajukan surat pengantar, surat keterangan, atau dokumen lainnya tanpa perlu datang ke kelurahan.",
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                },
                {
                  icon: Bell,
                  title: "Informasi",
                  desc: "Dapatkan informasi terbaru tentang program, bantuan, dan kegiatan kelurahan secara real-time.",
                  color: "text-orange-500",
                  bg: "bg-orange-500/10",
                },
                {
                  icon: Search,
                  title: "Cek Status",
                  desc: "Pantau status pengajuan surat atau laporan Anda kapan saja dan di mana saja.",
                  color: "text-purple-500",
                  bg: "bg-purple-500/10",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader className="pb-2">
                      <div
                        className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="cara-penggunaan"
        className="py-16 md:py-24 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cara Kerja GovConnect
            </h2>
            <p className="text-muted-foreground text-lg">
              Hanya tiga langkah sederhana untuk menyelesaikan urusan Anda
            </p>
          </motion.div>

          {/* Two Column Layout: Animation + Steps */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Animation */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <HowItWorksAnimation />
            </motion.div>

            {/* Right: Steps */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  step: "01",
                  title: "Buka Website & Klik Tombol",
                  desc: "Buka halaman website GovConnect dan langsung klik tombol 'Mulai Sekarang' di bagian atas atau ikon WhatsApp di pojok kanan bawah.",
                  icon: Globe,
                  color: "bg-blue-500",
                },
                {
                  step: "02",
                  title: "Kirim Keluhan via WhatsApp",
                  desc: "Sampaikan keluhan atau keperluan Anda melalui tombol 'Hubungi WhatsApp' yang tersedia.",
                  icon: MessageCircle,
                  color: "bg-green-500",
                },
                {
                  step: "03",
                  title: "Admin Memproses",
                  desc: "Keluhan yang Anda kirim akan segera diproses oleh admin kelurahan dan Anda akan mendapat respons cepat.",
                  icon: CheckCircle,
                  color: "bg-primary",
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex gap-4 items-start group"
                >
                  <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        LANGKAH {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl">
              <Image
                src="/dashboard.png"
                alt="Dashboard Preview"
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="manfaat" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manfaat Utama untuk Warga
            </h2>
            <p className="text-muted-foreground text-lg">
              Nikmati kemudahan layanan kelurahan dengan berbagai keuntungan
            </p>
          </motion.div>

          {/* Animated Benefits Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Benefit 1: Hemat Waktu - Clock to Check Animation */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group bg-linear-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-card border-blue-100 dark:border-blue-900/30">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="flex justify-center mb-4">
                    <ClockToCheckAnimation />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Hemat Waktu</h3>
                  <p className="text-muted-foreground text-sm">
                    Proses yang biasanya 2-3 jam, kini hanya 10 menit dari rumah
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefit 2: Transparan - Steps Lighting Animation */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group bg-linear-to-b from-green-50 to-white dark:from-green-950/30 dark:to-card border-green-100 dark:border-green-900/30">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="flex justify-center mb-4 h-16 items-center">
                    <StepsLightingAnimation />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Transparan</h3>
                  <p className="text-muted-foreground text-sm">
                    Pantau status pengajuan secara real-time tanpa perlu menelepon
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefit 3: Mudah Diakses - Phone Services Animation */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group bg-linear-to-b from-purple-50 to-white dark:from-purple-950/30 dark:to-card border-purple-100 dark:border-purple-900/30">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="flex justify-center mb-4">
                    <PhoneServicesAnimation />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">Mudah Diakses</h3>
                  <p className="text-muted-foreground text-sm">
                    Bisa digunakan kapan saja, di mana saja melalui smartphone
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefit 4: Gratis - Static with pulse */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group bg-linear-to-b from-rose-50 to-white dark:from-rose-950/30 dark:to-card border-rose-100 dark:border-rose-900/30">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="relative w-16 h-16 flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center">
                        <Heart className="h-7 w-7 text-rose-500" />
                      </div>
                      {/* Pulse rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-rose-400"
                        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-rose-400"
                        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-rose-700 dark:text-rose-400">Gratis</h3>
                  <p className="text-muted-foreground text-sm">
                    Layanan GovConnect sepenuhnya gratis untuk semua warga
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-muted-foreground text-lg">
              Testimoni dari warga yang sudah menggunakan GovConnect
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Budi Santoso",
                role: "Warga RT 05",
                text: "Dulu ngurus surat pengantar bisa setengah hari. Sekarang dengan GovConnect, saya ajukan dari rumah dan tinggal ambil di kelurahan. Praktis banget!",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Siti Rahayu",
                role: "Ibu Rumah Tangga",
                text: "Saya lapor jalan rusak depan rumah lewat aplikasi. Dalam 3 hari sudah diperbaiki. Responsnya cepat dan ada notifikasi terus.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Ahmad Hidayat",
                role: "Pedagang",
                text: "Sebagai pedagang, waktu sangat berharga. GovConnect membantu saya mengurus izin tanpa harus tutup warung. Terima kasih!",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>





      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted-foreground text-lg">
              Temukan jawaban untuk pertanyaan umum tentang GovConnect
            </p>
          </motion.div>

          {/* Two Column Layout: Animation + FAQ */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Animation */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex justify-center items-center"
            >
              <FAQAnimation />
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Apakah GovConnect gratis untuk digunakan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Ya, GovConnect sepenuhnya gratis untuk semua warga. Tidak ada
                    biaya pendaftaran maupun biaya penggunaan. Layanan ini
                    merupakan inisiatif pemerintah untuk meningkatkan pelayanan
                    publik.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Bagaimana cara mendaftar di GovConnect?
                  </AccordionTrigger>
                  <AccordionContent>
                    Pendaftaran sangat mudah. Anda hanya perlu menyiapkan NIK dan
                    nomor HP aktif. Kunjungi halaman pendaftaran, isi data diri,
                    dan verifikasi melalui OTP yang dikirim ke nomor HP Anda.
                    Proses ini hanya membutuhkan waktu sekitar 2 menit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Apakah data saya aman di GovConnect?
                  </AccordionTrigger>
                  <AccordionContent>
                    Keamanan data adalah prioritas utama kami. GovConnect
                    menggunakan enkripsi SSL 256-bit, server tersertifikasi ISO
                    27001, dan tidak pernah membagikan data Anda ke pihak ketiga
                    tanpa persetujuan.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Berapa lama proses pengajuan surat?
                  </AccordionTrigger>
                  <AccordionContent>
                    Untuk pengajuan surat standar seperti surat pengantar atau
                    surat keterangan, prosesnya biasanya selesai dalam 1-2 hari
                    kerja. Anda akan menerima notifikasi ketika surat sudah siap
                    diambil atau dikirim secara digital.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-dashboard.png"
                  alt="GovConnect Logo"
                  width={150}
                  height={150}
                  className="object-contain dark:brightness-0 dark:invert"
                />
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                GovConnect adalah platform digital yang menghubungkan warga
                dengan layanan kelurahan secara cepat, mudah, dan transparan.
              </p>
              <div className="flex gap-4">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Lapor Masalah
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Layanan Surat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Informasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Cek Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+62 896-6817-6764</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@govconnect.id</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Jl. Pelayanan No. 1, Jakarta</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} GovConnect.</p>
            <p className="mt-1">
              Development by{" "}
              <Link
                href="https://genfity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Genfity
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </Link>
      </motion.div>
    </div>
  );
}
