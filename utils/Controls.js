import React, { useRef } from "react";
import {
  extend,
  ReactThreeFiber,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function Controls(
  props
) {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.set(1.5, 0.8, 18);

  let rot = 0;
  tick();

  function tick() {
    rot += 0.15;
      const radian = (rot * Math.PI) / 180;
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
