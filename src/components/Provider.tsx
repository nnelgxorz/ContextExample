import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { MyContext } from "~/context";

export default component$(() => {
    const store = useStore({
        greeting: "Howdy"
    });
    useContextProvider(MyContext, store);
    return <Slot/>
})