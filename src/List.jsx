import './List.css'
function List(){
    //lista das noticias
    const bar =[
        "Entregador","Restaurante e Mercado","Carreira","iFood Card"
      ]
      const lista = bar.map(
        (b)=>
        <div className='bar'>
          {b}
        </div>
 
      )

    return(
        <div className='head'>
            
            {lista}
            
        </div>
    );
    
}
export default List;