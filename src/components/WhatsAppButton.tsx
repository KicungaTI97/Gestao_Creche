import { useState } from 'react';
import { BiLogoWhatsapp, BiX } from 'react-icons/bi' 

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Substitua com seu número de WhatsApp (formato internacional)
  const phoneNumber = "+244937811748";
  // Mensagem padrão
  const defaultMessage = "Olá! Gostaria de saber mais sobre seus produtos.";
  
  const handleChat = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Modal */}
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg w-72 transform transition-all duration-300 ease-in-out animate-fade-up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Chat WhatsApp</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <BiX size={20} className='cursor-pointer' />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-600 text-sm mb-2">
              Olá! Como posso ajudar você hoje?
            </p>
            <p className="text-gray-500 text-xs">
              Normalmente respondemos em até 5 minutos
            </p>
          </div>
          
          {/* Botão para iniciar conversa */}
          <button
            onClick={handleChat}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex cursor-pointer items-center justify-center gap-2"
          >
            <BiLogoWhatsapp size={20} />
            Iniciar Conversa
          </button>
        </div>
      )}
      
      {/* Pulse Effect and Icon same as previous code */}
 
      {/* Botão flutuante do WhatsApp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
        {/* WhatsApp Logo */}
        <div className="relative">
          <BiLogoWhatsapp size={24} />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping" />
          )}
        </div>
      </button>
    </div>
  );
};
