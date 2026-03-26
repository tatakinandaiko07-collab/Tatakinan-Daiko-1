import { motion, AnimatePresence } from "motion/react";
import { Lock, BookOpen, Video, FileText, ChevronRight, LogIn, Users, Plus, Trash2, CheckCircle, XCircle, Clock, ExternalLink } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { handleFirestoreError, OperationType } from "../lib/firestore-errors";

interface Material {
  id: string;
  title: string;
  type: "score" | "video";
  url: string;
  description?: string;
  createdAt: any;
}

interface Student {
  uid: string;
  displayName: string;
  email: string;
  status: "pending" | "approved";
  role: "admin" | "student";
}

const StudentArea = () => {
  const { user, loading, role, status, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"materials" | "students" | "admin">("materials");
  const [materials, setMaterials] = useState<Material[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [newMaterial, setNewMaterial] = useState({ title: "", type: "score" as const, url: "", description: "" });

  useEffect(() => {
    if (!user || status !== "approved") return;

    const q = query(collection(db, "materials"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Material));
      setMaterials(docs);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, "materials");
    });

    return () => unsubscribe();
  }, [user, status]);

  useEffect(() => {
    if (role !== "admin") return;

    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => doc.data() as Student);
      setStudents(docs);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, "users");
    });

    return () => unsubscribe();
  }, [role]);

  const handleApprove = async (uid: string) => {
    const path = `users/${uid}`;
    try {
      await updateDoc(doc(db, "users", uid), { status: "approved" });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const handleAddMaterial = async (e: React.FormEvent) => {
    e.preventDefault();
    const path = "materials";
    try {
      await addDoc(collection(db, path), {
        ...newMaterial,
        createdAt: serverTimestamp()
      });
      setShowAddModal(false);
      setNewMaterial({ title: "", type: "score", url: "", description: "" });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  const handleDeleteMaterial = async (id: string | null) => {
    if (!id) return;
    const path = `materials/${id}`;
    try {
      await deleteDoc(doc(db, "materials", id));
      setShowDeleteConfirm(null);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card max-w-md w-full p-10 border-brand/20 shadow-2xl shadow-brand/10"
        >
          <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-display font-medium uppercase text-center mb-2 tracking-tighter">Área do <span className="text-brand">Aluno</span></h1>
          <p className="text-gray-400 text-center mb-8 text-sm">Acesse materiais exclusivos, partituras e vídeos de treino.</p>
          
          <div className="space-y-6">
            <button 
              onClick={login}
              className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand/20 flex items-center justify-center gap-3"
            >
              <LogIn size={20} />
              Entrar com Google
            </button>
            <p className="text-center text-xs text-gray-500 leading-relaxed">
              O acesso é exclusivo para alunos matriculados.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card max-w-xl w-full p-12 text-center"
        >
          <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Clock size={40} />
          </div>
          <h1 className="text-3xl font-display font-medium uppercase mb-4 tracking-tighter">Acesso em <span className="text-brand">Análise</span></h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Olá, <span className="text-white font-bold">{user.displayName}</span>! Seu cadastro foi recebido com sucesso. 
            Como esta é uma área restrita, um administrador precisa aprovar seu acesso manualmente. 
            Por favor, aguarde a ativação da sua conta.
          </p>
          <button 
            onClick={logout}
            className="text-brand font-bold uppercase text-sm tracking-widest border-b border-brand hover:border-transparent transition-all"
          >
            Sair da Conta
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-brand font-display italic text-xl mb-2">Bem-vindo, {user.displayName?.split(' ')[0]}!</h2>
            <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter">
              Portal do <span className="text-brand">Estudante</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            {role === 'admin' && (
              <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                <button 
                  onClick={() => setActiveTab("materials")}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'materials' ? 'bg-brand text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Materiais
                </button>
                <button 
                  onClick={() => setActiveTab("students")}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'students' ? 'bg-brand text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Alunos
                </button>
              </div>
            )}
            <button 
              onClick={logout}
              className="text-gray-400 hover:text-white text-sm uppercase tracking-widest font-bold border-b border-transparent hover:border-white transition-all"
            >
              Sair
            </button>
          </div>
        </motion.div>

        {activeTab === "materials" ? (
          <div className="space-y-12">
            {role === 'admin' && (
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Plus size={20} /> Adicionar Material
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materials.length > 0 ? (
                materials.map((material) => (
                  <motion.div 
                    key={material.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-8 group relative"
                  >
                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {material.type === 'score' ? <FileText size={24} /> : <Video size={24} />}
                    </div>
                    <h3 className="text-xl font-display font-medium uppercase mb-2">{material.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{material.description || "Sem descrição disponível."}</p>
                    <div className="flex items-center justify-between">
                      <a 
                        href={material.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand font-bold flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        {material.type === 'score' ? 'Ver Partitura' : 'Assistir Vídeo'} <ExternalLink size={16} />
                      </a>
                      {role === 'admin' && (
                        <button 
                          onClick={() => setShowDeleteConfirm(material.id)}
                          className="text-red-500/60 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                  <BookOpen className="mx-auto text-gray-600 mb-4" size={48} />
                  <p className="text-gray-500">Nenhum material disponível no momento.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="glass-card overflow-hidden border-brand/20">
            <div className="p-8 border-b border-white/10 bg-white/5">
              <h3 className="text-2xl font-display font-medium uppercase flex items-center gap-3">
                <Users className="text-brand" /> Gerenciar Alunos
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-500">
                    <th className="px-8 py-4 font-bold">Nome</th>
                    <th className="px-8 py-4 font-bold">E-mail</th>
                    <th className="px-8 py-4 font-bold text-center">Status</th>
                    <th className="px-8 py-4 font-bold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {students.map((student) => (
                    <tr key={student.uid} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-4 font-medium">{student.displayName}</td>
                      <td className="px-8 py-4 text-gray-400 text-sm">{student.email}</td>
                      <td className="px-8 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${student.status === 'approved' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                          {student.status === 'approved' ? 'Aprovado' : 'Pendente'}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right">
                        {student.status === 'pending' && (
                          <button 
                            onClick={() => handleApprove(student.uid)}
                            className="text-green-500 hover:text-green-400 p-2 transition-all hover:scale-110"
                            title="Aprovar Aluno"
                          >
                            <CheckCircle size={20} />
                          </button>
                        )}
                        {student.role !== 'admin' && (
                          <button className="text-red-500/60 hover:text-red-500 p-2 transition-all hover:scale-110" title="Remover Acesso">
                            <XCircle size={20} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Material Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass-card max-w-lg w-full p-10 border-brand/40"
            >
              <h2 className="text-3xl font-display font-medium uppercase mb-8">Novo <span className="text-brand">Material</span></h2>
              <form onSubmit={handleAddMaterial} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Título</label>
                  <input 
                    required
                    type="text" 
                    value={newMaterial.title}
                    onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-all"
                    placeholder="Ex: Partitura de Matsuri"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Tipo</label>
                    <select 
                      value={newMaterial.type}
                      onChange={(e) => setNewMaterial({...newMaterial, type: e.target.value as "score" | "video"})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-all"
                    >
                      <option value="score" className="bg-zinc-900">Partitura</option>
                      <option value="video" className="bg-zinc-900">Vídeo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">URL do Arquivo</label>
                    <input 
                      required
                      type="url" 
                      value={newMaterial.url}
                      onChange={(e) => setNewMaterial({...newMaterial, url: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-all"
                      placeholder="https://drive.google.com/..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Descrição (Opcional)</label>
                  <textarea 
                    value={newMaterial.description}
                    onChange={(e) => setNewMaterial({...newMaterial, description: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand outline-none transition-all h-24 resize-none"
                    placeholder="Breve explicação sobre o material..."
                  ></textarea>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 border border-white/10 hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-all"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand/20"
                  >
                    Salvar Material
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDeleteConfirm(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass-card max-w-sm w-full p-8 border-red-500/20 text-center"
            >
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trash2 size={32} />
              </div>
              <h2 className="text-2xl font-display font-medium uppercase mb-4">Excluir <span className="text-red-500">Material</span></h2>
              <p className="text-gray-400 mb-8 text-sm">Tem certeza que deseja excluir este material? Esta ação não pode ser desfeita.</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowDeleteConfirm(null)}
                  className="flex-1 border border-white/10 hover:bg-white/5 text-white font-bold py-3 rounded-xl transition-all"
                >
                  Cancelar
                </button>
                <button 
                  onClick={() => handleDeleteMaterial(showDeleteConfirm)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-red-500/20"
                >
                  Excluir
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentArea;
