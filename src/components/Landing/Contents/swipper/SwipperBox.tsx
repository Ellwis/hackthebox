import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import { Box } from '@mui/material';
import CardComponent from '../cards/Card';

const SwipperBox: FC = () => {

  return (
    <Box sx={{
      width: '94%',
      mx: 'auto',
      my: 5,
      display :{ xs: 'none' , md :'block'}
    }}>
      <Swiper
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}

      >
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        
      </Swiper>
    </Box>
  )

}

export default SwipperBox