import {ChevronDown, ChevronRight, File, Folder} from "lucide-solid";
import {createSignal} from "solid-js";
import {For, Show} from "solid-js/web";
import {type FileSystemNode, systemDataData} from "./data";
import {cn} from "./utils";

function App() {
	let [selectedFile, setSelectedFile] = createSignal<string | null>(null);

	return (
		<main class="flex justify-between max-w-screen-md mx-auto my-20">
			<div class="flex flex-col">
				<For each={systemDataData}>
					{(n) => {
						return (
							<FileSystemItem
								node={n}
								selectFile={(file: string) => {
									setSelectedFile(file);
								}}
							/>
						);
					}}
				</For>
			</div>
			<div>
				<Show
					when={selectedFile()}
					fallback={<h2 class="text-xl font-bold">No file selected</h2>}
				>
					<h2 class="text-xl font-bold">Selected file:</h2>
					<p>{selectedFile()}</p>
				</Show>
			</div>
		</main>
	);
}

function FileSystemItem({
	node,
	selectFile,
}: {
	node: FileSystemNode;
	selectFile: (file: string) => void;
}) {
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
								<FileSystemItem node={n} selectFile={selectFile} />
							</li>
						)}
					</For>
				</ul>
			</Show>
		</>
	);
}

export default App;
