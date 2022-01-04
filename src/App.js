/**
 *
 * @returns jsx => xml
 */
import HelloWorld from "./components/HelloWorld.js";

import HelloUniverse from "./components/HelloUniverse.js";
import { HelloWorld1, HelloWorld2 } from "./components/HelloWorld.js";

export default function App() {
  return (
    <div>
      {/* <div>Hello World</div>
      <div>Hello Universe</div> */}
      {/* <Sum></Sum>
      <Sum />
      <Sum />
      <Sum /> */}

      <HelloWorld />
      <HelloUniverse />

      <HelloWorld1 />
      <HelloWorld2 />
      <HelloWorld />
      <HelloUniverse />
      <HelloWorld />
      <HelloUniverse />
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

// export function Sum() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <p>lorem</p>
//     </div>
//   );
// }
// export function Hello() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>
//         NPM is short for node package manager, an online directory that contains
//         the various already registered open-source packages. NPM modules consume
//         the various functions as a third-party package when installed into an
//         app using the NPM command npm install .
//       </p>
//     </div>
//   );
// }
// function HelloUniverse() {
//   return (
//     <div>
//       <div>
//         <h1>Hello Universe</h1>
//         <p>
//           NPM is short for node package manager, an online directory that
//           contains the various already registered open-source packages. NPM
//           modules consume the various functions as a third-party package when
//           installed into an app using the NPM command npm install .
//         </p>
//       </div>
//     </div>
//   );
// }
