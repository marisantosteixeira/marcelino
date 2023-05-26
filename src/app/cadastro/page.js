'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className="flex flex-col items-center justify-between pt-6 font-mono">
            <form action='' onSubmit={cadastrar}>
                <h1 className='font-mono text-xl ml-4 text-center text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500  hover:to-green-400'>PREENCHA O FORMULARIO ABAIXO: </h1>
               

                <input className='border-b text-lg mt-6 text-center text-blue-300 ml-11' placeholder='Nome do aluno' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>

                <input className='mt-6 border-b text-lg text-center text-blue-300 ml-11' placeholder='Curso do aluno' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>

                <input className='border-b text-lg mt-6 text-center text-blue-300 ml-11' placeholder='Nº de inscrição' nome="num_inscricao" type="number"

                    onChange={e => setNum_inscricao(e.target.value)}></input><br/>
                         <a className='p-4 mt-20 text-teal-500  font-mono text-xl ml-11 text-center border border-emerald-400 hover:bg-blue-300' href='/'>Voltar</a>
                <button type='submit' className='mt-10 w-30 h-14 text-teal-500  font-mono text-xl ml-11 text-center border border-emerald-400 hover:bg-blue-300'>CADASTRAR</button>
           
            </form>
        </div>
       

    );

}