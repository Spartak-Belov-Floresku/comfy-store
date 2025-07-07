import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action = store => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try{
        const response = await customFetch.post('/auth/local', data);
        store.dispatch(loginUser(response.data));
        return redirect('/');
    }catch(err){
        const errorMessage = err?.response?.data?.error?.message || 'Something went wrong';
        console.error('Login error:', errorMessage);
        return null;
    }
  };

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginAsGuestUser = async () => {
        try{
            const response = await customFetch.post('/auth/local',{
                identifier: 'test@test.com',
                password: 'secret'
            });
            dispatch(loginUser(response.data));
            navigate('/');
        }catch(err){
            console.error('Guest login error:', err);
        }
    }

    return (
        <section className="h-screen grid place-items-center">
            <Form method='post' className="cart w-96 py-8 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput
                    type='email'
                    label='email'
                    name='identifier'
                    defaultValue='test@test.com'
                    />
                <FormInput
                    type='password'
                    label='password'
                    name='password'
                    defaultValue='secret'
                    />
                <div className="mt-4">
                    <SubmitBtn text='login' />
                </div>
                <button 
                    type="button" 
                    className="btn btn-secondary btn-block uppercase" 
                    onClick={loginAsGuestUser}
                >
                    guest user
                </button>
                <p className="text-center">
                    Not a member yest? <Link to='/register' className="ml-2 link link-hover link-primary capitalize">Register</Link>    
                </p>
            </Form>
        </section>
    )
}

export default Login
