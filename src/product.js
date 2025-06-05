import React from 'react'

function Product({data, updateCart, cart}) {


    function passDataToParentCart(){
        updateCart(data)
    }

    return (

        <div className='flex flex-col border border-gray-200 bg-white shadow-lg rounded-lg p-3 w-60 gap-3'>

            <img src={data.image} alt='Prodect image' className='h-44'></img>

            <h4 className="text-gray-500 font-bold">{data.title.slice(0, 40)}...</h4>

            <p className="text-sm text-gray-600">{data.description.slice(0, 100)}...</p>

            <h2 className='text-gray-500 font-bold text-md'>₹{data.price}</h2>

            <button disabled={cart.some(obj => obj.id === data.id)} onClick={passDataToParentCart} className={`rounded text-white transtion duration-150 py-1 ${cart.some(obj => obj.id === data.id)?'bg-blue-300':'bg-blue-500 hover:bg-blue-600'}`}>Add to cart</button>

        </div>
    )
}

export default Product
