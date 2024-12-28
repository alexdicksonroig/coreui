import { useActionState } from 'react'

import { Button } from '@/components/components/button'

async function increment(previousState: number, _: any) {
  console.log(_)
  return previousState + 1
} 

function App() {
  const [state, formAction] = useActionState(increment, 0)

  return (
    <form>
      <div className="card">
        <Button variant='link' formAction={formAction}>
          count is {state}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </form>
  )
}

export default App
