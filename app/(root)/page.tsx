import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import InterviewCard from '../components/InterviewCard'


const page = () => {
  return (
    <div>
      <section className='card-cta'>
      
      <div className='flex flex-col gap-6 max-w-lg'>
<h2>Get Interview-ready with AI-Powerd Practice & feedback</h2>

  <p className='text-lg'>
    practice on real interview questions & get instant feedback
  </p>
      <Button asChild className='btn-primary max-sm:w-full'>

        <Link href="/interview"> Start an Interview </Link>
      </Button>
      </div>
<Image src ="/robot.png" alt="robot-dude" width={400} height={400} className='max-sm:hidden'></Image>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interview-section'>
        {dummyInterviews.map((Interview) => (
  <InterviewCard key={Interview.id} {...Interview} />
))}

 
       </div>
      </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interview </h2>
      <div className='interviews-section'>
        <p>there are no interviews available</p>
      </div>
    </section>
        
    </div>
  )
}

export default page