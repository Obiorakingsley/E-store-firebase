import { defer } from "react-router-dom";

async function loaders() {
  try {
    const res = await fetch("./items.json");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = res.json();
    return defer({ promise: data });
  } catch (err) {
    return new Promise("Error fetching data");
  }
}

export default loaders;
