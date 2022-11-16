import TopHeader from '../../../components/dashboard/TopHeader'
import { usePostData } from '../../../hooks/DataApi'
import TestimonialForm from '../../../components/forms/TestimonialForm'

const Add = () => {
  const defaultValues = {
    testimonialId: '',
    title: '',
    description: '',
    img: '',
  }

  const { mutateAsync } = usePostData()

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New testimonial"
        btn="Return"
        path="/dashboard/testimonials"
      />
      <TestimonialForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/testimonials/createTestimonial"
        returnPath="/dashboard/testimonials"
        mutateAsync={mutateAsync}
      />
    </div>
  )
}

export default Add
