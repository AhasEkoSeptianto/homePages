import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BiSearchAlt } from 'react-icons/bi'
import { Fragment, useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [ search, setSearch ] = useState('')

  const Submit = (e:any) => {
    e.preventDefault()
    let protocol = ['http://', 'https://']
    let isUseProtocol = protocol.filter(item => search.includes(item)) 
    
    if (search){
      window.location.href = isUseProtocol.length > 0 ? search : 'http://www.google.com/search?q=' + search
    }
  }

  useEffect(() => {
    setSearch('')
  },[])

  return (
    <Fragment>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className='bg-homeBGImage h-screen w-screen bg-cover bg-no-repeat bg-center'>
        <form onSubmit={Submit} className='h-1/3 flex items-center justify-center'>
          <div className='flex items-center bg-gray-700 rounded-full w-1/3'>
            <input 
              type='text'
              autoComplete='false'
              className='outline-none py-4 px-5 w-11/12 bg-transparent'
              placeholder='Search on the web..'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button type='submit'>
              <BiSearchAlt size={25} className='text-gray-100' />
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Home
