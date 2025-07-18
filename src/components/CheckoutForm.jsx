import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { clearCart } from '../features/cart/cartSlice';

export const action = (store, queryClient) => async ({request}) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;

    const info = {
        name, 
        address, 
        chargeTotal: orderTotal, 
        orderTotal: formatPrice(orderTotal), 
        cartItems,
        numItemsInCart,
    }

    try{
        const response = await customFetch.post('/orders', { data: info }, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        queryClient.removeQueries(['orders']);
        store.dispatch(clearCart());
        return redirect('/orders');
    }catch(error) {
        if([401, 403].includes(error?.response?.status)) return redirect('/login');
        alert(`Error placing order: ${error?.response?.data?.error?.message || 'There was an error placing your order'}`);
        return null
    }
}

const CheckoutForm = () => {
    return <Form method='POST' className='flex flex-col gap-y-4 w-auto'>
            <h4 className='font-medium text-xl capitalize'>Shipping Information</h4>
            <FormInput 
                label='First Name' 
                name='name' 
                type='text'
                size='w-full'
            />
            <FormInput 
                label='Address' 
                name='address' 
                type='text'
                size='w-full' 
            />
            
            <div className='mt-4'>
                <SubmitBtn text='Place Your Order' />
            </div>
        </Form>

}
export default CheckoutForm;

// export const action =
//   (store) =>
//   async ({ request }) => {
//     const formData = await request.formData();
//     const { name, address } = Object.fromEntries(formData);
//     const user = store.getState().userState.user;
//     const { cartItems, orderTotal, numItemsInCart } =
//       store.getState().cartState;

//     const info = {
//       name,
//       address,
//       chargeTotal: orderTotal,
//       orderTotal: formatPrice(orderTotal),
//       cartItems,
//       numItemsInCart,
//     };
//     try {
//       const response = await customFetch.post(
//         '/orders',
//         { data: info },
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );
//       store.dispatch(clearCart());
//       toast.success('order placed successfully');
//       return redirect('/orders');
//     } catch (error) {
//       console.log(error);
//       const errorMessage =
//         error?.response?.data?.error?.message ||
//         'there was an error placing your order';

//       toast.error(errorMessage);
//       return null;
//     }
//   };
// const CheckoutForm = () => {
//   return (
//     <Form method='POST' className='flex flex-col gap-y-4'>
//       <h4 className='font-medium text-xl'>Shipping Information</h4>
//       <FormInput label='first name' name='name' type='text' />
//       <FormInput label='address' name='address' type='text' />
//       <div className='mt-4'>
//         <SubmitBtn text='Place Your Order' />
//       </div>
//     </Form>
//   );
// };
