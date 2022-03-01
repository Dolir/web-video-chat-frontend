// import React from 'react'
// import Dish from '../../scripts/script'

// const RoomCallMembers = () => {
//     const containerRef = React.useRef<any>()
//     React.useEffect(() => {

//         let dish = new Dish(containerRef.current);

//         dish.append();
//         dish.resize()
//         window.addEventListener("resize", function () {
//             console.log('asdasd')
//             dish.resize();
//         });
//     },[])
//   return (
//     <div className='rooms-members-container' ref={containerRef}>

//     </div>
//   )
// }

// export default RoomCallMembers

import React, { useState } from "react"
import styles from "../../styles/rooms/Rooms.module.scss"
import Head from "next/head"
const RoomCallMembers = () => {
  const membersRef = React.useRef<any>()
  const [rendered, setRendered] = useState<JSX.Element[] | undefined>()
  const _ratios = ["4:3", "16:9", "1:1", "1:2"]

  // default options
  const _dish = false
  const _conference = false
  const _cameras = 15
  const _margin = 5
  const _aspect = 0
  const _video = false
  const _ratio = 3 / 4

  let _width = membersRef.current?.offsetWidth! - _margin * 2
  let _height = membersRef.current?.offsetHeight! - _margin * 2


  const area = (increment: number) => {
    let i = 0
    let w = 0
    let h = increment * _ratio + _margin * 2
    while (i < allCameras.length) {
      if (w + increment > _width) {
        w = 0
        h = h + increment * _ratio + _margin * 2
      }
      w = w + increment + _margin * 2
      i++
    }
    if (h > _height || increment > _width) return false
    else return increment
  }
  const allCameras = Array(_cameras)
    .fill("")
    .map((i, k) => {
      const camera = (stylesS: any) => (
        <div
          key={k}
          style={stylesS}
          className={styles["rooms-member"]}
          data-aspect={"4:3"}
        ></div>
      )

      return camera
    })
  let renderedCameras: {} | null | undefined = []
  console.log(renderedCameras)
  const resizer = (width: number) => {
    console.log("i worked")
    setRendered(
      allCameras.map((camera) => {
        return camera({
          margin: _margin + "px",
          width: width + "px",
          height: width * (3 / 4) + "px"
        })
      })
    )
  }
  const dimensions = () => {
    _width = membersRef.current?.offsetWidth! - _margin * 2
    _height = membersRef.current?.offsetHeight! - _margin * 2
  }
  const resize = () => {
    dimensions()
    console.log(_width, "width"), console.log(_height, "height")
    console.log('withmact', membersRef.current?.offsetWidth! - _margin * 2)
    let max = 0
    let i = 1
    while (i < 5000) {
      let some = area(i)
      if (some === false) {
        max = i - 1
        break
      }
      i++
    }

    // remove margins
    max = max - _margin * 2

    // set dimensions to all cameras
    resizer(max)
  }
  React.useEffect(() => {
    resize()
    window.addEventListener("resize", function () {
      resize()
      console.log("im working")
    })
  }, [])

  return (
    <div className={styles["rooms-members-container"]}>
      <div className={styles["rooms-members-outer"]}>
        <div className={styles["rooms-members"]} ref={membersRef}>
          {rendered}
        </div>
      </div>
    </div>
  )
}

export default RoomCallMembers
