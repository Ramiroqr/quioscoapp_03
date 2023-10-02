import Image from "next/image";
import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";

const Producto = ({producto}) => {
    const { handleSetProducto, handleChangeModal } = useQuiosco();
    const { nombre, imagen, precio } = producto;

  return (
    <div className="border p-1.5 md:p-3">
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen Platillo ${nombre}`}
            width={400}
            height={500}
        />
        <div className="p-2 mt-2 md:p-5 md:mt-0 ">
            <h3 className="text-sm sm:text-lg md:text-2xl font-bold">{nombre}</h3>
            <p className="text-xl mt-5 font-black md:text-4xl text-amber-500">
                {formatearDinero(precio)}
            </p>

            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-2 uppercase font-bold text-xs md:text-lg md:p-3"
                onClick={() => {
                    handleSetProducto(producto);
                    handleChangeModal();
                }}
            >
                Agregar
            </button>
        </div>
    </div>
  )
}

export default Producto