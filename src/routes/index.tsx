import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DoubleGreeting from "~/components/DoubleGreeting";
import Provider from "~/components/Provider";
import { MyContext } from "~/context";

export default component$(() => {
  const data = useContext(MyContext);
  return (
    <>
      <Provider>
        <p>{data.greeting}, Mousa!</p>
        <DoubleGreeting/>
      </Provider>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
