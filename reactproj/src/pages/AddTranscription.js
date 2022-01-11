import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

function AddProduct() {
   const history = useNavigate();
   const [productInput, setProduct] = useState({
      title: '',
      artisan: '',
      category: '',
      price: 0.0,
      error_list: [],
   });
   const handleInput = (e) => {
      console.log(e);
      e.persist();
      setProduct({ ...productInput, [e.target.name]: e.target.value });
   };

   const saveProduct = (e) => {
      e.preventDefault();
      const data = {
         title: productInput.title,
         artist: productInput.artist,
         category: productInput.category,
         price: productInput.price,
      };

      axios.post(`api/addProduct`, data).then((res) => {
         if (res.data.status === 200) {
            swal('Success', res.data.message, 'Success');
            setProduct({
               title: '',
               artist: '',
               category: '',
               price: 0.0,
               error_list: [],
            });
            history.push('/addProducts');
         } else if (res.data.status === 422) {
            setProduct({ ...productInput, error_list: res.data.validate_err });
         }
      });
   };
   return (
      <div>
         <div className="container">
            <div className="card">
               <div class="card-header">
                  <h4>Add Product</h4>
                  <Link to={'/transcription'} className="btn btn-sm float-end">
                     Transcription
                  </Link>
               </div>
               <div class="card-body">
                  <form onSubmit={saveProduct}>
                     <div className="form-group mb-3">
                        <label for="name">Title</label>
                        <input
                           className="form-control"
                           type="text"
                           name="title"
                           onChange={handleInput}
                           value={productInput.title}
                        />
                        <span className="text-danger">
                           {productInput.error_list.title}
                        </span>
                     </div>
                     <div className="form-group mb-3">
                        <label for="description">Artist</label>
                        <input
                           className="form-control"
                           type="text"
                           name="artist"
                           onChange={handleInput}
                           value={productInput.artist}
                        />
                        <span className="text-danger">
                           {productInput.error_list.artist}
                        </span>
                     </div>
                     <div className="form-group mb-3">
                        <label for="price">Category</label>
                        <input
                           className="form-control"
                           type="text"
                           name="category"
                           onChange={handleInput}
                           value={productInput.category}
                        />
                        <span className="text-danger">
                           {productInput.error_list.category}
                        </span>
                     </div>
                     <div className="form-group mb-3">
                        <label for="inStock">Price</label>
                        <input
                           className="form-control"
                           type="text"
                           name="price"
                           onChange={handleInput}
                           value={productInput.price}
                        />
                        <span className="text-danger">
                           {productInput.error_list.price}
                        </span>
                     </div>

                     <button type="submit" className="btn btn-primary">
                        Save
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AddProduct;
