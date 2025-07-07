import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const singleProductQuery = id => {
    return {
        queryKey: ['singleProduct'],
        queryFn: async () => await customFetch(`/products/${id}`)
    };
}

export const loader = queryClient => async ({params}) => {
    const response  = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return {product: response.data.data}
}

const SingleProduct = () => {
    const { product } = useLoaderData();
    const {image, title, price, description, colors, company} = product.attributes;
    const [isProductColor, setIsProductColor] = useState(colors[0]);
    const [isAmount, setIsAmount] = useState(1);

    const handleAmount = e => setIsAmount(e.target.value);

    const cartProduct = {
        cartID: product.id + isProductColor,
        productID: product.id,
        image,
        title,
        price,
        company,
        productColor: isProductColor,
        amount: isAmount,
    }

    const dispatch = useDispatch();

    const addToCart = () => {dispatch(addItem({product: cartProduct}));}

    return (
        <section>
            <div className="text-md breadcrumbs">
               <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul> 
            </div>
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg::w-full'/>
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-lg text-neutral-content font-bold mt-2'>{company}</h4>
                    <p className='text-xl mt-3'>{formatPrice(price)}</p>
                    <p className='leading-8 mt-6'>{description}</p>
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'>Colors</h4>
                        <div className='mt-2'>
                            {colors.map(color => {
                                return <button
                                key={color}
                                type='button'
                                className={`badge w-6 h-6 mr-2 rounded-full ${
                                  color === isProductColor && 'border-1 border-white'
                                }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setIsProductColor(color)}
                              ></button>
                            })}
                        </div>
                    </div>
                    <div className="mt-6 form-control w-full max-w-xs">
                        <label className=' mb-2 label'>
                            <h4 className='text=md font-medium -tracking-wider capitalize'>
                                amount
                            </h4>
                        </label>
                        <select className='select select-white select-bordered select-md'
                            id='amount'
                            value={isAmount}
                            onChange={handleAmount}>
                                {generateAmountOptions(3)}
                        </select>
                    </div>
                    <div className='mt-10'>
                        <button 
                            className='btn btn-secondary btn-md'
                            onClick={addToCart}
                        >Add to bag</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct
