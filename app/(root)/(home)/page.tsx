import Filters from '@/components/Filters'
import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import Image from 'next/image';


export const revalidate = 900;

type Props = {
  searchParams:{ [key: string] : string | undefined}
}

const Page = async ({ searchParams}: Props) => {
  
  
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  })

  const resourcesPlayList = await getResourcesPlaylist()

  return (
    <main className='flex-center flex-col paddings mx-auto w-full max-w-screen-2xl'>
      <section className='nav-padding w-full '>
        <div className='flex-center p-3 relative min-h-[274px] w-full flex-col rounded-xl  text-center'>
          <div className='w-full h-full'>
            <Image width={1280} height={274} alt='banner' src="/jsm_resources_banner.svg" loading='lazy' className='object-cover' />
          </div>
          <h1 className='md:heading1 heading2 md:absolute md:left-[50%] md:-translate-x-[50%] md:top-[50%] md:-translate-y-[50%] mt-5 sm:mt-0 flex items-center justify-center w-full h-full mb-6 text-center text-white'>Search for your favorite courses!</h1>
        </div>
        <SearchForm />
      </section>
      <Filters />

      {
        (searchParams?.query || searchParams?.category) && (
          <section className='flex-center w-full mt-6 flex-col sm:mt-20'>
            <Header 
              title= "Resources"
              query = {searchParams?.query || ''}
              category = {searchParams?.category || ''}
            />

            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
              {
                resources?.length > 0 ? (
                  resources.map((resource: any) => (
                    <ResourceCard key={resource._id}
                      title ={resource.title}
                      id = {resource._id}
                      image = {resource.image}
                      downloadNumber = {resource.views}
                      downloadLink = {resource.downloadLink}
                    />
                  ))
                ) : (
                  <p className='body-regular text-white-400 '>
                    No Resources Found
                  </p>
                )
              }
            </div>
          </section>
        )
      }

      {
        resourcesPlayList?.map((item : any) => (
          <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
            <h1 className='heading3 self-start text-white-800'>{item.title}</h1>
            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
              {
                item.resources.map((resource: any) => (
                  <ResourceCard key={resource._id}
                    title ={resource.title}
                    id = {resource._id}
                    image = {resource.image}
                    downloadNumber = {resource.views}
                    downloadLink = {resource.downloadLink}
                  />
                ))
              }
            </div>
          </section>
        ))
      }
    </main>
  )
}

export default Page