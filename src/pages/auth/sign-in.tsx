import { useState } from "react"
import { WhatsAppChat } from "../../components/WhatsAppButton";

export function SignIn(){

    const [currentState, setCurrentState] = useState<string>("Crie uma conta")
    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        
    }
    return(
            <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%]  sm: max-w-96 m-auto mt-14 gap-4 text-gray-800">
                <div className="inline-flex items-center gap-2 mb-2 mt-10">
                    <p className="prata-regular text-3xl">{currentState}</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
                </div>

                {currentState === 'Login' ? "" : (
                    <input type="text" className=" rounded-md w-full px-3 py-2 border border-gray-800" placeholder="Nome" required/>)}
                    <input type="email" className="rounded-md w-full px-3 py-2 border border-gray-800" placeholder="Email" required/>
                    <input type="password" className=" rounded-md w-full px-3 py-2 border border-gray-800" placeholder="Senha " required/>

                <div className="w-full flex justify-between text-sm mt-[-8px]">
                    <p className="cursor-pointer">Esqueceu a sua senha?</p>
                    {
                        currentState === 'Login' ? (
                            <p className="cursor-pointer" onClick={() => setCurrentState("Sign Up")}>Crie uma conta</p>
                        ) : (
                            <p className="cursor-pointer" onClick={() => setCurrentState("Login")}>Já tem uma conta?</p>
                        )
                    }
                </div>
                <button className="bg-black hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition-colors">{currentState === 'Login' ? 'Entrar' : 'Inscrever-se'}</button>
                <WhatsAppChat />
            </form>
    )
}