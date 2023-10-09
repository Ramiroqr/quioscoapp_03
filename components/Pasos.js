import { useRouter } from "next/router";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiListChecksLight } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import MenuItem from "./MenuItem";

// const pasos = [
//     {paso: 1, nombre: 'Menú', url: '/'},
//     {paso: 2, nombre: "Resumen", url: '/resumen'},
//     {paso: 3, nombre: "Datos y Total", url: '/total'}
// ]

const Pasos = () => {

    const router = useRouter();

    const calcularProgreso = () => {
        let valor;
        if(router.pathname === '/') {
            valor = 3;
        } else if(router.pathname === '/resumen') {
            valor = 50;
        } else {
            valor = 100;
        }
        return valor;
    }

    return (
        <>
        <div className=" w-11/12">
            <div className="flex justify-around">
                <MenuItem 
                    title="Menú" address="/" Icon={IoFastFoodOutline}
                    className={`${router.pathname === "/" ? 'bg-indigo-800' : ""}`}
                />
                <MenuItem 
                    title="Resumen" address="/resumen" Icon={PiListChecksLight}
                    className={`${router.pathname === "/resumen" ? 'bg-indigo-800' : 'bg-indigo-400'}`}
                />
                <MenuItem 
                    title="Total" address="/total" Icon={MdAttachMoney}
                    className={`${router.pathname === "/total" ? 'bg-indigo-800' : 'bg-indigo-400'}`}
                />

            </div>
            {/* {pasos.map(paso => (
                <button 
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    key={paso.paso}
                    className={`${paso.url === router.pathname ? 'bg-indigo-800' : ""} md:text-md lg:text-2xl font-bold bg-indigo-400 hover:bg-indigo-800 px-3 py-2 sm:px-4 md:py-2 md:px-10 text-white rounded`}
                > {paso.nombre}</button>
            ))} */}
        </div>

        <div className="bg-gray-100 mb-10">
            <div 
                className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
                style={{width: `${calcularProgreso()}%`}}
            >

            </div>
        </div>
        </>
    )
}

export default Pasos;