import './App.css'
import { lazy, Suspense } from 'react'

const Profile = lazy(() => import("./components/profile/Profile"));
const Contacts = lazy(() => import("./components/contacts/Contacts"));
const Header = lazy(() => import("./components/header/Header"));
const Info = lazy(() => import("./components/info/Info"))

function App() {
  return (
    <main className='main-wrapper'>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
      </Suspense>

      <Suspense>
        <Contacts/>
      </Suspense>

      <Suspense>
        <Info/>
      </Suspense>
    </main>
  )
}

export default App
