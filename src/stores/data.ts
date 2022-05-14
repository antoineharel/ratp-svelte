import { ratp, Traffic } from "../lib/ratp";
import { writable } from "svelte/store";

export const traffic = writable<Traffic>();

const fetchTrafficData = () => {
  ratp.traffic().then((data) => {
    traffic.update(() => data);
  });
};

fetchTrafficData();

setInterval(() => {
  fetchTrafficData();
}, 60_000);
