`use client`
import Link from "next/link";
import { useState } from "react";

export default function login() 

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const [textEmail, setTextEmail] = useState("hidden")
 const [textpassword, setTextPassword] = useState("hidden")

 const [btnEntrar, setBtnEntrar] = useState("bg-blue-700")
 const [container, setContainer] = useState("bg-slate-100")
  
  function handleEntar(e: any){
    e.preventDefault()

    if(email ===""){
      setTextEmail("block")
      setBtnEntrar("bg-red-700")
      setContainer("bg-red-7000")
      return alert("por favor preencher o E-mail")
     } 
     
     if(password ===""){
       setTextPassword("block")
       setBtnEntrar("bg-red-700")
       setContainer("bg-red-700")
       return alert("por favor preencher o password")
     }

     setTextEmail("hidden")
     setContainer("bg-slate-100")
     setBtnEntrar("bg-blue-700")
     setTextPassword("hidden")

     alert("Bem-vindo")
  }

    return(
      <div className={` ${container} w-screen h-screen flex items-center justify-center`}>
       <div className="w-1/5 h-1/2 flex flex-col items-center gap-4">
        <img src="./image/logo2.svg" alt="Logo kiwify" className="w-40" />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb:mb-0 mb-03">Entar na sua conta 22222</h2>
          <div className="flex gap-01">
            <h1>Ou</h1>
            <Link href="/cadastro">
              <p className="text-blue-700 font-semibold cursor-pointer">fazer cadastro</p>
            </Link>

        </div>
      </div>
      <div className="bg-white rounded-md h-auto flex flex-col items-center gap-4">
        <form className="flex gap-3 flex-col w-80 m-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
            <input
              onChange={event => setEmail( event.target.value)} value={email}
              type="email" name="email" className="w-80 border-2 p-2 rounded-md" />
            <p className={`text-red-700 ${textEmail}`}>por favor preencher o campo E-mail</p>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold">Senha</label>
            <input 
              onChange={event => setPassword(event.target.value)} value={password}
              type="password" name="password" className="w-80 p-2 border-2 rounded-md" />
               <p className={`text-red-500 ${textpassword}`} >Por favor preencher o campo Password</p>
          </div>
          <Link href="/redefinir">
           <p className="text-right mt-5 mb-5 text-blue-700 font-semibold cursor-pointer">Esqueceu sua senha?</p>
          </Link>
          <button onClick={handleEntar} className={` ${btnEntrar} w-80 mb-5 p-2 text-white text-sm rounded-md font-semibold cursor-pointer`}>Entar</button>
        </form>
      </div>
    </div>
   </div>
    );
  }
