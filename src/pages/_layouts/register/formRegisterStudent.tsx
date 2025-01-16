import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { CiCircleAlert } from 'react-icons/ci';

import { toast, ToastContainer } from 'react-toastify';
import { WhatsAppChat } from '../../../components/WhatsAppButton';

export const FormRegisterStudent = () => {
  const notify = () => toast("Registro realizado com sucesso!")
  const [form, setForm] = useState({
    nome: '',
    dataNascimento: '',
    responsavel: '',
    biResponsavel: '',
    telefone: '',
    email: '',
    endereco: '',
    alergias: '',
    medicamentos: '',
    observacoes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'nome':
        return value.length < 3 ? 'Nome deve ter no mínimo 3 caracteres' : '';
      case 'dataNascimento':
        return !value ? 'Data de nascimento é obrigatória' : '';
      case 'responsavel':
        return value.length < 3 ? 'Nome do responsável deve ter no mínimo 3 caracteres' : '';
      case 'biResponsavel':
        return !/^[a-zA-Z0-9]{14}$/.test(value) ? 'B.I deve conter 14 caracteres, entre números e letras' : '';
      case 'telefone':
        return !/^\d{10,11}$/.test(value) ? 'Telefone inválido' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Email inválido' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validadar todos os campos
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);

      console.log('Formulário válido:', form);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Registro de Criança</h2>
            <p className="mt-2 text-gray-600">Preencha todos os campos obrigatórios (*)</p>
          </div>

          {submitted && (
            <div className="bg-green-50 p-4 rounded-md flex items-center gap-2">
              <BiCheck className="text-green-500" />
              <span className="text-green-700">Registro realizado com sucesso!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informações Pessoais */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Informações Pessoais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.nome 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.nome && (
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <CiCircleAlert className="w-4 h-4 mr-1" />
                      {errors.nome}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Data de Nascimento *
                  </label>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={form.dataNascimento}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.dataNascimento 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.dataNascimento && (
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <CiCircleAlert className="w-4 h-4 mr-1" />
                      {errors.dataNascimento}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Informações do Responsável */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Informações do Responsável
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    name="responsavel"
                    value={form.responsavel}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.responsavel 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.responsavel && (
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <CiCircleAlert className="w-4 h-4 mr-1" />
                      {errors.responsavel}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    B.I do Responsável *
                  </label>
                  <input
                    type="text"
                    name="cpfResponsavel"
                    value={form.cpfResponsavel}
                    onChange={handleChange}
                    placeholder="Nº do Bilhete de Identidade"
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.cpfResponsavel 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.cpfResponsavel && (
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <CiCircleAlert className="w-4 h-4 mr-1" />
                      {errors.cpfResponsavel}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="DDD + Número"
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.telefone 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.telefone && (
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <CiCircleAlert className="w-4 h-4 mr-1" />
                      {errors.telefone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <CiCircleAlert className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Informações Adicionais */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Informações Adicionais
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Endereço Completo
                  </label>
                  <textarea
                    name="endereco"
                    value={form.endereco}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Alergias
                  </label>
                  <textarea
                    name="alergias"
                    value={form.alergias}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Medicamentos
                  </label>
                  <textarea
                    name="medicamentos"
                    value={form.medicamentos}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Observações
                  </label>
                  <textarea
                    name="observacoes"
                    value={form.observacoes}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            <div className="flex justify-end pt-6">
              <button
                onClick={notify}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-colors duration-200"
              >
                Confirmar a Inscrição
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
      <WhatsAppChat/>
    </div>
  );
};
