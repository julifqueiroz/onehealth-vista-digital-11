import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Pill, Package, Phone, Cloud, BarChart3, Users, Building2, ShieldCheck, ArrowRight, Zap, Globe, TrendingUp } from 'lucide-react';
const features = [{
  title: "Gestão Completa de Fórmulas",
  description: "Cadastre e gerencia suas fórmulas com controle de custos, margens e rastreabilidade completa de insumos.",
  icon: Pill,
  color: "from-blue-500 to-blue-600"
}, {
  title: "Controle de Estoque Inteligente",
  description: "Automatize seu controle de estoque com alertas de ponto de ressuprimento e previsão de demanda baseada em IA.",
  icon: Package,
  color: "from-emerald-500 to-emerald-600"
}, {
  title: "Call Center Integrado",
  description: "Ferramenta 100% nativa do OneHealth, sem necessidade de integrações. Agilize o atendimento e melhore a experiência do cliente.",
  icon: Phone,
  color: "from-purple-500 to-purple-600"
}, {
  title: "Sistema 100% Online (SaaS)",
  description: "Acesse de qualquer lugar, sem custos de infraestrutura. Atualizações automáticas e suporte contínuo inclusos.",
  icon: Cloud,
  color: "from-cyan-500 to-cyan-600"
}, {
  title: "Dashboard Financeiro Avançado",
  description: "Acompanhe em tempo real o desempenho financeiro com relatórios personalizáveis e análises preditivas.",
  icon: BarChart3,
  color: "from-orange-500 to-orange-600"
}, {
  title: "CRM Personalizado",
  description: "Mantenha histórico completo de clientes para oferecer atendimento personalizado e aumentar a fidelização.",
  icon: Users,
  color: "from-pink-500 to-pink-600"
}, {
  title: "Gestão de Redes Franqueadas",
  description: "Controle completo da operação de cada unidade franqueada com padronização de processos e análise comparativa.",
  icon: Building2,
  color: "from-indigo-500 to-indigo-600"
}, {
  title: "Conformidade RDC/ANVISA",
  description: "Conformidade garantida com todas as regulamentações ANVISA para farmácias de manipulação, sempre atualizada.",
  icon: ShieldCheck,
  color: "from-red-500 to-red-600"
}];
const benefits = [{
  icon: Zap,
  title: "Implementação Rápida",
  description: "Sistema operacional em menos de 48 horas"
}, {
  icon: Globe,
  title: "Acesso Universal",
  description: "Funciona em qualquer dispositivo, anywhere"
}, {
  icon: TrendingUp,
  title: "ROI Garantido",
  description: "Retorno sobre investimento em 6 meses"
}];
const FeaturesSection = () => {
  return <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <Zap className="w-4 h-4" />
            Funcionalidades Avançadas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo que sua farmácia precisa em{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              uma única plataforma
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-bold">O OneHealth® reúne todas as ferramentas que sua farmácia de manipulação precisa para otimizar operações, garantir conformidade regulatória e expandir seus negócios com segurança.</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <Card className="group p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>)}
        </div>

        {/* Special Section for Franchise Management */}
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
      }} className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Building2 className="w-4 h-4" />
                Exclusivo para Redes
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Única ferramenta pensada para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Redes Franqueadoras
                </span>
              </h3>
              <p className="text-lg text-slate-300 mb-8">
                Gerencie toda sua rede de franquias com controle centralizado, padronização de processos e análises comparativas em tempo real.
              </p>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold group" onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=5571999341805&text=Olá! Quero saber mais sobre a gestão de redes franqueadas no OneHealth", "_blank");
            }}>
                Saiba Mais sobre Franquias
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-lg font-bold mb-3 text-blue-300">Gestão Centralizada</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Controle de todas as unidades em painel único
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Análise comparativa de performance entre franquias
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Gestão de metas e indicadores por unidade
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-lg font-bold mb-3 text-purple-300">Padronização de Processos</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    Fórmulas e processos padronizados em todas as unidades
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    Controle de qualidade garantido em todas as franquias
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    Replicação automática de boas práticas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Row */}
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
      }} className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-slate-800">{benefit.title}</h4>
              <p className="text-slate-600">{benefit.description}</p>
            </div>)}
        </motion.div>
      </div>
    </section>;
};
export default FeaturesSection;