import './App.css'
import { lazy, Suspense } from 'react'

const Profile = lazy(() => import("./components/profile/Profile"));
const Contacts = lazy(() => import("./components/contacts/Contacts"));
const Header = lazy(() => import("./components/header/Header"));
const Info = lazy(() => import("./components/info/Info"));
const Projects = lazy(() => import("./components/projects/Projects"))
const Settings = lazy(() => import("./components/settings/Settings"))

function App() {
  return (
    <main className='main-wrapper'>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Contacts/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Info/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Projects/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Settings/>
      </Suspense>
    </main>
  )
}

export default App
