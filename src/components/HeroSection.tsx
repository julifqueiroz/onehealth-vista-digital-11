import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-left">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6 text-sm font-medium text-blue-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Sistema ERP mais Inovador do Mercado
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-slate-800">Revolucione sua</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Farmácia de Manipulação
              </span>
              <br />
              <span className="text-slate-800">com o</span>{' '}
              <span className="text-red-600 font-black">OneHealth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              O sistema ERP mais completo e inovador do mercado, desenvolvido especialmente para farmácias de manipulação que buscam 
              <span className="font-semibold text-slate-800"> excelência operacional</span> e 
              <span className="font-semibold text-slate-800"> crescimento sustentável</span>.
            </p>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="grid grid-cols-3 gap-6 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Farmácias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-slate-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-slate-600">Sistema Online</div>
              </div>
            </motion.div>

            {/* Benefits list */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }} className="space-y-3 mb-8">
              {["Migração gratuita e sem complicações", "Conformidade total com ANVISA", "Suporte técnico especializado"].map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700">{benefit}</span>
                </div>)}
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group" onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Quero agendar uma demonstração do OneHealth para minha farmácia de manipulação", "_blank");
            }}>
                Agendar Demonstração Gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }} className="mt-8 flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-red-700">
                OFERTA ESPECIAL: Condições exclusivas até 30 de Junho 2025
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }} className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Floating elements */}
              <motion.div animate={{
              y: [-10, 10, -10]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg opacity-80"></motion.div>
              
              <motion.div animate={{
              y: [10, -10, 10]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-lg opacity-80"></motion.div>

              {/* Main dashboard mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 backdrop-blur-sm border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 bg-slate-100 h-6 rounded-md"></div>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/lovable-uploads/a007032f-c9a8-4de8-9e6c-db1c0cd23576.png" alt="OneHealth Dashboard" className="w-full h-full object-cover" onError={e => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
                }} />
                </div>

                {/* Floating metrics */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 1,
                duration: 0.6
              }} className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1">Vendas Hoje</div>
                  <div className="text-lg font-bold text-emerald-600">R$ 12.450</div>
                  <div className="text-xs text-emerald-600">+15% ↗</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
