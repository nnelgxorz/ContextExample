import { component$, useContext } from "@builder.io/qwik";
import { MyContext } from "~/context";

export default component$(() => {
  const data = useContext(MyContext);
  return <p>{data.greeting} {data.greeting}, Mousa!</p>  
})