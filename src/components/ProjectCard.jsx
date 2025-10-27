import React from 'react'

const ProjectCard = ({ title, description, image, tech, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 
      transition duration-300 cursor-pointer block'
    >
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {tech && tech.map((item, index) => (
            <span 
              key={index} 
              className='px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
