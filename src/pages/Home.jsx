import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
 
  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex", gap:"10px", justifyContent: "space-between"}}>
      {items.map((p) => (
        
        <div key={p._id} style={{ border: "1px solid #ccc", padding: "10px",width:"360px" }}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
         </div>
        
      ))}
    </div>
    </div>
    
  );
}

export default Home;
