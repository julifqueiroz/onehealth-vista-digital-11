import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pharmacy: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Create form data to send
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('pharmacy', formData.pharmacy);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('to', 'contato@mindtech.tec.br');
      formDataToSend.append('subject', 'Contato via Website OneHealth');

      // Send form data using a form submission service
      const response = await fetch('https://formsubmit.co/contato@mindtech.tec.br', {
        method: 'POST',
        body: formDataToSend
      });
      if (!response.ok) {
        throw new Error('Falha ao enviar o formulário');
      }

      // Log form submission for debugging
      console.log('Form submitted:', formData);

      // Show success message
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Um de nossos consultores entrará em contato em breve."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        pharmacy: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="bg-white py-[50px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto font-bold">
            Estamos prontos para ajudar sua farmácia de manipulação a alcançar novos patamares de eficiência e sucesso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-onehealth-gray rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4" action="https://formsubmit.co/contato@mindtech.tec.br" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Digite seu nome completo" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Digite seu e-mail" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(00) 00000-0000" />
              </div>
              
              <div>
                <label htmlFor="pharmacy" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Farmácia
                </label>
                <Input id="pharmacy" name="pharmacy" value={formData.pharmacy} onChange={handleChange} required placeholder="Digite o nome da sua farmácia" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem (opcional)
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Como podemos ajudar sua farmácia?" rows={4} />
              </div>
              
              {/* Hidden fields for FormSubmit.co */}
              <input type="hidden" name="_subject" value="Contato via Website OneHealth" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <Button type="submit" className="w-full bg-onehealth-blue hover:bg-onehealth-darkblue text-[960315] bg-[960315] text-[#fffefe] bg-onehealth-red" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col lg:pl-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 py-[5px] my-[45px]">Contato Direto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-onehealth-blue/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onehealth-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-gray-700">(71) 99934-1805</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-onehealth-blue/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onehealth-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">E-mail</h4>
                    <p className="text-gray-700">contato@mindtech.tec.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-onehealth-blue/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onehealth-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Endereço</h4>
                    <p className="text-gray-700">Av. Antônio Carlos Magalhães, 846 | 
Salvador BA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="bg-gradient-onehealth text-white p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Atendimento Imediato</h4>
                <p className="mb-6">
                  Não quer esperar? Fale diretamente com um de nossos consultores via WhatsApp para uma resposta rápida.
                </p>
                <Button variant="outline" onClick={() => {
                window.open("https://api.whatsapp.com/send?phone=5571999341805&text=Olá! Gostaria de mais informações sobre o OneHealth", "_blank");
              }} className="w-full text-onehealth-blue border-none text-[#f1f6f1] bg-[#008e00]">
                  <svg className="w-5 h-5 mr-2" fill="#25D366" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Iniciar Conversa no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;