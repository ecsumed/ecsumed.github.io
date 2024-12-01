import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { vertex, fragment } from './js/shader.js'

const res = 800;
const grid = 1000;
const amplitude = 15;
const waveLength = .5;
const zIndex = 1000;
const timeIncrement = .008;

const ThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const uniforms = useRef({
        uAmplitude: { value: amplitude },
        uWaveLength: { value: waveLength },
        uZIndex: { value: zIndex },
        uGridSize: { value: grid },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(res, res) },
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientWidth / 1.5;

            const scene = new THREE.Scene();

            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.autoClearColor = false;

            renderer.setSize(width, height);

            containerRef.current?.appendChild(renderer.domElement);

            // const camera = new OrthographicCamera(-res * 0.5, res * 0.5, res * 0.5, -res * 0.5, -5, 1000);

            const camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000);

            camera.position.z = uniforms.current.uZIndex.value;

            const plane = new THREE.PlaneGeometry(width, height, uniforms.current.uGridSize.value, uniforms.current.uGridSize.value);

            const material = new THREE.ShaderMaterial({
                uniforms: uniforms.current,
                vertexShader: vertex,
                fragmentShader: fragment,
                wireframe: true
            });


            const backdrop = new THREE.Mesh(plane, material, true);
            scene.add(backdrop);

            // Render the scene and camera
            renderer.render(scene, camera);

            // Add this function inside the useEffect hook
            const renderScene = () => {
                uniforms.current.uTime.value += timeIncrement;

                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };

            // Call the renderScene function to start the animation loop
            renderScene();

            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight / 1.5;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component is unmounted
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <>
            <div ref={containerRef} />
        </>
    )
};

export default ThreeBackground;