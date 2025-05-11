import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main>
        <SignedIn>
          <div>
            <h1>Welcome to Lock-In!</h1>
            <p>Your protected content is here.</p>
          </div>
        </SignedIn>
        <SignedOut>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Please sign in to continue.</h2>
          </div>
        </SignedOut>
      </main>
    </>
  )
}

export default App
