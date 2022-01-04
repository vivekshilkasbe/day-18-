/**
 *
 * @returns jsx => xml
 */

export default function App() {
  return (
    <div>
      {/* <div>Hello World</div>
      <div>Hello Universe</div> */}
      {/* <Sum></Sum> */}
      <Sum />
      <Sum />
      <Sum />
    </div>
  );
}
/**
 * html pre defined tags
 * react user defined tags => components
 * <div> </div>
 * <Sum></Sum>
 * @returns
 */

export function Sum() {
  return (
    <div>
      <h1>Home</h1>
      <p>lorem</p>
    </div>
  );
}
