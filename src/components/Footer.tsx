
import React from 'react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-onehealth-darkblue text-white pt-16 pb-8 bg-gray-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <span className="font-bold text-2xl">
                <span className="text-white">One</span>
                <span className="text-onehealth-green">Health</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">Transformando a gestão de farmácias de manipulação com tecnologia e inovação.</p>
            
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-onehealth-green transition-colors">Início</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-onehealth-green transition-colors">Funcionalidades</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-onehealth-green transition-colors">Benefícios</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-onehealth-green transition-colors">Depoimentos</a></li>
              <li><a href="#promotion" className="text-gray-300 hover:text-onehealth-green transition-colors">Promoções</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-onehealth-green transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Soluções</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-onehealth-green transition-colors">Para Farmácias de Manipulação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-onehealth-green transition-colors">Para Pequenas Farmácias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-onehealth-green transition-colors">Para Redes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-onehealth-green transition-colors">Integração com Fornecedores</a></li>
              <li><a href="#" className="text-gray-300 hover:text-onehealth-green transition-colors">Análises e Relatórios</a></li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MindTech. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Serviço</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bloco branco com informações da empresa */}
      <div className="bg-white text-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm">
            <p className="mb-1">
              <strong>CNPJ:</strong> 59.479.613/0001-04
            </p>
            <p>
              <strong>Razão Social:</strong> MINDTECH SOLUTIONS LTDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
