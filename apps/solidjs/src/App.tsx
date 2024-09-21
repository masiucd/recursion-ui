import {ChevronDown, ChevronRight, File, Folder} from "lucide-solid";
import {createSignal} from "solid-js";
import {For, Show} from "solid-js/web";
import{cn,nodesData,type Node} from "@recursion-ui/lib"



function App() {
	let [selectedFile, setSelectedFile] = createSignal<string | null>(null);
	return (
		<main>
			<div class="flex">
				<For each={nodesData}>
					{(n) => (
						<Node
							node={n}
							selectFile={(file: string) => setSelectedFile(file)}
						/>
					)}
				</For>
				<div>
					<Show when={selectedFile()}>
						<h2 class="text-xl font-bold">Selected file:</h2>
						<p>{selectedFile()}</p>
					</Show>
				</div>
			</div>
		</main>
	);
}

function Node({
	node,
	selectFile,
}: {node: Node; selectFile: (file: string) => void}) {
	let [isOpen, setIsOpen] = createSignal(false);
	let hasNodes = node.nodes.length > 0;
	return (
		<>
			<button
				type="button"
				class={cn("flex items-center gap-1 my-2", hasNodes ? "ml-2" : "ml-5")}
				onClick={() => {
					if (hasNodes) {
						setIsOpen(!isOpen());
					} else {
						selectFile(node.name);
					}
				}}
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
								<Node node={n} selectFile={selectFile} />
							</li>
						)}
					</For>
				</ul>
			</Show>
		</>
	);
}

export default App;
