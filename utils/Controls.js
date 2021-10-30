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
  camera.position.set(1, 2, 1);

  let rot = 0;
  tick();
  // 毎フレーム時に実行されるループイベントです
  function tick() {
    rot += 0.3; // 毎フレーム角度を0.3度ずつ足していく
      const radian = (rot * Math.PI) / 180;
      // xz平面にて半径1の円を描くように動作。
      camera.position.x = Math.sin(radian);
      camera.position.z = Math.cos(radian);
      requestAnimationFrame(tick);
  }

  const controls = useRef();

  useFrame(() => controls.current.update());
  return (
    <orbitControls {...props} ref={controls} args={[camera, domElement]} />
  );
}
