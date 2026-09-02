import { useState } from 'react'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import './App.css'

const tarefas = {
  id1: { titulo: "Estudar React", categoria: "SENAI", prioridade: "alta" },
  id2: { titulo: "Estudar React", categoria: "SENAI", prioridade: "media" },
  id3: { titulo: "Estudar React", categoria: "SENAI", prioridade: "baixa" },
  id4: { titulo: "viagem Larissa", categoria: "SESI", prioridade: "baixa" },
  id5: { titulo: "Prova Magnetismo", categoria: "SESI", prioridade: "baixa"}
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="max-w-4xl px-auto py-10">
        <h2 className="text-xl font font-bold text-slate-800 mb-6">Minhas tarefinhas ({tarefas.length}) </h2>

        <section className='grid gap-4 sm:grid-cols-2'>
          {Object.values(tarefas).map((tarefas) => (
            <TaskCard
              key={tarefas.id}
              titulo={tarefas.titulo}
              categoria={tarefas.categoria}
              prioridade={tarefas.prioridade}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App