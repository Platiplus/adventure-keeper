import React from 'react'

type LogoProps = {
  variant: 'full' | 'full-text' | 'short-text' | 'icon' | 'icon-short-text'
}

const Icon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="SvgjsG1069" >
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M58.5,20.8c-4.7,0-8.5-3.8-8.5-8.5c0-1.7,0.5-3.4,1.4-4.7c-0.5-0.1-1-0.1-1.4-0.1c-7.4,0-13.3,6-13.3,13.3    c0,7.4,6,13.3,13.3,13.3c7.4,0,13.3-6,13.3-13.3c0-0.5,0-1-0.1-1.4C61.9,20.3,60.3,20.8,58.5,20.8z"></path>
          <path d="M50,60.2c-18.1,0-35.1-9.8-44.2-25.5L5,33.3l0.8-1.4C14.9,16.2,31.9,6.4,50,6.4c18.1,0,35.1,9.8,44.2,25.5l0.8,1.4    l-0.8,1.4C85.1,50.5,68.1,60.2,50,60.2z M11.6,33.3C19.9,46.5,34.4,54.6,50,54.6c15.6,0,30.1-8.1,38.4-21.3    C80.1,20.2,65.6,12.1,50,12.1C34.4,12.1,19.9,20.2,11.6,33.3z"></path>
          <path d="M50,47.7c-14.8,0-26.8-12-26.8-26.8c0-1.8,0.2-3.6,0.5-5.4l5.6,1.1c-0.3,1.4-0.4,2.8-0.4,4.3C28.9,32.5,38.3,42,50,42    c11.7,0,21.1-9.5,21.1-21.1c0-1.7-0.2-3.3-0.6-4.9l5.5-1.3c0.5,2,0.7,4.2,0.7,6.3C76.8,35.6,64.8,47.7,50,47.7z"></path>
        </g>
        <polygon points="50,68 52.8,93.6 47.2,93.6  "></polygon>
        <g>
          <polygon points="24.3,63.3 14.2,87 9.3,84.2   "></polygon>
          <polygon points="75.7,63.3 90.7,84.2 85.8,87   "></polygon>
        </g>
      </g>
    </g>
  </svg>
)

const WOD = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg width="52" height="48" viewBox="0 0 52 48"  xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="SvgjsG1070">
      <path d="M1.2 8 l4.2 0 l1.2 24.08 l0.4 0 l2.4 -24.08 l3.4 0 l2.4 24.08 l0.4 0 l1.2 -24.08 l4.2 0 l-2.8 32 l-4.8 0 l-2.28 -16.72 l-2.32 16.72 l-4.8 0 z M23.8 23.16 c0 -11.16 0.24 -15.56 6.24 -15.56 s6.24 4.4 6.24 15.56 c0 12.8 -0.24 17.24 -6.24 17.24 s-6.24 -4.44 -6.24 -17.24 z M27.799999999999997 23.16 c0 11.56 0 13.24 2.24 13.24 s2.24 -1.68 2.24 -13.24 c0 -10.4 0 -12.36 -2.24 -12.36 s-2.24 1.96 -2.24 12.36 z M39.879999999999995 40 l0 -32 l6 0 c6 0 6 4.4 6 15.16 c0 12.4 0 16.84 -6 16.84 l-6 0 z M43.879999999999995 36 l2 0 c2.24 0 2.24 -1.68 2.24 -12.84 c0 -10 0 -11.96 -2.24 -11.96 l-2 0 l0 24.8 z"></path>
    </g>
  </svg>
)

