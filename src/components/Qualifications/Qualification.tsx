import { Pagination } from 'swiper'
import { FaUniversity } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './qualification.scss'
import TimerCount from '../Timer/TimerCount'

interface QualificationItem {
  id: number
  link: string
  name: string
  test: string
}

const Qualification = () => {
  const qualifications: QualificationItem[] = [
    {
      id: 1,
      link: 'https://www.uminho.pt/PT',
      name: 'Education',
      test: 'Bachelor and Master degree in Telecommunications and Informatics Engineering at University of Minho',
    },
    {
      id: 2,
      link: 'https://www.uminho.pt/PT',
      name: 'Experience',
      test: 'Dissertation about development of an online store generation application using the MERN stack and integrating Redux for state management',
    },
  ]

  return (
    <section id="qualifications">
      <h5>My journey</h5>
      <h2>Qualifications</h2>

      <Swiper
        className="container qualifications__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {qualifications.map((test, index) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <FaUniversity />
              </a>
            </div>
            <h3 className="client__name">{test.name}</h3>
            <h4 className="client__review">{test.test}</h4>

            {index === 0 && (
              <div>
                <TimerCount deadline="September,15,2017"></TimerCount>
              </div>
            )}
            {index === 1 && (
              <div>
                <TimerCount deadline="Junho,24,2022"></TimerCount>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Qualification
