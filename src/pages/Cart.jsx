import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";

export const loader = store => () => {
    const user = store.getState().userState.user;
    return user?.username == 'coding addict' ? redirect('/login') : null;
}

const Cart = () => {
    const user = useSelector(state => state.userState.user);
    const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);

    if (numItemsInCart === 0) {
        return (
            <div className='flex flex-col items-center justify-center h-screen'>
                <SectionTitle title='Your Cart is Empty' />
                <Link to='/products' className='btn btn-primary mt-4'>Go to Products</Link>
            </div>
        );
    }

    return (
        <>
            <SectionTitle title='Your Cart' />
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemsList />
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotals />
                    {user 
                        ? <Link to='/checkout' className='btn btn-secondary btn-block mt-8'>Proceed to Checkout</Link> 
                        : <Link to='/login' className='btn btn-secondary btn-block mt-8'>Please Login</Link>}
                </div>
            </div>
        </>
    )
}

export default Cart
