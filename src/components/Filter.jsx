import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from '../../src/components/FormCheckbox';

const Filter = () => {
  const {meta, params } = useLoaderData();
  const initialValues = {
    search: params.search || '',
    category: params.category || 'all',
    company: params.company || 'all',
    order: params.order || 'a-z',
    price: params.price || undefined,
    shipping: params.shipping || false,
  };
  return (
    <Form 
      className='bg-base-200 rounded-md px-8 py-4 grid 
                 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 
                 lg:grid-cols-4 items-center'
    >
      <FormInput 
        type='search' 
        label='search product'
        name='search'
        size='input-sm'
        defaultValue={initialValues.search}
      />
      <FormSelect 
        label='select category' 
        name='category' 
        list={meta.categories} 
        size='select-sm'
        defaultValue={initialValues.category}
      />
      <FormSelect 
        label='select company' 
        name='company' 
        list={meta.companies} 
        size='select-sm'
        defaultValue={initialValues.company}
      />
      <FormSelect 
        label='sort by' 
        name='order' 
        list={['a-z','z-a','high','low']} 
        size='select-sm'
        defaultValue={initialValues.order}
      />
      <FormRange 
        label='select price' 
        name='price' 
        size='input-sm'
        price={initialValues.price}
      />
      <FormCheckbox 
        name='shipping'
        label='free shipping'
        size='checkbox-sm'
        defaultValue={initialValues.shipping ? 'checked' : ''}
      />
      <button type='submit' className='btn btn-secondary btn-sm capitalize'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm capitalize'>
        reset
      </Link>
    </Form>
  )
}

export default Filter
