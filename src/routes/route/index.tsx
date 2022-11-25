import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import DoubleGreeting from "~/components/DoubleGreeting";
import { MyContext } from "~/context";

export default component$(() => {
    const store = useStore({
        greeting: "Hola"
    })
    useContextProvider(MyContext, store);
    return <>
        <DoubleGreeting />
    </>
})