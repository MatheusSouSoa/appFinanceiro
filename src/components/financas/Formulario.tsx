import { TipoTransacao } from "@/logic/core/financas/TipoTransacao"
import Transacao from "@/logic/core/financas/Transacao"
import Data from "@/logic/utils/Data"
import { IconCheck, IconTrash, IconX } from "@tabler/icons-react"
import { useState } from "react"

interface FormularioProps{
    transacao: Transacao
    salvar?: (transacao: Transacao) => void
    cancelar?: () => void
    excluir?: (transacao: Transacao) => void
}

export default function Formulario(props: FormularioProps){
    const [dados, setDados] = useState<Transacao>(props.transacao)
    return(
        <div className=" flex flex-col border  border-zinc-700 rounded-xl overflow-hidden">
            <div className="bg-black py-3 px-7">Formulário</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <input type="text" placeholder="Descrição" className="input" value={dados.descricao ?? ''} onChange={e => {
                    setDados({
                         ...dados,
                    descricao: e.target.value
                    })
                }}/>
                <input type="number" placeholder="Valor" className="input" value={dados.valor ?? 0} onChange={e => {
                    setDados({
                        ...dados,
                        valor: +e.target.value
                    })
                }} />
                <input 
                    type="date" 
                    placeholder="Data" 
                    className="input" 
                    value={Data.yymmdd.formatar(dados.data ?? new Date())} 
                    onChange={e => {
                        setDados({
                            ...dados,
                        data: new Date(`${e.target.value} `)
                        })
                    }}
                />
                <div className="flex gap-8">
                    <div className="flex gap-2">
                        <input 
                            type="radio"
                            name="tipo"
                            value="receita"
                            checked={dados.tipo === 'receita'}
                            onChange={() => {
                                setDados({
                                    ...dados,
                                tipo: TipoTransacao.RECEITA
                                })
                            }}
                        />
                        <span>Receita</span>
                    </div>
                    <div className="flex gap-2">
                        <input 
                            type="radio"
                            name="tipo"
                            value="despesa"
                            checked={dados.tipo === 'despesa'}
                            onChange={() => {
                                setDados({
                                    ...dados,
                                tipo: TipoTransacao.DESPESA
                                })
                            }}
                        />
                        <span>Despesa</span>
                    </div>
                </div>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <button className=" btn  bg-green-500" onClick={() => props.salvar?.(dados)}>
                    <IconCheck/>
                    <span className="hidden sm:inline">Salvar</span>
                </button>
                <button className=" btn  bg-zinc-500" onClick={() => props.cancelar?.()}>
                    <IconX/>
                    <span className="hidden sm:inline">Cancelar</span>
                </button>
                <span className="flex-1"></span>
                {props.transacao.id &&(
                    <button className=" btn  bg-red-500" onClick={() => props.excluir?.(dados)}>
                        <IconTrash/>
                        <span className="hidden sm:inline">Excluir</span>
                    </button>
                )}
            </div>
        </div>
    )

}