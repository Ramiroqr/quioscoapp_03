import Link from "next/link";
import { useRouter } from "next/router";


export default function MenuItem({title, address, Icon}) {

  const router = useRouter();
  return (
    <div >
      <Link href={address} className={`${router.pathname === address ? 'bg-indigo-800' : 'bg-indigo-400'} flex gap-1 px-5 py-2 sm:px-4 md:py-2 md:px-8 text-white rounded items-center hover:bg-indigo-800`}>
        <Icon className="text-2xl "/>
        <p className=" hidden sm:inline md:text-md lg:text-xl xl:text-2xl font-bold">{title}</p>
      </Link>
    </div>
  )
}
