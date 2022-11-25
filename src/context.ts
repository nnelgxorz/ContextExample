import { createContext } from "@builder.io/qwik";

export const MyContext = createContext<{ greeting: string }>("MyContext");
