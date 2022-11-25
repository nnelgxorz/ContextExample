import { component$, useStore, useContextProvider, useWatch$, $, useOnWindow } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build"
import DoubleGreeting from "~/components/DoubleGreeting";
import { MyContext } from "~/context";

export default component$(() => {
    const store = useStore({
        greeting: "..."
    });
    useContextProvider(MyContext, store);
    useOnWindow("load", $(() => {
        const localGreeting = localStorage.getItem("greeting");
        if (localGreeting) {
            store.greeting = localGreeting
        }
    }));
    useWatch$(({track}) => {
        const greeting = track(() => store.greeting);
        if (isServer) { return }
        localStorage.setItem("greeting", greeting);
    }, { eagerness: 'idle'})
    return <div>
        <button onClick$={() => {
            store.greeting = "Wassup"
        }}>Sup?</button>
        <DoubleGreeting/>
    </div>
})