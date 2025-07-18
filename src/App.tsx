import { onMount, createSignal } from "solid-js";
import { createStageContext, Stage } from "solid-infinite-canvas";
import ResizePlugin, {
  ElementTransformControls,
} from "solid-infinite-canvas/plugins/ResizePlugin";
import ConnectionsPlugin from "solid-infinite-canvas/plugins/ConnectionsPlugin";
import { createId } from "@paralleldrive/cuid2";

// highlight.js is assumed to be loaded in the HTML file for syntax highlighting

function App() {
  return (
    <main class="p-8 flex flex-col gap-8 bg-zinc-100 min-h-screen">
      <div class="w-[1532px] mx-auto">
        <a
          href="https://github.com/merkie/solid-infinite-canvas"
          target="_blank"
          class="text-3xl font-medium pt-4 text-cyan-700 underline"
        >
          solid-infinite-canvas
        </a>
      </div>
      <div class="w-[1532px] mx-auto mt-8">
        <h1 class="text-xl font-bold text-zinc-800 tracking-wider border-b border-zinc-300 pb-2">
          Bare Bones Example
        </h1>
      </div>
      <ShapesExample />
      <div class="w-[1532px] mx-auto mt-8">
        <h1 class="text-xl font-bold text-zinc-800 tracking-wider border-b border-zinc-300 pb-2">
          Connections Example
        </h1>
      </div>
      <ConnectionsExample />
      <div class="h-[200px]"></div>
    </main>
  );
}

