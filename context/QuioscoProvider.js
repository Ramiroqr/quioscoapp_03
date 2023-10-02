import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast, useToast } from "react-toastify"; 
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedidos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);

    const router = useRouter();

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    }, [categorias]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);

        setTotal(nuevoTotal);
    }, [pedido])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id);
        setCategoriaActual(categoria[0]);
        router.push('/');
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {

        if(pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedidos(pedidoActualizado);
            toast.success('Pedido editado correctamente...');
        } else {
            setPedidos([...pedido, producto]);
            toast.success('Agregado al Pedido...');
        }
        setModal(false);
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProducto(productoActualizar[0]);
        setModal(!modal);
    }

    const handleEliminarProducto = id => {
        const productosNuevos = pedido.filter(producto => producto.id !== id)
        setPedidos(productosNuevos)
    }

    const colocarOrden = async e => {
        e.preventDefault();
        
        try {
            const { data } = await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()});

            // Resetear la app
            setCategoriaActual(categorias[0]);
            setPedidos([]);
            setNombre('');
            setTotal(0);

            toast.success('Pedido realizado correctamente...');
            setTimeout(() => {
                router.push('/')
            }, 3000)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido, 
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;