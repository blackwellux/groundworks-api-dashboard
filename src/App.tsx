import { useState } from 'react'
import reactLogo from './assets/react.svg?url'
import viteLogo from '/vite.svg?url'
// Removed broken React wrapper import. We'll use the web component directly.
// If you later add the official React wrapper package (@trimble-oss/modus-react-components),
// you can switch back to importing { ModusButton } from that package.
// Loader in main.tsx registers web components; no per-component import needed here.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold text-secondary">Welcome to Groundworks Cloud</h1>
      <div className="p-8 flex items-center justify-center gap-4">
        {/**
         * Using the custom element directly. React doesn't automatically map custom events,
         * but a simple click works here for incrementing the count.
         */}
        <modus-button
          color="primary"
          type="solid"
          onClick={() => setCount((c) => c + 1)}
        >
          count is {count}
        </modus-button>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
