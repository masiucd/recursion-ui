import {ChevronDown, ChevronRight, File, Folder} from "lucide-solid";
import {createSignal} from "solid-js";
import {For, Show} from "solid-js/web";
import {cn} from "./utils";

type Node = {
	name: string;
	nodes: readonly Node[];
};
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
	return (
		<main>
			<For each={nodesData}>{(n) => <Node node={n} />}</For>
		</main>
	);
}

function Node({node}: {node: Node}) {
	let [isOpen, setIsOpen] = createSignal(false);
	let hasNodes = node.nodes.length > 0;
	return (
		<>
			<button
				type="button"
				class={cn("flex items-center gap-1 my-2", hasNodes ? "ml-2" : "ml-5")}
				onClick={() => setIsOpen(!isOpen())}
			>
				<Show when={hasNodes}>
					<Show when={isOpen()} fallback={<ChevronRight />}>
						<ChevronDown />
					</Show>
				</Show>
				<Show when={hasNodes} fallback={<File />}>
					<Folder />
				</Show>
				<span>{node.name}</span>
			</button>
			<Show when={isOpen()}>
				<ul class="pl-4">
					<For each={node.nodes}>
						{(n) => (
							<li>
								<Node node={n} />
							</li>
						)}
					</For>
				</ul>
			</Show>
		</>
	);
}

export default App;
