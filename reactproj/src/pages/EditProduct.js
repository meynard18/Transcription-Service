import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
     
   const navigate = useNavigate();
   const [productInput, setProduct] = useState([]);
   const [loading, setLoading] = useState(true);
   const [errorInput, setError] = useState([]);
   const { id } = useParams();

   const handleInput = (e) => {
      e.persist();
      setProduct({ ...productInput, [e.target.name]: e.target.value });
   };

      useEffect(() => {
      const product_id = id;
      axios.get(`api/editProduct/${product_id}`).then((res) => {
         if (res.data.status === 200) {
            setProduct(res.data.product);
            setLoading(false); 
         } else if (res.data.status === 404) {
            swal('Error', res.data.message, 'Error');
            navigate('/transcription');
         }
      });   
   }, [navigate, id]);

   const updateProduct = (e) => {
    e.preventDefault();
    //any changes to input
    const data = {
       title: productInput.title,
       artist: productInput.artist,
       category: productInput.category,
       price: productInput.price,
    };
    //any changes will be passed to axious
    axios.put(`api/updateProduct/${id}`, data).then((res) => {
       if (res.data.status === 200) {
          swal('Success', res.data.message);
          setError([]);
       } else if (res.data.status === 404) {
          swal('Error', res.data.message, 'Error');
          navigate('/transcription');
       } else if (res.data.status === 422) {
          swal('All fields are mandatory', '');
          setError(res.data.validationError);
       }
    });
 };
 if (loading) {
    return <h4>Loading Edit Product Table</h4>;
 }
   return ( 
      <div>
         <div className="container">
            <div className="card">
               <div className="card-header">
                  <h4>
                     Edit Product
                     <Link to={'/transcription'} className="btn btn-sm float-end">
                        BACK
                     </Link>
                  </h4>
               </div>
               <div className="card-body">
                  <form onSubmit={updateProduct}>
                     <div className="form-group mb-3">
                        <label htmlFor="name">Title</label>
                        <input
                           className="form-control"
                           type="text"
                           name="title"
                           onChange={handleInput}
                           value={productInput.title}
                        />
                        <span className="text-danger">{errorInput.title}</span>
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="description">Artist</label>
                        <input
                           className="form-control"
                           type="text"
                           name="artist"
                           onChange={handleInput}
                           value={productInput.artist}
                        />
                        <span className="text-danger">{errorInput.artist}</span>
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="category">Category</label>
                        <input
                           className="form-control"
                           type="text"
                           name="category"
                           onChange={handleInput}
                           value={productInput.category}
                        />
                        <span className="text-danger">
                           {errorInput.category}
                        </span>
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="price">Price</label>
                        <input
                           className="form-control"
                           type="text"
                           name="price"
                           onChange={handleInput}
                           value={productInput.price}
                        />
                        <span className="text-danger">{errorInput.price}</span>
                     </div>

                     <button type="submit" className="btn btn-primary">
                        Update
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditProduct;
