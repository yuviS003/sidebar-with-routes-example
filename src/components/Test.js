import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function Test() {
    return (
        <div className="w-full h-[35rem] flex flex-col justify-center items-center">
            <div className="flex max-w-[20rem] bg-gray-400 p-2 rounded">
                <p className="max-w-[95%]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestias aliquam cupiditate nam ut quod vitae dolore officiis voluptas excepturi maxime velit minus molestiae maiores sed et, corporis odit sunt rem quibusdam vero! Sed quo velit adipisci possimus soluta rem vero est minima natus ea voluptas magni molestias ratione veritatis, voluptatum cumque, maiores repellat labore officia deleniti nostrum similique. Necessitatibus odit facere illum obcaecati enim, libero et aspernatur aliquid maxime quaerat amet adipisci praesentium deleniti neque cum repellendus dolores fugit vero beatae minus repellat. Id labore ullam veniam beatae accusantium voluptas, blanditiis eum eveniet ea placeat quaerat nihil libero consequatur.
                </p>
                <BsThreeDotsVertical className='text-black text-9xl w-[5%] text-end'/>
            </div>
        </div>
    )
}
