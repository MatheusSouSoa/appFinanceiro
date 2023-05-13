import usuario from "@/data/Constantes/usuarioFalso";

export default function BoasVindas(){
    return (
        <div className="text-white text-3xl font-black">
            Olá <span className="hidden sm:inline">{usuario?.nome?.split(' ')[0]}</span>👋
        </div>
    )
}