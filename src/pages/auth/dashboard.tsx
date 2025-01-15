import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  FileText, 
  Settings, 
  MessageSquare, 
  CreditCard, 
  FolderOpen,
  Bell,
  Search,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { Header } from './Header';

const DashboardEscolar = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [activeMenu, setActiveMenu] = useState('alunos');

  const menuItems = isAdmin ? [
    { id: 'professores', label: 'Professores', icon: Users },
    { id: 'alunos', label: 'Alunos', icon: BookOpen },
    { id: 'relatorios', label: 'Relatórios', icon: FileText },
    { id: 'configuracoes', label: 'Configurações', icon: Settings }
  ] : [
    { id: 'acompanhamento', label: 'Acompanhamento', icon: BookOpen },
    { id: 'mensagens', label: 'Mensagens', icon: MessageSquare },
    { id: 'pagamentos', label: 'Pagamentos', icon: CreditCard },
    { id: 'documentos', label: 'Documentos', icon: FolderOpen }
  ];

  const renderContent = () => {
    if (isAdmin) {
      switch (activeMenu) {
        case 'professores':
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Gestão de Professores</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Adicionar Professor
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((prof) => (
                  <div key={prof} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                      <div>
                        <h3 className="font-semibold">Professor {prof}</h3>
                        <p className="text-sm text-gray-600">Matemática</p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="text-blue-600 hover:underline">Editar</button>
                      <button className="text-red-600 hover:underline">Remover</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'alunos':
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Lista de Alunos</h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar aluno..."
                      className="pl-10 pr-4 py-2 border rounded-lg"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Novo Aluno
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Turma</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[1, 2, 3].map((aluno) => (
                      <tr key={aluno}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                            <div className="ml-4">
                              <div className="text-sm font-medium">Aluno {aluno}</div>
                              <div className="text-sm text-gray-500">ID: {1000 + aluno}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">Turma A</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Ativo
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                          <button className="text-red-600 hover:text-red-900">Remover</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        default:
          return null;
      }
    } else {
      switch (activeMenu) {
        case 'acompanhamento':
          return (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Acompanhamento dos Filhos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1].map((child) => (
                  <div key={child} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">João Silva</h3>
                        <p className="text-sm text-gray-600">Turma A - Manhã</p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Presente Hoje
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium">Frequência</h4>
                        <div className="h-2 bg-gray-200 rounded-full mt-2">
                          <div className="h-2 bg-green-500 rounded-full w-11/12"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Atividades Recentes</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="text-sm text-gray-600">Participou da aula de música</li>
                          <li className="text-sm text-gray-600">Completou atividade de arte</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'mensagens':
          return (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Mensagens</h2>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                  <input
                    type="text"
                    placeholder="Buscar mensagens..."
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="divide-y">
                  {[1, 2, 3].map((msg) => (
                    <div key={msg} className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                          <div>
                            <h3 className="font-medium">Professora Ana</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Relatório de atividades da semana...
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">2h atrás</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800">
              {isAdmin ? 'Painel Admin' : 'Área do Encarregado'}
            </h1>
          </div>
          <nav className="mt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                    activeMenu === item.id ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"><Header /></div>
                <span className="text-sm font-medium">Admin</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <LogOut className="w-5 h-5 mr-2" />
              Sair
            </button>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardEscolar;