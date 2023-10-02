import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "./Categoria";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  const router = useRouter();


  return (
    <>
        <button 
          className="flex justify-center"
          onClick={() => router.push("/admin")}
        >

          <Image 
              width={200}
              height={100}
              style={{ width: '60%', height: 'auto' }}
              src="/assets/img/logo.svg"
              alt="Imagen logotipo"
              priority={true}
          />
        </button>

        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria 
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
    </>
  )
}

export default Sidebar