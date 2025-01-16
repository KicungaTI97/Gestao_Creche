import React from 'react';
import { WhatsAppChat } from '../components/WhatsAppButton';

export function About() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a Crechekids</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
          <p>Na Crechekids, acreditamos que cada criança é única...</p>
          {/* ... outros conteúdos */}
        </div>
        <div>
          <img src="/images/creche.jpg" alt="Crechekids" className="rounded-lg" />
        </div>
      </div>

      {/* Outras seções: Nossa Visão, Nossa História, etc. */}

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Depoimentos</h2>
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"A Crechekids mudou a nossa rotina para melhor!..."</p>
            <p className="text-gray-500">– Ana Pereira, mãe da Maria (4 anos)</p>
          </div>
          {/* ... outros depoimentos */}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <p>Rua das Flores, nº 123</p>
        <p>Telefone: (XX) XXXX-XXXX</p>
        <p>Email: contato@crechekids.com.br</p>
      </div>
      <WhatsAppChat/>
    </div>
  );
}
