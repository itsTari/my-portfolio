import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className=' w-full'>
        <BentoGrid>
            {gridItems.map(({id, title,description, className, imgClassName, img, techStack})=>(
                <BentoGridItem  key={id} id={id} title={title} description={description} className={className} img={img} imgClassName={imgClassName} techStack={techStack}/>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid