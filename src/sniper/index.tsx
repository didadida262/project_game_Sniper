
import cn from 'classnames'
import paper from 'paper'
import { useEffect, useRef } from "react"

import {showPoint, drawXYSniper} from '@/utils/paperjsWeapon'
import imgurl from '@/assets/只狼.jpeg'
import shoutGun from '@/assets/audio/submachine-gun.mp3'

export default function SniperComp() {
  const canvasRef = useRef(null) as any
  let tool = null as any
  const initCanvas = () => {
    if (!canvasRef.current) return
    canvasRef.current.style.cursor = "crosshair";
    paper.setup(canvasRef.current);
  };
  // const drawPic = () => {
  //   const raster = new paper.Raster(imgurl);
  //   raster.onLoad = () => {
  //     raster.fitBounds(paper.view.bounds, false);
  //   };
  // };
  const fire = () => {
    // 播放音效、发射子弹
    const audio = new Audio(shoutGun); // 音效文件路径
    audio.play();
  }
  const initTool = () => {
    tool = new paper.Tool();
    tool.onMouseDown = (e: any) => {
      console.log("down", e.point);
      // gun fire
      fire()
    };
    tool.onMouseDrag = (e: any) => {
      console.log("onMouseDrag", e.point);

    };
    tool.onMouseMove = (e: any) => {
      drawXYSniper(paper.project, e.point)
      console.log('paper>>>', paper)
    };
    tool.onMouseUp = (e: any) => {
      console.log("onMouseUp", e.point);

    };
    tool.activate();
  };
  useEffect(() => {
    window.devicePixelRatio = 1
    initCanvas();
    // drawPic();
    initTool()

    
  }, [])
  return (
    <div className={cn(
      "relative w-full h-full",
      "flex justify-center items-center",
      'bg-black'
    )}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}