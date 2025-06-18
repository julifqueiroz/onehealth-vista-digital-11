
import React from 'react';

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={() => {
          window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Vi sua divulgação e gostaria de saber mais sobre o OneHealth", "_blank");
        }}
        className="bg-[#25D366] hover:bg-[#1da951] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Contate-nos pelo WhatsApp"
      >
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.174-.01-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.04 21.5c-1.584 0-3.157-.302-4.61-.886l-5.4 1.419 1.453-5.266c-.66-1.523-.994-3.152-.994-4.792C2.489 6.8 6.796 2.5 12.04 2.5 17.284 2.5 21.6 6.8 21.6 11.975c0 5.176-4.306 9.475-9.56 9.475z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsappButton;
