"use client"

import { searchAction } from '@/actions/search'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchInput =  () => {

 const searchParams = useSearchParams()

  return (
    <form className='hidden md:block' action={searchAction}>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground'/>
        <Input defaultValue={searchParams.get('search') || ""} type='text' name='search' placeholder='Search...' className='pl-10 w-48 focus-visible:ring-1'/>
      </div>
    </form>
  )
}

export default SearchInput
