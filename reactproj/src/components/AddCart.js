import React from 'react';
import { useCart } from 'react-use-cart';

const AddCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();
    
      if (isEmpty) {
          return <p>Your cart is empty</p>;
      }


    return (
        <div>
            <div>
                <h5>Cart: ({totalUniqueItems}) Total Items: ({totalItems})</h5> 
                <div>
                    <table className="table table-striped container-sm">
                        <thead className="text-center">
                            <th>Ordered Item</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </thead>
                        {items.map(item => 
                            (
                                <tr key={item.id} className="text-center">
                                    <td>
                                        <ul>
                                            <li>
                                                <p>Title: {item.song_title}</p>
                                                <p>Artist: {item.artist_name}</p>
                                                <p>Category: {item.category}</p>
                                                <p>Price: P{item.price}</p>
                                            </li>
                                        </ul>    
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-default"
                                            onClick = {() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >
                                            <i class="bi bi-plus-circle"></i>
                                        </button>
                                        {item.quantity}
                                        <button 
                                            className="btn btn-default"
                                            onClick = {() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >
                                            <i class="bi bi-dash-circle"></i>
                                        </button>   
                                    </td>
                                    <td className="actions">
                                        <button 
                                        className="btn btn-default"
                                        onClick = {() => removeItem(item.id)}
                                        >
                                        <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>         
                            ))}
                    </table>
                </div>
                <div className="container-sm d-flex justify-content-end">
                    <h2>Total Price: P{cartTotal}</h2>
                </div>
                <div>
                    <button
                    className="btn btn-danger"
                    onClick = {() => emptyCart()}
                    >
                        Empty Cart
                    </button>
                    <button
                    className="btn btn-warning"
                    >
                        Proceed to Checkout
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default AddCart