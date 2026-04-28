import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className=' w-full bg-red-100'>
        <BentoGrid className='bg-green-700'>
            {gridItems.map(({id, title,description, className, imgClassName, spareImg, img, titleClassName})=>(
                <BentoGridItem  key={id} id={id} title={title} description={description} className={className} img={img} spareImg={spareImg} imgClassName={imgClassName} titleClassName={titleClassName}/>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid