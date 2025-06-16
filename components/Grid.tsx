import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title,description, className, imgClassName, spareImg, img, titleClassName})=>(
                <BentoGridItem key={id} id={id} title={title} description={description} className={className} img={img} spareImg={spareImg} imgClassName={imgClassName} titleClassName={titleClassName}/>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid