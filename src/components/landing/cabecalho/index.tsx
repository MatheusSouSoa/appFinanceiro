import Area from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";

export default function Cabecalho(){
    return(
        <Area className="bg-black">
            <div className="flex 20-h justify-between items-center">
                <Logo/>
                <Menu/>
            </div>
        </Area>
    )
}