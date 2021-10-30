import React, { useRef } from "react";
import {
  extend,
  ReactThreeFiber,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       readonly orbitControls: ReactThreeFiber.Object3DNode<
//         OrbitControls,
//         typeof OrbitControls
//       >;
//     }
//   }
// }

export default function Controls(
  props
) {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.set(0.8, 1.5, 1.6);
  const controls = useRef();

  useFrame(() => controls.current.update());
  return (
    <orbitControls {...props} ref={controls} args={[camera, domElement]} />
  );
}
