import './App.css'
import { lazy, Suspense } from 'react'

const Profile = lazy(() => import("./components/profile/Profile"));
const Header = lazy(() => import("./components/header/Header"));


function App() {
  return (
    <main className='main-wrapper'>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
      </Suspense>
    </main>
  )
}

export default App
