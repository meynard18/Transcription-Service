import '../components/styles/Transcriptions.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import AddCart from '../components/AddCart';

function Transcriptions() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      axios.get(`api/products`).then((res) => {
         if (res['status'] === 200) {
            setProducts(res.data.products);
            setLoading(false);
         }
      });
   }, []);

   const [searchTerm, setSearchTerm] = useState("");
   const { addItem } = useCart();

   const deleteProduct = (e, id) => {
      e.preventDefault();
      const delClick = e.currentTarget;
      delClick.innertext = 'Deleting';

      axios.delete(`api/deleteproduct/${id}`).then((res) => {
         if (res.data.status === 200) {
            swal('Deleted!', res.data.message, 'success');
            delClick.closest('tr').remove();
         } else if (res.data.status === 404) {
            swal('Error', res.data.message, 'error');
            delClick.innerText = 'Delete';
         }
      });
   };



   if (loading) {
      return <h4>Loading Product Data...</h4>;
   
   } else {
      var product_HTMLTABLE = '';
      product_HTMLTABLE = products.filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (
                                    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    val.artist.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val;
                                }
                            }).map((item, index) => {
         return (
            <tr key={index} className="text-center">
               <td>{item.id}</td>
               <td>{item.title}</td>
               <td>{item.artist}</td>
               <td>{item.category}</td>
               <td>{item.price}</td>
               <td className="actions">
                  <Link
                     to={`editproduct/${item.id}`}
                     className="btn btn-success btn-sm"
                  >
                   <i class="bi bi-pencil"></i>
                  </Link>&nbsp;

                  <button
                     type="button"
                     className="btn btn-danger btn-sm"
                     onClick={(e) => deleteProduct(e, item.id)}
                  >
                     <i class="bi bi-trash"></i>
                  </button>&nbsp;

                  <button
                  type="button"
                  className="btn btn-default btn-sm btn-warning"
                  onClick = {() => addItem(item)}
                  >
                     <i class="bi bi-cart-plus"></i>
                  </button>
               </td>
            </tr>
         );
      });
   }
   return (
      <div className="container-fluid transcriptions">
         <div className="hero2">
            <div className="tabledata">
               <div class="input-group container-sm mt-5">
                  <input
                     type="text"
                     class="form-control"
                     placeholder="SEARCH BY SONG TITLE OR ARTIST"
                     onChange = {(e) => {
                        setSearchTerm(e.target.value);
                  }}
                  />
               </div>
               <div className="song-list mt-5">
                  <table className="table">
                     <thead>
                        <tr className="text-center">
                           <th>#</th>
                           <th>TITLE</th>
                           <th>ARTIST</th>
                           <th>CATEGORY</th>
                           <th>PRICE</th>
                           <th>ACTION</th>
                        </tr>
                     </thead>
                     <tbody>
                        {product_HTMLTABLE}
                     
                     </tbody>
                  </table>
               </div>    
            </div>
            <div className="container-sm orders">
               <div className="order-title">
                  <p>Order Summary</p>
               </div>
               <div>
                  <AddCart/>
               </div>
            </div>
            
           
         </div>
      </div>
   );
}

export default Transcriptions;
