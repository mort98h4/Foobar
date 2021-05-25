import React, {useState} from "react";
import Product from "../components/Product";

export default function Beers(props) { 
    // console.log(props);
    const productComponents = props.products.map((item) => <Product key={item.name} {...item} addToAmountList={props.addToAmountList} addToBasket={props.addToBasket}/>)

    const [sortKey, setSortKey] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");

    props.products.sort(compare);
    function compare(a, b) {
      if (a[sortKey] > b[sortKey]) {
        return sortDirection === "asc" ? 1 : -1;
      } else {
        return sortDirection === "asc" ? -1 : 1;
      }
    }
  
    function toggleSort(key) {
      if (key === sortKey) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      }
      setSortKey(key);
    }

    return(
        <main className="container">
           <div>
               <button className="btn btn-primary" onClick={() => toggleSort("price")}>Filter Kind</button>
               <button className="btn btn-primary" onClick={() => toggleSort("alc")}>Filter Alc</button>
               <button className="btn btn-primary" onClick={() => toggleSort("category")}>Filter Category</button>
               <button className="btn btn-primary" onClick={() => toggleSort("popularity")}>Filter Popularity</button>
           </div>
            {productComponents}
        </main>
    )
}