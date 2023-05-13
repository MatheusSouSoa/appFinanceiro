import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"

export default function Destaque(){
    return(
        <Area className="flex-1">
            <div className="h-[500px] flex justify-around items-center">
                <Slogan/>
                <ImagemResponsiva image={principal} clasName="rotate-3 mix-blend-plus-lighter hidden md:inline"/>
            </div>
        </Area>
    )
}