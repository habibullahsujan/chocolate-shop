import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { StarIcon } from 'lucide-react'
import React from 'react'

const ClientTestimonials = () => {
    const clientTestimonials = [{ img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }, { img: '', comment: 'Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus.', name: 'Jay Dixon', profession: 'Engineer', rating: 3 }]
    return (
        <section className='px-16 my-24'>

            <h1 className='py-24 font-bold text-4xl font-pacifico text-yellow-700'>Client Testimonials</h1>

            <div className='grid grid-cols-12 gap-8'>
                {
                    clientTestimonials.map((item, index) => (<div key={index} className='col-span-4 text-center'>
                        <div className='flex items-center justify-center mb-4' >
                            <Avatar >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <p className='py-4'>{item.comment}</p>
                        <p className='font-pacifico font-bold text-yellow-700'>{item.name}</p>
                        <p className='text-yellow-700'>{item.profession}</p>
                        <div className='flex items-center gap-2 justify-center py-3'>
                            {[...Array(item.rating)].map((_, index) => (<StarIcon key={index} className='w-6 h-6 text-yellow-800' />))}
                        </div>
                    </div>))
                }
            </div>
        </section>
    )
}

export default ClientTestimonials