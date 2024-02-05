import React from "react";
import "./styles/global.css";

export function App() {
  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <form action="flex flex-col">
        <div className="flex flex-col gap-4">
          <label htmlFor="">E-mail</label>
          <input type="email" name="email" />
        </div>
        <div className = "flex flex-col gap-1">
          <label htmlFor=""> Senha </label>
          <input

           type="password" 
           name="password" 
           className = "border border-zinc-200 shadow-sn rounded"
           />
        </div>
        
        <button 
          type ="submit"
          className = "bg-emerald-500 rounded font-semibold text-white h-10 hover: hover:bg-emerald-600 w-40"

          >
          Salvar  
        </button>
      </form>
    </main>
  );
}
