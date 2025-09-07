import { useTitle } from '../../hooks/useTitle';
import {Hero} from './components/Hero';
import {FeaturedProducts} from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';

export const HomePage = () => {
  useTitle("Home");
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </>
  )
}
