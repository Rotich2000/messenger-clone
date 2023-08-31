import React from 'react'

type Props = {}

const EmptyState = (props: Props) => {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-900'>
        <div className="text-center items-center flex flex-col">
            <p className='mt-2 text-2xl font-semibold text-white'>Select a chat or start a new conversation</p>
        </div>
    </div>
  )
}

export default EmptyState