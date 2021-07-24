import React, { useState, useEffect } from "react";
import '../../styles/products.css';
import api from "../../services/api";



import Logo from "../../assets/images/logo.svg"
import Cart from "../../assets/images/cart.svg"
import Github from "../../assets/images/github.svg"
import Linkedin from "../../assets/images/linkedin.svg"



interface IProduct{
    id:number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(()=>{
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {
        let push: any = [...cart, cart.push(data[index])]
        setCart(push)
        const productStore = JSON.stringify(cart);
        localStorage.setItem(`@cart`,productStore)
        
    }

    return(
        <>
        <header className="menu">
            
            <div className="menuSectionRight">
                <img src={Logo} alt="Logo"/>
            </div>

            <div className="menuSectionLeft">    

                <div className="cartContainer">
                    <img id="cart" src={Cart} alt="Carinho de Compras"/>
                    <span id="itens">({cart.length})</span>
                </div>

            </div>
          </header>

        <div className="productContent">
            <section>
                {data.map((prod,index) =>(
                    
                 <div className="productContainer" key={prod.id}>
                       
                    <img className="productImg" src={prod.image} alt="product"/>
                    <h4>{prod.title}</h4>
                    <p>{prod.price}</p>
                    <button className="addButton"onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                 </div>
                ))}

            </section>

        </div>
        
        
            <footer>
                <p>© All rights reserved</p>
                 
                 <div className="social">
                <a  href="https://www.linkedin.com/in/julianahvallefrasao/">
                 <img id="user" src={Linkedin} alt="Usuário"/>
                </a>
                <a href="https://github.com/julianahvalle"> 
                 <img id="user" src={Github} alt="Usuário"/>
                </a> 
                 </div>
            </footer>
     
        </>
    );
}

export default Home;