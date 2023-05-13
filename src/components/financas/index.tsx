import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import  { transacaoVazia } from "@/logic/core/financas/Transacao";
import Sumario from "./Sumario";
import Formulario from "./Formulario";
import { IconPlus } from "@tabler/icons-react";
import useTransacoes from "@/data/hooks/useTransacoes";
import Lista from "./Lista";
import NaoEncontrado from "../template/NaoEncontrado";

export default function Financas(){
    const {
        transacao, transacoes, selecionar, salvar, excluir, cancelar
    } = useTransacoes()

    return (
        <Pagina>
            <Cabecalho/>
            <Conteudo className="gap-5">
                <Sumario transacoes={transacoes}/>
                <div>
                    <button className="btn bg-blue-500" onClick={() => selecionar(transacaoVazia)}>
                        <IconPlus/>
                        <span>Nova transação</span>
                    </button>
                </div>
                {transacao ? (
                    <Formulario 
                        transacao={transacao} 
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => cancelar}/>
                ) : transacoes.length ?(
                    <Lista transacoes={transacoes} selecionarTransacao={selecionar} />
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada.
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
    )
}