/* eslint-disable */
//temporary disable rules

"use client"


import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { vertex, fragment } from './js/shader.js'

const res = 800;
const grid = 600;
const amplitude = 1;
const waveLength = .5;
const zIndex = 80;
const timeIncrement = .01;

const ThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const uniforms = useRef({
        u_amplitude: { value: amplitude },
        u_waveLength: { value: waveLength },
        u_zIndex: { value: zIndex },
        u_gridSize: { value: grid },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(res, res) },
        u_darkMode: { value: document.getElementsByTagName("html")[0].classList.contains("dark") ? 1 : 0 },
    })

    useEffect(() => {
        if (typeof window !== 'undefined' && containerRef.current.childElementCount == 0) {
            var axis = new THREE.Vector3(0.1, 1, 0).normalize();

            const width = containerRef.current.parentElement.parentElement.clientWidth;
            const height = containerRef.current.parentElement.parentElement.clientHeight;

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);


            const renderer = new THREE.WebGLRenderer({ antialias: true, });
            renderer.autoClearColor = true;

            renderer.setSize(width, height);

            containerRef.current?.appendChild(renderer.domElement);

            const camera = new THREE.OrthographicCamera(-100, 100, 100, -100, -80, 100);

            //const camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000);

            // camera.position.z = uniforms.current.u_zIndex.value;
            // camera.position.x = 10;
            // camera.position.y = 15;

            const plane = new THREE.PlaneGeometry(width, height, uniforms.current.u_gridSize.value, uniforms.current.u_gridSize.value);
            // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

            // const sphere_geometry = new THREE.SphereGeometry(64, 1024, 512);
            const sphere_material = new THREE.ShaderMaterial({
                uniforms: uniforms.current,
                vertexShader: vertex,
                fragmentShader: fragment,
                wireframe: false,
            });

            const backdrop = new THREE.Mesh(plane, sphere_material, true);
            // const sphere = new THREE.Mesh(sphere_geometry, sphere_material);

            // scene.add(backdrop);
            scene.add(backdrop);

            // Render the scene and camera
            renderer.render(scene, camera);

            // Add this function inside the useEffect hook
            const renderScene = () => {
                uniforms.current.u_darkMode.value = document.getElementsByTagName("html")[0].classList.contains("dark") ? 1 : 0;

                uniforms.current.u_time.value += timeIncrement;

                uniforms.current.u_time.value %= 5000;

                //sphere.rotateOnAxis(axis, timeIncrement / 10);

                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };

            // Call the renderScene function to start the animation loop
            renderScene();

            const handleResize = () => {
                const width = containerRef.current.parentElement.parentElement.clientWidth;
                const height = containerRef.current.parentElement.parentElement.clientHeight;

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