const AppName = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg width="186" height="25" viewBox="0 0 186 25"  xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="SvgjsG1071" >
      <path d="M2.84 19.84 c0.06 0.02 0.24 0.02 0.42 0.02 c0.4 0 0.52 -1.44 0.56 -1.74 c0.02 -0.24 0.08 -0.26 0.28 -0.3 c1 -0.12 1.5 -0.04 2.5 -0.02 c0.22 0 0.34 0.1 0.4 0.28 l0.14 0.46 c0.12 0.34 0.22 0.76 0.34 1.1 c0.08 0.24 0.1 0.22 0.34 0.22 c0.32 0 1.48 0 1.82 -0.02 c0.46 0 0.14 -0.94 0.08 -1.1 c-0.18 -0.56 -0.22 -1.14 -0.4 -1.7 c-0.08 -0.24 -2.36 -11.06 -2.46 -11.66 c-0.14 -0.36 -0.02 -0.38 -0.34 -0.38 c-0.68 0 -1.4 0.04 -2.1 0 c-0.28 0 -0.26 0.08 -0.3 0.38 c-0.04 0.28 -0.76 3.46 -1.04 4.78 c-0.36 1.66 -0.68 3.26 -1.08 4.9 c-0.14 0.58 -1.1 4.76 -0.98 4.78 c0.06 0.04 0.16 0.02 0.24 0.02 c0.5 0 0.96 0 1.58 -0.02 z M5.46 15.3 l-0.42 0 c-0.56 0 -0.58 0 -0.44 -0.58 c0.1 -0.44 0.64 -2.82 0.76 -3.4 c0.02 -0.04 0.06 -0.08 0.08 -0.08 c0.04 0 0.08 0.04 0.1 0.06 c0.08 0.24 0.16 0.84 0.24 1.08 c0.18 0.76 0.3 1.4 0.48 2.22 c0.18 0.72 0.1 0.72 -0.26 0.72 c-0.18 0 -0.36 -0.02 -0.54 -0.02 z M22.526000000000003 16.32 c0.12 -0.26 0.22 -0.52 0.32 -0.78 c0.22 -0.64 0.26 -1.3 0.32 -1.96 c0.12 -1.4 0.08 -2.82 -0.28 -4.18 c-0.44 -1.74 -1.56 -3.34 -3.24 -4.08 c-0.76 -0.34 -1.62 -0.38 -2.44 -0.36 c-0.86 0 -1.74 -0.04 -2.6 0.04 c-0.24 0.02 -0.36 0.14 -0.4 0.36 c-0.04 0.24 -0.08 0.48 -0.08 0.7 c0.04 1.22 0 4.84 0.04 5.44 c0.02 0.54 -0.04 1.2 -0.04 1.74 c0.02 1.34 0 2.7 0 4.04 c0 0.56 -0.02 1.1 -0.02 1.66 c0 0.6 -0.22 0.86 1.42 0.86 c1.46 0 2.98 -0.12 4.36 -0.64 c1.28 -0.46 2.08 -1.64 2.64 -2.84 z M16.706000000000003 14.24 l0 -2.4 c0 -1.52 0.04 -2.5 -0.02 -3.78 l0 -0.24 c0.02 -0.42 0.08 -0.44 0.52 -0.44 c0.58 -0.02 1 0.12 1.5 0.32 s0.78 0.64 1.04 1.06 c0.5 0.82 0.7 1.72 0.74 2.66 c0.02 0.54 0.04 1.08 0.04 1.62 c0 2.56 -1.5 4.34 -2.82 4.34 c-0.88 0 -1.02 0.06 -1.02 -0.52 c0 -0.6 0.04 -1.2 0.04 -1.8 c-0.02 -0.26 -0.02 -0.54 -0.02 -0.82 z M31.832 20.02 c0.3 0 1.4 0.02 1.62 -0.02 c0.14 -0.04 0.22 -0.4 0.26 -0.52 c0.12 -0.38 0.2 -0.78 0.3 -1.16 c0.22 -1 2.44 -9.4 3.22 -12.54 c0.04 -0.14 0.08 -0.3 0.04 -0.44 c-0.06 -0.3 -0.24 -0.34 -0.48 -0.34 c-0.46 0.02 -0.92 0 -1.38 0 c-0.52 0 -0.72 0.06 -0.88 0.64 c-0.78 2.68 -1.3 5.88 -2.02 8.6 l-0.12 0.32 c0 0.02 -0.08 0 -0.08 0 c-0.04 -0.1 -0.1 -0.18 -0.12 -0.28 c-0.72 -2.86 -1.9 -8.52 -2.1 -9.06 c-0.12 -0.32 -0.42 -0.22 -0.7 -0.22 c-0.56 0 -1.08 0.02 -1.62 0.02 c-0.2 0.02 -0.34 0.1 -0.32 0.3 c0 0.16 0.22 1.04 0.26 1.28 l0.22 0.84 c0.14 0.64 0.34 1.44 0.48 2.06 c0.76 3.18 1.58 6.36 2.48 9.5 c0.08 0.28 0.14 0.76 0.34 0.92 c0.16 0.14 0.42 0.08 0.6 0.1 z M41.538000000000004 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M60.724000000000004 5.460000000000001 c0.06 0.28 0.02 13.6 0.02 13.94 c0 0.6 -0.22 0.58 -0.62 0.58 c-0.6 0 -1.44 0.1 -1.62 -0.1 c-0.16 -0.14 -3.12 -7.28 -3.54 -8.18 c-0.04 -0.08 -0.14 -0.28 -0.22 -0.24 c-0.1 0.04 -0.06 0.18 -0.06 0.26 c-0.02 0.7 0.1 6.74 0.1 7.7 c0 0.48 -0.02 0.56 -0.42 0.56 l-1 0 c-0.26 0 -0.58 -0.02 -0.84 0.02 c-0.2 0 -0.3 -0.06 -0.32 -0.26 l0 -1.58 c0.04 -1.68 0 -11.64 0 -12.38 c0 -0.64 0.18 -0.76 0.82 -0.76 c0.44 -0.02 0.88 -0.02 1.32 -0.02 c0.14 0 0.22 0.02 0.3 0.2 c0.54 1.26 2.84 7.04 3.2 7.74 c0.06 0.14 0.28 0.7 0.4 0.76 l0.02 0 c0.08 -0.08 0.06 -0.48 0.06 -0.6 c0 -0.3 -0.16 -7.32 -0.16 -7.46 c0 -0.2 -0.06 -0.38 0.04 -0.52 c0.06 -0.08 0.32 -0.1 0.42 -0.12 c0.56 -0.04 1.22 0.02 1.78 0 c0.28 0 0.26 0.2 0.32 0.46 z M67.53 17.82 c0.02 0.62 0.02 1.24 0.04 1.86 c0 0.28 0.02 0.32 0.3 0.32 l1.8 0 c0.38 0 0.3 -0.64 0.28 -0.98 l0.06 -11.2 c0 -0.3 0.1 -0.4 0.5 -0.4 l1.76 0 c0.42 0 0.32 -0.72 0.32 -1.22 c0 -0.44 0.16 -1.2 -0.32 -1.2 c-0.34 0 -3.6 0 -4.94 0.02 c-0.66 0 -1.2 -0.02 -1.86 -0.02 c-0.5 0 -0.48 0.4 -0.48 1.28 c0 0.56 -0.02 1.12 0.46 1.12 c0.28 0 1.42 0 1.74 0.02 c0.2 0 0.34 0.06 0.38 0.28 c0 0.06 0.02 0.12 0.02 0.18 c0 1.44 -0.1 8.14 -0.06 9.94 z M76.836 8.28 c0 2.02 0.02 4.06 0.06 6.06 c0.02 1.22 0 2.6 0.58 3.72 c0.74 1.44 2.38 2.08 3.96 1.98 c1.08 -0.08 2.08 -0.36 2.86 -1.16 c1.32 -1.42 1.06 -3.64 1.08 -5.46 c0.04 -2.62 0.1 -5.06 0.1 -7.7 c0 -0.44 -0.14 -0.68 -0.58 -0.7 c-0.54 -0.02 -1.08 0 -1.62 0.04 c-0.22 0 -0.4 0.2 -0.4 0.44 c0.02 1.92 0.06 3.86 0.04 5.8 c-0.02 1.66 0.2 3.5 -0.42 5.08 c-0.24 0.58 -0.78 1.02 -1.42 1.02 c-1.6 -0.04 -1.54 -1.94 -1.6 -3.06 c-0.12 -2.44 0.06 -4.94 0.12 -7.38 c0 -0.46 0 -0.92 0.02 -1.38 c0.02 -0.24 0.06 -0.54 -0.26 -0.56 l-0.36 0 c-0.5 0.04 -1 -0.02 -1.5 0 c-0.48 0.04 -0.64 0.18 -0.64 0.66 c0 0.86 -0.02 1.74 -0.02 2.6 z M92.182 18.5 c0 -0.52 0 -3.8 0.02 -4.06 c0.02 -0.06 0.06 -0.18 0.14 -0.18 s0.12 0.04 0.14 0.1 c0.8 1.56 1.5 3.12 2.22 4.64 c0.1 0.22 0.32 0.86 0.38 0.92 c0.08 0.12 0.22 0.08 0.34 0.08 l2.2 0.02 c0.26 0 0.32 -0.16 0.26 -0.38 c-0.16 -0.6 -1.3 -2.72 -1.56 -3.24 c-0.18 -0.4 -1.38 -2.72 -1.42 -2.9 c-0.04 -0.08 0.26 -0.22 0.3 -0.28 c0.96 -0.86 1.82 -1.74 2 -3.08 c0.2 -1.32 -0.1 -2.76 -0.96 -3.82 c-0.66 -0.78 -1.52 -1.24 -2.54 -1.3 c-0.62 -0.04 -1.22 0.02 -1.84 0 c-0.54 -0.02 -0.92 -0.02 -1.6 -0.02 c-0.32 0 -0.52 0.18 -0.54 0.52 l0 0.24 c-0.04 1.54 0 3.08 0.02 4.6 c0 2.32 -0.04 8.44 -0.04 9.32 c0 0.26 0.04 0.32 0.28 0.32 c0.14 0 0.3 0.02 0.44 0.02 c0.56 0 0.9 -0.02 1.48 -0.02 c0.44 0 0.28 -0.72 0.28 -1.5 z M92.182 10.7 l0.02 -2.02 c0.02 -0.3 -0.08 -0.9 0.2 -1.12 c0.38 -0.28 1.16 0 1.5 0.24 c1 0.68 0.92 2.36 0.38 3.3 c-0.26 0.44 -0.7 0.7 -1.2 0.84 c-0.3 0.08 -0.86 0.18 -0.88 -0.3 c0 -0.32 -0.02 -0.94 -0.02 -0.94 z M102.148 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M122.75999999999999 16.38 c0 -0.7 -0.1 -2.6 -0.08 -3 c0 -0.06 0.04 -0.14 0.06 -0.14 c0.04 0 0.12 0.04 0.14 0.06 c0.64 0.84 3.64 6.66 4 6.68 c0.1 0.02 0.2 0.02 0.3 0.02 c0.68 -0.04 1.28 0 1.96 0 c0.7 0 0.24 -0.68 0.12 -0.86 c-0.18 -0.26 -2.56 -4.52 -2.7 -4.78 c-0.4 -0.68 -0.74 -1.42 -1.14 -2.08 c-0.04 -0.08 -0.08 -0.2 -0.06 -0.28 c0.04 -0.24 0.1 -0.46 0.2 -0.68 c0.48 -0.94 0.98 -1.9 1.56 -2.8 c0.64 -1.02 1 -1.66 1.52 -2.58 c0.12 -0.22 0.2 -0.46 0.28 -0.72 c0.02 -0.1 -0.06 -0.2 -0.18 -0.2 c-0.38 -0.02 -1.76 0 -2.2 0 c-0.2 0 -0.4 0.04 -0.5 0.22 c-0.26 0.5 -2.94 5.4 -3.2 5.84 c-0.02 0.04 -0.08 0.06 -0.14 0.06 c0 0 -0.04 -0.06 -0.04 -0.1 c-0.02 -1.12 0.18 -4.78 0.14 -5.52 c-0.02 -0.44 -0.1 -0.48 -0.54 -0.5 c-0.48 -0.02 -1.14 -0.02 -1.62 -0.02 c-0.44 0 -0.48 0.24 -0.54 0.56 c-0.02 0.06 -0.02 1.94 -0.02 2.78 c0 1.22 -0.1 8.86 0.04 11.28 c0 0.24 0.06 0.38 0.26 0.38 c0.54 -0.04 1.34 0 1.88 0 c0.38 0 0.44 -0.04 0.44 -0.68 c0 -0.86 0.08 -1.64 0.08 -2.7 c0 -0.08 -0.02 -0.16 -0.02 -0.24 z M133.766 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M144.452 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M155.138 7.619999999999999 c0.02 1.18 0.02 11.2 0.02 12.02 c0 0.3 0.04 0.36 0.34 0.36 c0.68 0 0.68 0.02 1.36 0 c0.14 0 0.38 0 0.5 -0.06 c0.14 -0.06 0.06 -4.78 0.06 -5.04 c0 -0.28 0.56 -0.22 0.72 -0.22 c3.34 0 4.26 -2.4 4.26 -4.44 c0 -1.84 -0.36 -5.24 -4.52 -5.24 c-0.72 0 -1.46 0.02 -2.16 0.02 c-0.16 0 -0.36 -0.02 -0.5 0.08 c-0.16 0.12 -0.1 1.9 -0.08 2.52 z M157.438 11.74 c0 -0.44 -0.02 -3.06 0 -3.86 c0 -0.12 -0.02 -0.26 0 -0.4 c0.06 -0.22 0.32 -0.22 0.52 -0.2 c1.16 0.08 1.82 1.1 1.92 2.18 c0.08 0.78 -0.02 1.94 -0.58 2.56 c-0.4 0.42 -0.92 0.68 -1.6 0.68 c-0.14 0 -0.28 -0.16 -0.28 -0.3 c0 -0.22 0 -0.44 0.02 -0.66 z M166.644 15.9 l-0.02 0 c0 0.5 -0.02 1.02 0 1.54 c0.02 0.64 0.06 1.28 0.1 1.92 c0 0.22 0.06 0.28 0.26 0.32 c0.42 0.1 0.82 0.12 1.24 0.12 c1.08 -0.04 2.16 0.04 3.24 0 c0.44 -0.02 0.64 0.02 1.08 -0.06 c0.4 -0.08 0.54 -0.3 0.54 -0.9 c-0.04 -0.38 -0.02 -0.54 -0.02 -1 c0 -0.66 -0.46 -0.88 -0.86 -0.86 c-0.28 0.02 -1.62 -0.02 -2.16 -0.02 c-0.9 0.02 -0.76 0.14 -0.76 -0.8 c0 -0.76 0.02 -1.74 0.02 -2.52 c0 -0.42 0.04 -0.56 0.44 -0.56 l2.5 0 c0.4 0.06 0.68 -0.22 0.68 -0.64 s0.04 -0.44 0.04 -0.86 l-0.06 -0.6 c-0.04 -0.34 -0.16 -0.46 -0.5 -0.46 c-0.22 0 -0.44 0.02 -0.66 0.04 c-0.86 0.06 -1.26 -0.06 -2.1 0 c-0.28 0 -0.32 -0.04 -0.34 -0.3 c-0.08 -0.78 0 -1.64 0.08 -2.42 c0.02 -0.32 0.1 -0.38 0.4 -0.4 l2.82 -0.02 c0.38 -0.04 0.5 -0.02 0.48 -0.4 c-0.04 -0.58 0.02 -1.18 -0.04 -1.76 c-0.04 -0.32 -0.14 -0.38 -0.5 -0.38 c-0.6 0.02 -0.74 0.02 -1.34 0.06 c-0.6 0.02 -3 0.02 -3.58 0.02 c-0.84 0 -0.9 -0.06 -0.92 0.96 c-0.04 0.8 -0.02 1.62 -0.02 2.44 c0 1.4 -0.08 6.42 -0.04 7.54 z M179.79 18.5 c0 -0.52 0 -3.8 0.02 -4.06 c0.02 -0.06 0.06 -0.18 0.14 -0.18 s0.12 0.04 0.14 0.1 c0.8 1.56 1.5 3.12 2.22 4.64 c0.1 0.22 0.32 0.86 0.38 0.92 c0.08 0.12 0.22 0.08 0.34 0.08 l2.2 0.02 c0.26 0 0.32 -0.16 0.26 -0.38 c-0.16 -0.6 -1.3 -2.72 -1.56 -3.24 c-0.18 -0.4 -1.38 -2.72 -1.42 -2.9 c-0.04 -0.08 0.26 -0.22 0.3 -0.28 c0.96 -0.86 1.82 -1.74 2 -3.08 c0.2 -1.32 -0.1 -2.76 -0.96 -3.82 c-0.66 -0.78 -1.52 -1.24 -2.54 -1.3 c-0.62 -0.04 -1.22 0.02 -1.84 0 c-0.54 -0.02 -0.92 -0.02 -1.6 -0.02 c-0.32 0 -0.52 0.18 -0.54 0.52 l0 0.24 c-0.04 1.54 0 3.08 0.02 4.6 c0 2.32 -0.04 8.44 -0.04 9.32 c0 0.26 0.04 0.32 0.28 0.32 c0.14 0 0.3 0.02 0.44 0.02 c0.56 0 0.9 -0.02 1.48 -0.02 c0.44 0 0.28 -0.72 0.28 -1.5 z M179.79 10.7 l0.02 -2.02 c0.02 -0.3 -0.08 -0.9 0.2 -1.12 c0.38 -0.28 1.16 0 1.5 0.24 c1 0.68 0.92 2.36 0.38 3.3 c-0.26 0.44 -0.7 0.7 -1.2 0.84 c-0.3 0.08 -0.86 0.18 -0.88 -0.3 c0 -0.32 -0.02 -0.94 -0.02 -0.94 z"></path>
    </g>
  </svg>
)

export const FullLogo = ({ variant, ...props }: React.SVGProps<SVGSVGElement> & LogoProps) => (
  <div className="flex flex-col gap-4 items-center">
    {variant === 'icon' && <Icon {...props} />}
    {variant === 'full-text' && (
      <>
        <WOD {...props} />
        <AppName {...props} />
      </>
    )}
    {variant === 'full' && (
      <>
        <Icon {...props} />
        <WOD {...props} />
        <AppName {...props} />
      </>
    )}
    {variant === 'short-text' && <AppName {...props} />}
    {variant === 'icon-short-text' && (
      <>
        <Icon {...props} />
        <AppName {...props} />
      </>
    )}
  </div>
)