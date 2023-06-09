import stockrecomendados from "../home/StockDeRecomendados/stockrecomendados"


export const getProductFilm=()=>{
return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (stockrecomendados)
    },2000

    );
}

)


}

export const getProductFilmId=(productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (stockrecomendados.find(stock=>stock.id===productId))
        },2000
    
        );
    }
    
    )
    
    
    }