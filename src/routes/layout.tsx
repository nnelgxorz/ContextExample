// Import the context created in context.tsx
import { MyContext } from "~/context";
import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";


export default component$(() => {
  // Create our state as a store.
  const state = useStore({
    greeting: "Hello"
  });
  // Set our context with the state store.
  useContextProvider(MyContext, state);
  return (
    <>
      <Slot />
    </>
  );
});
