"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main className=" flex flex-col items-center justify-between pt-6 "  >

      <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500  hover:to-green-400 text-xl text-white'><Link href="/cadastro">CADASTRAR</Link></div>
<div>
      {alunos.map(aluno => (
        <div key={aluno.id} className="bg-sky-300 mt-12 grid grid-cols-4 gap-4 font-mono rounded border border-green-400 border-double border-4  text-white">
          <p>{aluno.nome}</p>
          <p>{aluno.curso}</p>
          <p>{aluno. num_inscricao}</p>
  
          <button onClick={e => e.preventDefault(remover(aluno.id))}>REMOVER</button>
        </div>

        
      ))}</div>
    </main>
  )
}