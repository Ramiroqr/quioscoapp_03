import Head from "next/head"
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/Sidebar"
import ModalProducto from "@/components/ModalProducto";
import useQuiosco from "@/hooks/useQuiosco";
import Pasos from "@/components/Pasos";
import "react-toastify/dist/ReactToastify.css";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import Provider from "@/pages/provider";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#__next');

export default function Layout({children, pagina}) {

    const { modal } = useQuiosco();
  return (
    <>
        <Provider>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quiosco Cafeteía"/>
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="dark:bg-gray-800 bg-gray-200 flex p-3 sm:p-6 lg:p-10 items-center">
                        <Pasos/>
                        <DarkModeSwitch/>
                    </div>
                    <div className=" p-3 sm:p-6 lg:p-10">
                        {children}
                    </div>
                </main>
            </div>

            {modal && (
                <Modal isOpen={modal} style={customStyles}>
                    <ModalProducto />
                </Modal>
            )}

            <ToastContainer />
        </Provider>
    </>
  )
}
