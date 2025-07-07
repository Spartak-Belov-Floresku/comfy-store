import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try{
    const response = await customFetch.post('/auth/local/register', data);
    return redirect('/login');
  }catch(err){
    const errorMessage = err?.response?.data?.error?.message || 'Something went wrong';
    console.error('Registration error:', errorMessage);
    return null;
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' name='username' label='username'/>
        <FormInput type='email' name='email' label='email'/>
        <FormInput type='password' name='password' label='password' />
        <div className='mt--4'>
            <SubmitBtn type='submit' text='Register' />
        </div>
        <p className="text-center">
            Already a member? <Link to='/login' className="ml-2 link link-hover link-primary capitalize">Login</Link>    
        </p>
      </Form>
    </section>
  )
}

export default Register
