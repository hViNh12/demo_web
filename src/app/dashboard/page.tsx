import { Suspense } from 'react'
//import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        loading...
      </Suspense>
    </section>
  )
}