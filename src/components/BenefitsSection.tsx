
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Heart,
  Clock,
  Users,
  BarChart3,
  Award
} from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Aumento de Produtividade",
    description: "Otimize processos operacionais e reduza o tempo gasto em tarefas administrativas em até 65% com automação inteligente.",
    metric: "+65%",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Redução de Custos",
    description: "Elimine gastos com servidores físicos e suporte técnico presencial, reduzindo drasticamente os custos de infraestrutura de TI.",
    metric: "-30%",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 3,
    title: "Controle de Qualidade",
    description: "Garanta a conformidade com normas regulatórias e eleve o padrão de qualidade dos seus produtos com monitoramento contínuo.",
    metric: "100%",
    icon: Shield,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Satisfação do Cliente",
    description: "Ofereça atendimento personalizado e ágil, aumentando a satisfação e fidelização dos seus clientes com histórico completo.",
    metric: "+85%",
    icon: Heart,
    color: "from-pink-500 to-pink-600"
  }
];

const additionalBenefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatização de processos repetitivos"
  },
  {
    icon: Users,
    title: "Equipe Mais Eficiente",
    description: "Treinamentos inclusos e suporte contínuo"
  },
  {
    icon: BarChart3,
    title: "Decisões Baseadas em Dados",
    description: "Analytics avançados e relatórios em tempo real"
  },
  {
    icon: Award,
    title: "Certificações e Compliance",
    description: "Conformidade automática com regulamentações"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Resultados Comprovados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefícios{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Mensuráveis
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            O OneHealth transforma a maneira como sua farmácia de manipulação opera, gerando resultados 
            mensuráveis e impactando diretamente a sua lucratividade e eficiência operacional.
          </p>
        </motion.div>
        
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 relative overflow-hidden h-full">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                      {benefit.metric}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <BarChart3 className="w-4 h-4" />
                ROI Comprovado
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Retorno sobre investimento em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  menos de 6 meses
                </span>
              </h3>
              <p className="text-lg text-slate-300 mb-8">
                Nossos clientes relatam retorno sobre o investimento em menos de 6 meses após implementação do OneHealth, 
                com economia média de 30% nos custos operacionais e aumento de 25% na margem de lucro.
              </p>
              
              {/* ROI Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">30%</div>
                  <div className="text-sm text-slate-300">Economia Operacional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
                  <div className="text-sm text-slate-300">Aumento na Margem</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                "Redução de Desperdícios",
                "Otimização de Processos",
                "Aumento de Vendas",
                "Fidelização de Clientes"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {additionalBenefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
