import './App.css'
import { profiles } from './res/profiles'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <h1>Developer Profiles</h1>
      <div className="profile-container">
        {
          profiles.map( (profile, index) => (
            <Profile 
              key={index} 
              profile={profile}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