function ShapesExample() {
  const stagectx = createStageContext();
  const { actions } = stagectx;
  const [activeTab, setActiveTab] = createSignal("OUTPUT");

  onMount(() => {
    actions.createElement({
      type: "rectangle",
      rect: { x: 100, y: 100, width: 150, height: 100 },
      props: { color: "cornflowerblue" },
    });
    actions.createElement({
      type: "circle",
      rect: { x: 300, y: 250, width: 100, height: 100 },
      props: { color: "tomato" },
    });
    actions.createElement({
      type: "triangle",
      rect: { x: 500, y: 150, width: 100, height: 100 },
      props: { color: "limegreen" },
    });
    actions.createElement({
      type: "star",
      rect: { x: 200, y: 350, width: 100, height: 100 },
      props: { color: "gold" },
    });
    setTimeout(() => {
      actions.centerContent();
    }, 0);
  });

  const codeExample = `import { onMount } from "solid-js";
import { createStageContext, Stage } from "solid-infinite-canvas";

function ShapesExample() {
  const stagectx = createStageContext();
  const { actions } = stagectx;

  onMount(() => {
    actions.createElement({
      type: "rectangle",
      rect: { x: 100, y: 100, width: 150, height: 100 },
      props: { color: "cornflowerblue" },
    });
    actions.createElement({
      type: "circle",
      rect: { x: 300, y: 250, width: 100, height: 100 },
      props: { color: "tomato" },
    });
    actions.createElement({
      type: "triangle",
      rect: { x: 500, y: 150, width: 100, height: 100 },
      props: { color: "limegreen" },
    });
    actions.createElement({
      type: "star",
      rect: { x: 200, y: 350, width: 100, height: 100 },
      props: { color: "gold" },
    });
    setTimeout(() => {
      actions.centerContent();
    }, 0);
  });

  return (
    <Stage
      context={stagectx}
      components={{
        elements: {
          rectangle: ({ stage, element, elementId }) => {
            const isSelected = () =>
              stage.state.selectedElements[stage.clientId]?.includes(
                elementId
              );

            return (
              <div
                class="absolute inset-0 w-full h-full"
                style={{
                  "background-color": element.props.color,
                  opacity: isSelected() ? 0.5 : 1,
                }}
              />
            );
          },
          circle: ({ stage, element, elementId }) => {
            const isSelected = () =>
              stage.state.selectedElements[stage.clientId]?.includes(
                elementId
              );

            return (
              <div
                class="absolute inset-0 w-full h-full rounded-full"
                style={{
                  "background-color": element.props.color,
                  opacity: isSelected() ? 0.5 : 1,
                }}
              />
            );
          },
          triangle: ({ stage, element, elementId }) => {
            const isSelected = () =>
              stage.state.selectedElements[stage.clientId]?.includes(
                elementId
              );

            return (
              <div
                class="absolute inset-0 w-full h-full"
                style={{
                  "clip-path": "polygon(50% 0%, 0% 100%, 100% 100%)",
                  "background-color": element.props.color,
                  opacity: isSelected() ? 0.5 : 1,
                }}
              />
            );
          },
          star: ({ stage, element, elementId }) => {
            const isSelected = () =>
              stage.state.selectedElements[stage.clientId]?.includes(
                elementId
              );
            return (
              <div
                class="absolute inset-0 w-full h-full"
                style={{
                  "clip-path":
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  "background-color": element.props.color,
                  opacity: isSelected() ? 0.5 : 1,
                }}
              />
            );
          },
        },
      }}
    />
  );
}`;

  return (
    <div class="flex gap-[32px] justify-center">
      <div class="w-[750px] h-[500px] relative rounded-2xl overflow-hidden border shadow-lg border-zinc-400">
        <Stage
          context={stagectx}
          components={{
            elements: {
              rectangle: ({ stage, element, elementId }) => {
                const isSelected = () =>
                  stage.state.selectedElements[stage.clientId]?.includes(
                    elementId
                  );

                return (
                  <div
                    class="absolute inset-0 w-full h-full"
                    style={{
                      "background-color": element.props.color,
                      opacity: isSelected() ? 0.5 : 1,
                    }}
                  />
                );
              },
              circle: ({ stage, element, elementId }) => {
                const isSelected = () =>
                  stage.state.selectedElements[stage.clientId]?.includes(
                    elementId
                  );

                return (
                  <div
                    class="absolute inset-0 w-full h-full rounded-full"
                    style={{
                      "background-color": element.props.color,
                      opacity: isSelected() ? 0.5 : 1,
                    }}
                  />
                );
              },
              triangle: ({ stage, element, elementId }) => {
                const isSelected = () =>
                  stage.state.selectedElements[stage.clientId]?.includes(
                    elementId
                  );

                return (
                  <div
                    class="absolute inset-0 w-full h-full"
                    style={{
                      "clip-path": "polygon(50% 0%, 0% 100%, 100% 100%)",
                      "background-color": element.props.color,
                      opacity: isSelected() ? 0.5 : 1,
                    }}
                  />
                );
              },
              star: ({ stage, element, elementId }) => {
                const isSelected = () =>
                  stage.state.selectedElements[stage.clientId]?.includes(
                    elementId
                  );
                return (
                  <>
                    <div
                      class="absolute inset-0 w-full h-full"
                      style={{
                        "clip-path":
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        "background-color": element.props.color,
                        opacity: isSelected() ? 0.5 : 1,
                      }}
                    />
                  </>
                );
              },
            },
          }}
        />
      </div>
      <div class="h-[500px] w-[750px] flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <button
            class={`tracking-wider border-b-2 text-zinc-800 cursor-pointer transition-all ${
              activeTab() === "OUTPUT"
                ? "border-zinc-800"
                : "border-transparent opacity-50 hover:opacity-75"
            }`}
            onClick={() => setActiveTab("OUTPUT")}
          >
            OUTPUT
          </button>
          <button
            class={`tracking-wider border-b-2 text-zinc-800 cursor-pointer transition-all ${
              activeTab() === "CODE"
                ? "border-zinc-800"
                : "border-transparent opacity-50 hover:opacity-75"
            }`}
            onClick={() => setActiveTab("CODE")}
          >
            CODE
          </button>
        </div>
        <div class="flex-1 tracking-wide overflow-y-auto bg-zinc-900 text-zinc-100 p-4 rounded-lg">
          {activeTab() === "OUTPUT" ? (
            <pre class="text-xs">
              <code
                class="language-json"
                innerHTML={
                  (window as unknown as any).hljs
                    ? (window as unknown as any).hljs.highlight(
                        JSON.stringify(stagectx.state, null, 2),
                        { language: "json" }
                      ).value
                    : JSON.stringify(stagectx.state, null, 2)
                }
              />
            </pre>
          ) : (
            <pre class="text-xs">
              <code
                class="language-jsx"
                innerHTML={
                  (window as unknown as any).hljs
                    ? (window as unknown as any).hljs.highlight(codeExample, {
                        language: "jsx",
                      }).value
                    : codeExample
                }
              />
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

function ConnectionsExample() {
  const stagectx = createStageContext();
  const { actions } = stagectx;
  const [activeTab, setActiveTab] = createSignal("OUTPUT");

  onMount(() => {
    const agentId = actions.createElement({
      type: "agent",
      rect: { x: 500, y: 123, width: 200, height: 250 },
      props: {},
    });
    const toolOneId = actions.createElement({
      type: "tool",
      rect: { x: 76, y: 86, width: 100, height: 100 },
      props: {},
    });
    const toolTwoId = actions.createElement({
      type: "tool",
      rect: { x: 76, y: 206, width: 100, height: 100 },
      props: {},
    });
    const toolThreeId = actions.createElement({
      type: "tool",
      rect: { x: 76, y: 326, width: 100, height: 100 },
      props: {},
    });

    stagectx.setState("ext", "connectionWires", {});

    let newId = createId();
    stagectx.setState("ext", "connectionWires", newId, {
      id: newId,
      toElementId: agentId,
      fromElementId: toolOneId,
    });

    newId = createId();
    stagectx.setState("ext", "connectionWires", newId, {
      id: newId,
      toElementId: agentId,
      fromElementId: toolTwoId,
    });

    newId = createId();
    stagectx.setState("ext", "connectionWires", newId, {
      id: newId,
      toElementId: agentId,
      fromElementId: toolThreeId,
    });

    setTimeout(() => {
      actions.centerContent();
    }, 0);
  });

  const codeExample = `import { onMount } from "solid-js";
import { createStageContext, Stage } from "solid-infinite-canvas";
import ResizePlugin, { ElementTransformControls } from "solid-infinite-canvas/plugins/ResizePlugin";
import ConnectionsPlugin from "solid-infinite-canvas/plugins/ConnectionsPlugin";
import { createId } from "@paralleldrive/cuid2";

function ConnectionsExample() {
  const stagectx = createStageContext();
  const { actions } = stagectx;

  onMount(() => {
    const agentId = actions.createElement({
      type: "agent",
      rect: { x: 500, y: 123, width: 200, height: 250 },
      props: {},
    });
    const toolOneId = actions.createElement({
      type: "tool",
      rect: { x: 76, y: 86, width: 100, height: 100 },
      props: {},
    });
    const toolTwoId = actions.createElement({
      type: "tool",
      rect: { x: 76, y: 206, width: 100, height: 100 },
      props: {},
    });
    const toolThreeId = actions.createElement({
      type: "tool",
      rect: { x: 76, y: 326, width: 100, height: 100 },
      props: {},
    });

    stagectx.setState("ext", "connectionWires", {});

    let newId = createId();
    stagectx.setState("ext", "connectionWires", newId, {
      id: newId,
      toElementId: agentId,
      fromElementId: toolOneId,
    });

    newId = createId();
    stagectx.setState("ext", "connectionWires", newId, {
      id: newId,
      toElementId: agentId,
      fromElementId: toolTwoId,
    });

    newId = createId();
    stagectx.setState("ext", "connectionWires", newId, {
      id: newId,
      toElementId: agentId,
      fromElementId: toolThreeId,
    });
    
    setTimeout(() => {
      actions.centerContent();
    }, 0);
  });

  return (
    <div class="w-[750px] h-[500px] relative rounded-2xl overflow-hidden border shadow-lg border-zinc-400">
        <Stage
          context={stagectx}
          plugins={[ResizePlugin, ConnectionsPlugin]}
          components={{
            elements: {
              agent: ({ stage, elementId }) => (
                <>
                  <div class="absolute flex flex-col inset-0 w-full h-full rounded-lg border-1 border-zinc-300 bg-white shadow-md">
                    <div class="p-1 tracking-wider bg-zinc-100 text-xs font-mono px-2 flex items-center">
                      <p class="select-none">AGENT</p>
                    </div>
                    <div class="flex flex-col gap-2 flex-1 p-2">
                      <div class="bg-zinc-100 rounded-sm flex-1"></div>
                      <div class="bg-zinc-100 rounded-sm flex-2"></div>
                      <div class="bg-zinc-100 rounded-sm flex-1"></div>
                    </div>
                  </div>
                  <ElementTransformControls elementId={elementId} stagectx={stage} />
                  <div
                    data-sic-type="connection-point"
                    data-element-id={elementId}
                    data-connection-point="input"
                    class="absolute h-[20px] w-[20px] rounded-full bg-cyan-500 border-4 border-white top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 cursor-pointer"
                  />
                </>
              ),
              tool: ({ stage, elementId }) => (
                <>
                  <div class="absolute flex flex-col inset-0 w-full h-full rounded-lg border-1 border-zinc-300 bg-white shadow-md">
                    <div class="p-1 tracking-wider bg-zinc-100 text-xs font-mono px-2 flex items-center">
                      <p class="select-none">TOOL</p>
                    </div>
                    <div class="flex flex-col gap-2 flex-1 p-2">
                      <div class="bg-zinc-100 rounded-sm flex-1"></div>
                      <div class="bg-zinc-100 rounded-sm flex-2"></div>
                      <div class="bg-zinc-100 rounded-sm flex-1"></div>
                    </div>
                  </div>
                  <ElementTransformControls elementId={elementId} stagectx={stage} />
                  <div
                    data-sic-type="connection-point"
                    data-element-id={elementId}
                    data-connection-point="output"
                    class="absolute h-[20px] w-[20px] rounded-full bg-lime-500 border-4 border-white top-1/2 translate-x-1/2 -translate-y-1/2 right-0 cursor-pointer"
                  />
                </>
              ),
            },
          }}
        />
        <div class="absolute bottom-4 right-4 bg-white shadow-sm flex flex-col">
          <button
            onClick={actions.zoomIn}
            class="h-[30px] w-[30px] font-bold cursor-pointer active:bg-zinc-50"
          >
            +
          </button>
          <button
            onClick={actions.zoomOut}
            class="h-[30px] w-[30px] font-bold cursor-pointer active:bg-zinc-50"
          >
            -
          </button>
        </div>
    </div>
  );
}`;

  return (
    <div class="flex gap-[32px] justify-center">
      <div class="w-[750px] h-[500px] relative rounded-2xl overflow-hidden border shadow-lg border-zinc-400">
        <Stage
          context={stagectx}
          plugins={[ResizePlugin, ConnectionsPlugin]}
          components={{
            elements: {
              agent: ({ stage, elementId }) => {
                return (
                  <>
                    <div class="absolute flex flex-col inset-0 w-full h-full rounded-lg border-1 border-zinc-300 bg-white shadow-md">
                      <div class=" p-1 tracking-wider bg-zinc-100 text-xs font-mono px-2 flex items-center">
                        <p class="select-none">AGENT</p>
                      </div>
                      <div class="flex flex-col gap-2 flex-1 p-2">
                        <div class="bg-zinc-100 rounded-sm flex-1"></div>
                        <div class="bg-zinc-100 rounded-sm flex-2"></div>
                        <div class="bg-zinc-100 rounded-sm flex-1"></div>
                      </div>
                    </div>
                    <ElementTransformControls
                      elementId={elementId}
                      stagectx={stage}
                    />
                    <div
                      data-sic-type="connection-point"
                      data-element-id={elementId}
                      data-connection-point="input"
                      class="absolute h-[20px] w-[20px] rounded-full bg-cyan-500 border-4 border-white top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 cursor-pointer"
                    ></div>
                  </>
                );
              },
              tool: ({ stage, elementId }) => {
                return (
                  <>
                    <div class="absolute flex flex-col inset-0 w-full h-full rounded-lg border-1 border-zinc-300 bg-white shadow-md">
                      <div class=" p-1 tracking-wider bg-zinc-100 text-xs font-mono px-2 flex items-center">
                        <p class="select-none">TOOL</p>
                      </div>
                      <div class="flex flex-col gap-2 flex-1 p-2">
                        <div class="bg-zinc-100 rounded-sm flex-1"></div>
                        <div class="bg-zinc-100 rounded-sm flex-2"></div>
                        <div class="bg-zinc-100 rounded-sm flex-1"></div>
                      </div>
                    </div>
                    <ElementTransformControls
                      elementId={elementId}
                      stagectx={stage}
                    />
                    <div
                      data-sic-type="connection-point"
                      data-element-id={elementId}
                      data-connection-point="output"
                      class="absolute h-[20px] w-[20px] rounded-full bg-lime-500 border-4 border-white top-1/2 translate-x-1/2 -translate-y-1/2 right-0 cursor-pointer"
                    ></div>
                  </>
                );
              },
            },
          }}
        />
        <div class="absolute bottom-4 right-4 bg-white shadow-sm flex flex-col">
          <button
            onClick={actions.zoomIn}
            class="h-[30px] w-[30px] font-bold cursor-pointer active:bg-zinc-50"
          >
            +
          </button>
          <button
            onClick={actions.zoomOut}
            class="h-[30px] w-[30px] font-bold cursor-pointer active:bg-zinc-50"
          >
            -
          </button>
        </div>
      </div>
      <div class="h-[500px] w-[750px] flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <button
            class={`tracking-wider border-b-2 text-zinc-800 cursor-pointer transition-all ${
              activeTab() === "OUTPUT"
                ? "border-zinc-800"
                : "border-transparent opacity-50 hover:opacity-75"
            }`}
            onClick={() => setActiveTab("OUTPUT")}
          >
            OUTPUT
          </button>
          <button
            class={`tracking-wider border-b-2 text-zinc-800 cursor-pointer transition-all ${
              activeTab() === "CODE"
                ? "border-zinc-800"
                : "border-transparent opacity-50 hover:opacity-75"
            }`}
            onClick={() => setActiveTab("CODE")}
          >
            CODE
          </button>
        </div>
        <div class="flex-1 tracking-wide overflow-y-auto bg-zinc-900 text-zinc-100 p-4 rounded-lg">
          {activeTab() === "OUTPUT" ? (
            <pre class="text-xs">
              <code
                class="language-json"
                innerHTML={
                  (window as unknown as any).hljs
                    ? (window as unknown as any).hljs.highlight(
                        JSON.stringify(stagectx.state, null, 2),
                        { language: "json" }
                      ).value
                    : JSON.stringify(stagectx.state, null, 2)
                }
              />
            </pre>
          ) : (
            <pre class="text-xs">
              <code
                class="language-jsx"
                innerHTML={
                  (window as unknown as any).hljs
                    ? (window as unknown as any).hljs.highlight(codeExample, {
                        language: "jsx",
                      }).value
                    : codeExample
                }
              />
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
