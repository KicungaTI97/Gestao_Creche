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
  LogOut,
} from 'lucide-react';
import { Header } from './Header'; // Import your Header component
import { useClerk, useUser } from '@clerk/clerk-react';

export const DashboardEscolar = () => {
  const [isAdmin, setIsAdmin] = useState(true); // Assuming admin for now
  const [activeMenu, setActiveMenu] = useState('alunos');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [professors, setProfessors] = useState([
    { id: 1, name: 'Ana Silva', subject: 'Matemática', image: null },
    { id: 2, name: 'João Santos', subject: 'Português', image: null },
    { id: 3, name: 'Maria Oliveira', subject: 'Ciências', image: null },
  ]);
  const [students, setStudents] = useState([
    { id: 1001, name: 'Pedro Almeida', class: 'Turma A', status: 'Ativo', image: null },
    { id: 1002, name: 'Sofia Costa', class: 'Turma B', status: 'Ativo', image: null },
    { id: 1003, name: 'Lucas Ferreira', class: 'Turma A', status: 'Inativo', image: null },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const { signOut } = useClerk(); // Assuming you're using Clerk for authentication

  const handleSignOut = () => {
    signOut({
      redirectUrl: '/', // Redirect to login page after sign out
    });
  };

  const handleAddProfessor = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProfessor = {
      id: professors.length + 1,
      name: formData.get('name'),
      subject: formData.get('subject'),
      image: null, // Add image handling if needed
    };
    setProfessors([...professors, newProfessor]);
    setShowModal(false);
  };

  const handleAddStudent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newStudent = {
      id: 1000 + students.length + 1,
      name: formData.get('name'),
      class: formData.get('class'),
      status: 'Ativo',
      image: null, // Add image handling if needed
    };
    setStudents([...students, newStudent]);
    setShowModal(false);
  };

  const handleRemove = (id, type) => {
    if (type === 'professor') {
      setProfessors(professors.filter((prof) => prof.id !== id));
    } else {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const {user} = useUser();
  //const isAdmin = user?.roles.includes('admin');

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-bold mb-4">
          {modalType === 'professor' ? 'Adicionar Professor' : 'Adicionar Aluno'}
        </h3>
        <form onSubmit={modalType === 'professor' ? handleAddProfessor : handleAddStudent}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
            <label className="block text-sm font-medium mb-1">
                {modalType === 'professor' ? 'Disciplina' : 'Turma'}
              </label>
              <input
                type="text"
                name={modalType === 'professor' ? 'subject' : 'class'}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  const renderContent = () => {
    if (isAdmin) {
      switch (activeMenu) {
        case 'professores':
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Gestão de Professores</h2>
                <button
                  onClick={() => {
                    setModalType('professor');
                    setShowModal(true);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Adicionar Professor
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {professors.map((prof) => (
                  <div key={prof.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200"></div> 
                      <div>
                        <h3 className="font-semibold">{prof.name}</h3>
                        <p className="text-sm text-gray-600">{prof.subject}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleRemove(prof.id, 'professor')}
                        className="text-red-600 hover:underline"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'alunos':
          const filteredStudents = students.filter(
            (student) =>
              student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              student.class.toLowerCase().includes(searchTerm.toLowerCase())
          );
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Lista de Alunos</h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar aluno..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-lg"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                  <button
                    onClick={() => {
                      setModalType('student');
                      setShowModal(true);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Novo Aluno
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Nome
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Turma
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                            <div className="ml-4">
                              <div className="text-sm font-medium">{student.name}</div>
                              <div className="text-sm text-gray-500">ID: {student.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{student.class}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              student.status === 'Ativo'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium">
                          <button
                            onClick={() => handleRemove(student.id, 'student')}
                            className="text-red-600 hover:text-red-900"
                          >
                            Remover
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        case 'relatorios':
          return (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Relatórios</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-4">Estatísticas Gerais</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total de Alunos</span>
                      <span className="font-medium">{students.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total de Professores</span>
                      <span className="font-medium">{professors.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Alunos Ativos</span>
                      <span className="font-medium">
                        {students.filter((s) => s.status === 'Ativo').length}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-4">Distribuição por Turma</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(students.map((s) => s.class))).map(
                      (className) => (
                        <div key={className} className="flex justify-between">
                          <span className="text-gray-600">{className}</span>
                          <span className="font-medium">
                            {students.filter((s) => s.class === className).length}{' '}
                            alunos
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Disciplinas</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(professors.map((p) => p.subject))).map(
                      (subject) => (
                        <div key={subject} className="flex justify-between">
                          <span className="text-gray-600">{subject}</span>
                          <span className="font-medium">
                            {professors.filter((p) => p.subject === subject).length}{' '}
                            professor(es)
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    } else {
      // ... rest of the existing non-admin content ...
      return null;
    }
  };

  const menuItems = [
    { id: 'alunos', label: 'Alunos', icon: Users },
    { id: 'professores', label: 'Professores', icon: BookOpen },
    { id: 'relatorios', label: 'Relatórios', icon: FileText },
    { id: 'financeiro', label: 'Financeiro', icon: CreditCard },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {showModal && <Modal />}
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
                <div className="w-8 h-8 rounded-full bg-gray-200">
                  {/* Replace with actual user image or avatar */}
                  <Header /> 
                </div>
                <div>
                  <p className="text-sm font-medium">{user?.fullName}</p> 
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </div>

          {/* Render the content based on the active menu */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
