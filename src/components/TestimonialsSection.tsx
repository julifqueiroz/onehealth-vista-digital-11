import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Building } from 'lucide-react';
const testimonials = [{
  name: "Lucas Valões",
  position: "Gestor",
  company: "Excel Fórmulas",
  location: "São Paulo, SP",
  quote: "A migração para o OneHealth foi praticamente instantânea, garantindo total segurança e integridade das nossas informações. Em poucos dias, já estávamos operando com 100% dos nossos dados preservados!",
  rating: 5,
  results: "Migração em 2 dias",
  avatar: "LV"
}, {
  name: "Marcone Ferreira",
  position: "Proprietário",
  company: "A Fórmula",
  location: "Rio de Janeiro, RJ",
  quote: "Após tentar vários sistemas no mercado, o OneHealth se destacou pela facilidade de uso e recursos específicos para manipulação. O suporte técnico é excepcional.",
  rating: 5,
  results: "300% ROI em 6 meses",
  avatar: "MF"
}, {
  name: "Igor Brito",
  position: "Proprietário",
  company: "Atrium Farma",
  location: "Belo Horizonte, MG",
  quote: "A gestão da farmácia se tornou muito mais prática com o OneHealth. Os indicadores disponibilizados nos dão visibilidade completa do negócio, facilitando a tomada de decisões e melhorando nossos resultados financeiros.",
  rating: 5,
  results: "45% aumento vendas",
  avatar: "IB"
}];
const TestimonialsSection = () => {
  return <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <Star className="w-4 h-4" />
            Depoimentos Reais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Veja como farmácias de manipulação de todo o Brasil estão transformando seus negócios 
            com o OneHealth e alcançando resultados extraordinários.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="group">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-800">{testimonial.name}</h3>
                        <p className="text-slate-600 text-sm">{testimonial.position}</p>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                          <Building className="w-3 h-3" />
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Footer */}
                  <div className="space-y-4">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                    </div>

                    {/* Location and Results */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                      <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.results}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </div>

        {/* Stats Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Junte-se a mais de 50 farmácias que já transformaram seus negócios</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm">Farmácias Atendidas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm">Suporte</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">6 meses</div>
              <div className="text-blue-100 text-sm">ROI Médio</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default TestimonialsSection;