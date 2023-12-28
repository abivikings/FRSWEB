// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Footer from 'src/views/components/Footer/Footer'
import Hero from 'src/views/components/Hero/Hero'
import Join from 'src/views/components/Join/Join'
import Plans from 'src/views/components/Plans/Plans'
import Programs from 'src/views/components/Program/Program'
import Reasons from 'src/views/components/Reasons/Reasons'
import Testimonials from 'src/views/components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  )
}
Home.getLayout = page => <BlankLayout>{page}</BlankLayout>
Home.guestGuard = true

export default Home
