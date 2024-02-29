
import WorkExpirence from '@/components/WorkExpirence'
import Header from'../components/Header'
import Hero from '../components/Hero'
import About  from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/projects'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
  <>
<div className="bg-[rgb(36,36,36)] text-white h-screen snap-x snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20
 scrollbar-thumb-[#F7AB0A]/80 overflow-x-hidden">
<Header />
<section id ='hero'className='snap-start'>
<Hero/>
</section>
<section  id ='about'className='snap-center'>
<About/>
</section>
<section  id ='expirence'className='snap-center'>
<WorkExpirence/>
</section>
<section  id ='skills'className='snap-start'>
<Skills/>
</section>
<section  id ='projects'className='snap-start'>
<Projects/>
</section>
<section  id ='contact'className='snap-start'>
<ContactMe/>
</section>
  
  
  
</div>

  </>
  )
}
