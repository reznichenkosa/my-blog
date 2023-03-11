declare module '*.module.css'
declare module '*.module.scss'
declare module '*.svg' {
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVG
}

declare const IS_DEV: boolean
