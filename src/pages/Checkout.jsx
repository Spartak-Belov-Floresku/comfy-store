import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components"
import { redirect } from "react-router-dom";

export const loader = store => () => {
    const user = store.getState().userState.user;
    return user?.username == 'coding addict' || !user ? redirect('/login') : null;
}

const Checkout = () => {
    const cartTotal = useSelector(state => state.cartState.cartTotal)
    if(cartTotal === 0) {
        return <SectionTitle title='Your cart is empty' />
    }

    return <div>
            <SectionTitle title='place your order' />
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckoutForm />
                <CartTotals />
            </div>
        </div>
}

export default Checkout;