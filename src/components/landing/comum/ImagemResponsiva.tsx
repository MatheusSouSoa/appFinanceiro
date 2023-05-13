import Image from "next/image";

interface ImagemResponsivaProps{
    image: any
    clasName?: string
}

export default function ImagemResponsiva(props: ImagemResponsivaProps){
    return (
        <Image src={props.image} alt="Imagem" className={`
            w-[350px] h-[365px]
            lg:w-[550px] lg:h[365px]
            rounded-xl object-cover
            ${props.clasName ?? ''}
        `}/>

    )
}