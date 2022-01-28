import info from "./data";
export default function test() {
  let champions = info.map((item) => {
    return item.champions;
  });
  console.log(champions);
}
