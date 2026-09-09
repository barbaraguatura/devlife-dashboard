import Header from './components/Header'
import TaskCard from './components/TaskCard'
import './App.css'

const tarefas = {
    id1: { titulo: "Estudar React", categoria: "SENAI", prioridade: "alta" },
    id2: { titulo: "Estudar React", categoria: "SENAI", prioridade: "media" },
    id3: { titulo: "Estudar React", categoria: "SENAI", prioridade: "baixa" },
    id4: { titulo: "Viagem Larissa", categoria: "SESI", prioridade: "baixa" },
    id5: { titulo: "Prova Magnetismo", categoria: "SESI", prioridade: "baixa" }
};

function App() {
    return (
        <div className="min-h-screen bg-slate-100">

            <Header />

            <main className="max-w-4xl px-auto py-10">

                <h2 className="text-xl font-bold text-slate-800 mb-6">
                    Minhas tarefinhas ({Object.values(tarefas).length})
                </h2>

                <section className="grid gap-4 sm:grid-cols-2">

                    {Object.entries(tarefas).map(([id, tarefa]) => (
                        <TaskCard
                            key={id}
                            titulo={tarefa.titulo}
                            categoria={tarefa.categoria}
                            prioridade={tarefa.prioridade}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default App