import tailwind from "tailwindcss";
import * as tailwindConfig from "./tailwind.config.cjs";
import autoprefixer from "autoprefixer";

console.log(tailwindConfig);

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
