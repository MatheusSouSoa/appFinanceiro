import Transacao from "@/logic/core/financas/Transacao"
import { useEffect, useState } from "react"
import transacoesFalsas from "../Constantes/transacoesFalsas"
import Id from "@/logic/core/comum/Id"

export default function useTransacoes(){
    const [transacoes, setTransacoes] = useState<Transacao[]>([])
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    function salvar(transacao: Transacao){
        const outras =transacoes.filter(t => t.id != transacao.id)
        setTransacoes([
            ...outras,
            {...transacao, id: transacao.id ?? Id.novo()}
        ])
        setTransacao(null)
    }

    function excluir(transacao: Transacao){
        const outras =transacoes.filter(t => t.id != transacao.id)
        setTransacoes(outras)
        setTransacao(null)
    }

    function cancelar(){
        setTransacao(null)
    }

    useEffect(buscarTransacoes, [])

    function buscarTransacoes(){
        setTransacoes(transacoesFalsas)
    }
   
    function selecionar(transacao: Transacao){
        setTransacao(transacao)
    }

    return {
        transacao,
        transacoes,
        salvar,
        excluir,
        cancelar,
        selecionar
    }
}