import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from '../components/Button';
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
<div className="flex-1">
        <img src={offer} alt="offer"
        width={773}
        height={687}
        className="object-contain w-full" />
      </div>

      <div className="flex flex-col flex-1">
      <h2 className='capitalize font-palanquin text-4xl font-bold lg:max-w-lg'>
           <span className="text-coral-red"> Special </span>
            Offer
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.Discover stylish Nike arrivals,
      </p>
      <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Shop now' iconURL={arrowRight} />
        <Button label='Learn more'
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"
         /></div>
        </div>
    </section>
  )
}

export default SpecialOffer