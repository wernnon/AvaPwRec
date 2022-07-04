//App.jsx
import './App.css'
import List from './List.jsx'

function App(){

return(
 //bloco 
 <div>
     <div className='head'>

        <img src="logo.svg"/>  
        <List />
        <div className='botoes'>
            <button className='create'>
                criar conta 
            </button>
            <button className='in'>
                entrar
            </button>
        </div>
    </div>
    <p className='nome'>Destaques</p>
    
    <div className='box'>
    
    <div className='item'>
    
        <img className='img' src="big-king.webp"/>
        <div className='titulo'>
            Combo Big King
        </div>
        <div className='desc'>
            Um hamburguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo ...
        </div>
        <div className='info'>
            serve 1 pessoa
        </div>
        <div className='info'>
            R$ 41,90
        </div>
    </div>
    <div className='item'>
    
        <img className='img' src="cheddar-duplo.webp" />
        <div className='titulo'>
            Combo Cheddar Duplo
        </div>
        <div className='desc'>
            Um hamburguer com duas carnes bovinas grelhadas de 57g, pão preto com gergelim, queijo ...
        </div>
        <div className='info'>
            serve 1 pessoa
        </div>
        <div className='info'>
            R$ 41,90
        </div>
    </div>
    
    <div className='item'>
    
        <img className='img' src="cheeseburger-duplo.webp"/>  
        <div className='titulo'>
            Combo Cheeseburguer Duplo com Bacon
        </div>
        <div className='desc'>
            Um hamburguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo ...
        </div>
        <div className='info'>
            serve 1 pessoa
        </div>
        <div className='info'>
            R$ 36,90
        </div>
    </div>
    
    <div className='item'>
        
        <img className='img' src="mega-stacker.webp"/>
        <div className='titulo'>
            Combo Mega Stacker 2.0
        </div>
        <div className='desc'>
            Um hamburguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo ...
        </div>
        <div className='info'>
            serve 1 pessoa
        </div>
        <div className='info'>
            R$ 51,90
        </div>
    </div>

    </div>
 </div>  
    
)
}
export default App;