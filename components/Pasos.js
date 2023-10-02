import { useRouter } from "next/router";

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: "Resumen", url: '/resumen'},
    {paso: 3, nombre: "Datos y Total", url: '/total'}
]

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
        <div className="flex gap-1 justify-around mb-5">
            {pasos.map(paso => (
                <button 
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    key={paso.paso}
                    className={`${paso.url === router.pathname ? 'bg-indigo-800' : ""} md:text-md lg:text-2xl font-bold bg-indigo-400 hover:bg-indigo-800 px-3 py-2 sm:px-4 md:py-2 md:px-10 text-white rounded`}
                >{paso.nombre}</button>
            ))}
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