const products = [
    {
        id: '1',
        name: 'guardaporlvo 1',
        price: 12000,
        category: 'guardapolvos',
        img: 'https://acdn.mitiendanube.com/stores/003/888/595/products/guardapolvos-artesanales-jardinero-felipa-base-azul-b9df3cffad85f62c1817102559546974-640-0.png',
        stock: 25,
        description: "descripcion de guardapolvo 1"
    },
    {
        id: '2',
        name: 'guardaporlvo 2',
        price: 1000,
        category: 'guardapolvos',
        img: 'https://acdn.mitiendanube.com/stores/001/953/817/products/guardapolvo-broderie-picos-8ee1af92b92c96b1f517056118665806-480-0.jpg',
        stock: 5,
        description: "descripcion de guardapolvo 2"
    },
    {
        id: '3',
        name: 'guardaporlvo 3',
        price: 20000,
        category: 'guardapolvos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_629184-MLA44181810075_112020-O.webp',
        stock: 2,
        description: "descripcion de guardapolvo 3"
    },
    {
        id: '4',
        name: 'gorro 1',
        price: 2000,
        category: 'invierno',
        img: 'https://ofelia.com.ar/images/origin/products/kyYaL9hetXn4JWyNnLfCaQh4skINljg4IggluyuB.jpg',
        stock: 2,
        description: "descripcion de gorro 1"
    },
    {
        id: '5',
        name: 'disfraz batmab',
        price: 2000,
        category: 'otros',
        img: 'https://acdn.mitiendanube.com/stores/001/910/805/products/foto1_disfraces_dc_batman_1690_open_pack1-18092282b6f90dd4ee16840008326677-1024-1024.jpg',
        stock: 1,
        description: "Disfraz de batman para niños"
    },
    {
        id: '6',
        name: 'disfraz spiderman',
        price: 2000,
        category: 'otros',
        img: 'https://dcdn.mitiendanube.com/stores/001/323/548/products/screenshot_211-b7ea0afa040226bf8816516797144227-1024-1024.png',
        stock: 1,
        description: "Esto es un disfraz de Spiderman para niños"
    }
]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(cat => cat.category === categoryId))
        }, 500)
    })
}