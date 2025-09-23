import './App.css'
import { lazy, Suspense } from 'react'

const Profile = lazy(() => import("./components/profile/Profile"))

function App() {
  return (
    <main className='main-wrapper'>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile/>
      </Suspense>
    </main>
  )
}

export default App
