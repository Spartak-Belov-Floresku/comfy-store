import { redirect, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { OrdersList, ComplexPaginationContainer, SectionTitle } from '../components';

export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader = (store, queryClient) => async({request}) => {
    const user = store.getState().userState.user;
    if(!user || user?.username == 'coding addict') return redirect('/login');
    
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    try{
        const response = await queryClient.ensureQueryData(ordersQuery(params, user));
        return {
            orders: response.data.data,
            meta: response.data.meta,
        };
    }catch(err){
        if([401, 403].includes(err?.response?.status)) return redirect('/login');
        alert(`Error placing order: ${err?.response?.data?.error?.message || 'There was an error placing your order'}`);
        return null
    }
}

const Orders = () => {
    const { meta } = useLoaderData();
    if(meta?.pagination?.total < 1) return <SectionTitle title='No Orders Found' />;
    return (
        <div>
            <SectionTitle title='your orders' />
            <OrdersList/>
            <ComplexPaginationContainer />
        </div>
    )
}

export default Orders
