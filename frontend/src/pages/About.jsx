import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever, your ultimate destination for seamless and stylish online shopping!</p>
          <p>At Forever, we believe that shopping should be effortless, enjoyable, and accessible to everyone. Our platform offers a wide range of high-quality products, from fashion and accessories to home essentials and electronics—all curated to enhance your lifestyle.</p>
          <p>Shopping at Forever is all about style, convenience, and great deals! We bring you the hottest trends in fashion, accessories, and lifestyle products—all at unbeatable prices. Our platform is built for those who love to stay ahead of the curve, offering an exciting range of products that reflect the latest styles and innovations.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to redefine the online shopping experience by offering a seamless, enjoyable, and customer-centric platform. We strive to provide a diverse collection of high-quality products that cater to every need, ensuring that shopping is not just convenient but also exciting.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Your trust is our top priority, and we go the extra mile to ensure that every purchase is backed by quality assurance, secure transactions, and exceptional customer support.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>we prioritize your comfort and ease, ensuring that shopping with us is seamless, fast, and hassle-free.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, we believe that great shopping experiences go beyond just great products—they are built on trust, care, and exceptional service</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About