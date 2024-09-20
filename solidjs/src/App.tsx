import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'



let nodesData: readonly Node[] = Object.freeze([
	{
		name: "Home",
		nodes: [
			{
				name: "Movies",
				nodes: [
					{
						name: "Action",
						nodes: [
							{name: "Die hard", nodes: []},
							{name: "Rambo", nodes: []},
							{name: "Terminator", nodes: []},
						],
					},
					{name: "Drama", nodes: [{name: "Titanic", nodes: []}]},
					{name: "Comedy", nodes: [{name: "Click", nodes: []}]},
				],
			},
			{
				name: "Music",
				nodes: [
					{
						name: "2000",
						nodes: [
							{
								name: "Pop",
								nodes: [
									{name: "Britney Spears", nodes: []},
									{name: "Backstreet Boys", nodes: []},
								],
							},
							{
								name: "Rock",
								nodes: [
									{name: "Linkin Park", nodes: []},
									{name: "Nickelback", nodes: []},
								],
							},
						],
					},
					{
						name: "2010",
						nodes: [{name: "Pop", nodes: [{name: "Justin Bieber", nodes: []}]}],
					},
					{
						name: "2020",
						nodes: [{name: "Pop", nodes: [{name: "Dua Lipa", nodes: []}]}],
					},
				],
			},
			{
				name: "Pictures",
				nodes: [
					{
						name: "Selfies",
						nodes: [
							{name: "me.jpg", nodes: []},
							{name: "me2.jpg", nodes: []},
						],
					},
					{
						name: "Vacation",
						nodes: [
							{name: "beach.jpg", nodes: []},
							{name: "mountain.jpg", nodes: []},
						],
					},
				],
			},
		],
	},
]);


function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
