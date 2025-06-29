
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PromotionSection = () => {
  return (
    <section id="promotion" className="relative bg-onehealth-gray overflow-hidden py-[50px]">
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-onehealth-blue opacity-10"></div>
      <div className="absolute bottom-10 -left-10 w-32 h-32 rounded-full bg-onehealth-green opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Promoção <span className="text-gradient">Exclusiva</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl font-bold">Oferta por tempo limitado: Condições especiais para quem assinar contrato de adesão do OneHealth® até 30 de Julho de 2025.</p>
        </div>

        {/* Destaque para a Consulfarma */}
        <div className="mb-12">
          <Card className="p-8 shadow-xl border-t-4 border-red-500 relative overflow-hidden bg-gradient-to-r from-red-50 to-orange-50">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-medium">
              CONSULFARMA
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                🎉 Aproveite 20% de desconto na implantação do sistema OneHealth durante a Consulfarma! 🎉
              </h3>
              <Button 
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg py-4" 
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Quero aproveitar o desconto de 20% na implantação durante a Consulfarma!", "_blank");
                }}
              >
                Garantir Desconto da Consulfarma
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-xl border-t-4 border-onehealth-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-onehealth-blue text-white px-4 py-1 text-sm font-medium">
              OFERTA ESPECIAL
            </div>
            <h3 className="text-2xl font-bold mb-6">Condição Comercial Diferenciada</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-onehealth-blue/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>30% de desconto</strong> na taxa de implantação
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-onehealth-blue/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>20% de desconto</strong> nas 3 primeiras mensalidades
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-onehealth-blue/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Treinamento completo</strong> para toda a equipe sem custo adicional
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-onehealth-blue/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Migração gratuita</strong> dos dados de sistemas anteriores
                </div>
              </li>
            </ul>
            
            <div className="mt-auto">
              <Button 
                className="w-full bg-onehealth-blue hover:bg-onehealth-darkblue transition-colors" 
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Quero aproveitar a promoção especial do OneHealth para minha farmácia", "_blank");
                }}
              >
                Garanta Esta Oferta
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 shadow-xl border-t-4 border-onehealth-green relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-onehealth-green text-white px-4 py-1 text-sm font-medium">
              CASHBACK
            </div>
            <h3 className="text-2xl font-bold mb-6">Programa de Indicação</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-onehealth-green/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>2 meses de mensalidade grátis</strong> para cada farmácia parceira indicada que se tornar cliente
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-onehealth-green/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>20% de cashback</strong> por 06 meses para a farmácia indicada
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-onehealth-green/10 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onehealth-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Sem limite</strong> para o número de indicações
                </div>
              </li>
            </ul>
            
            <div className="mt-auto">
              <Button 
                className="w-full bg-onehealth-green hover:opacity-90 transition-colors" 
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Quero participar do programa de indicação do OneHealth", "_blank");
                }}
              >
                Participar do Programa
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            * Ofertas válidas até 30/07/2025. Consulte nossos consultores para mais detalhes e condições.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
