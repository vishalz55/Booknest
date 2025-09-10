// porps ch used apn na yeka madhun dusrya compoenent madhe infor pass krysathi krto 
// props are the additional infor passing for the tages 


import "./Product.css"

export default function Product({Title,Price,features})
{
    //  console.log("Product component rendered");
    return(
        <div className = "Product">
          <h1>Product Name chy jagi title yenar Title :: {Title}</h1>
          <p>Product Decsc chy jagi price yenar Price :: {Price/2}</p>  
           {/* console.log("Product component rendered"); */}
           <p>features of arryas are{features}</p>

        </div>
    )
}