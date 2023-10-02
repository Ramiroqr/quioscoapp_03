import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {

    const { categoriaActual, handleClickCategoria } = useQuiosco();
    const { nombre, icono, id } = categoria;

  return (
    <div>
        <button
            type="button"
            className={`${categoriaActual?.id === id ? "bg-amber-500" : ""} flex items-center gap-4 text-2xl font-bold border w-full p-5 hover:bg-amber-500 hover:cursor-pointer`}
            onClick={() => handleClickCategoria(id)}
        >
            <Image 
                width="0"
                height="0"
                style={{ width: '20%', height: 'auto' }}
                src={`/assets/img/icono_${icono}.svg`}
                alt="Imagen icono"
            />
            {nombre}
        </button>
    </div>
  )
}

export default Categoria