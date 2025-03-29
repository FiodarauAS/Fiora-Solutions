import * as React from "react"
const SvgComponent = (props) => (
  <div style={{ margin: '50px 100px 50px 0px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={400}
      height={400}
      className="id-fc25d3e0-c259-4d6b-939e-668913558ba3"
      style={{
        enableBackground: "new 0 0 200 200",
      }}
      viewBox="0 0 200 200"
      {...props}
    >
      <path
        d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 190c-49.6 0-90-40.4-90-90s40.4-90 90-90 90 40.4 90 90-40.4 90-90 90z"
        style={{
          fill: "#182e3d",
        }}
      />
    </svg>
  </div>
)
export default SvgComponent
