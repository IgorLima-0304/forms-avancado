import { useState } from 'react';
import "./styles/global.css";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

/**
 * [V/] Validação / Transformação
 * [] Field Arrays
 * [] Uploaad de arquivos
 * [] Composition Pattern
 */

const createUserFormSchema = z.object({
  email: z.string()
  .nonempty('O email é obrigatório')
  .email('Formato de e-mail inválido'),
  password: z.string()
  .min(8,'A senha precisa de no mínimo 8 caracteres')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function App() {
  const [output, setOutput] = useState<string>('');
  
  const { 
    register, 
    handleSubmit,
    formState:{ errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })
  

  function createUser (data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }
  
  // High-order function

  return (
    <main className="h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-10 items-center justify-center">
      <form 
      onSubmit = {handleSubmit(createUser)} 
      className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input 
          type="email" 
          className = "border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white"
          {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        
        
        <div className = "flex flex-col gap-1">
          <label htmlFor=""> Senha </label>
          <input
           type="password" 
           className = "border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white"
           {...register('password')}
           />
           {errors.password && <span>{errors.password.message}</span>}
        </div>
    
        <button 
          
          type ="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600 w-100"

          >
          Salvar  
        </button>
      </form>
      <pre>{output}</pre>
    </main>
  );
}
