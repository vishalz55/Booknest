import Product from './Product'

export default function ProductTab()
{
    let options= ["Hi-tech","Durable","Best"];
    return (
        <>
          <Product Title = "Phone " Price = "30,000" features = {options}></Product>
          <Product Title = "laptop" Price = "40,000"></Product>
          <Product Title = "Pen"   Price = {10} ></Product>  
          {/* ya vrti operation ahet smjl ka  char and the value pn smjl ka */}
          {/* product madhe takla na mg bg kothe yete product ch smjl ka  */}
        </>
    )
}