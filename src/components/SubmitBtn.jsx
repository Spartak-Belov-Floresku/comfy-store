import { useNavigation } from "react-router-dom";

const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <button
        type='submit' 
        className='btn btn-primary btn-block uppercase'
        disabled={isSubmitting}
    >
      { 
        isSubmitting
        ?   <>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="ml-2">Submitting...</span>
        </>:<>
            <span>{text}</span>
      </>
    }
    </button>
  )
}

export default SubmitBtn;