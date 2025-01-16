
import cn from 'classnames'
import paper from 'paper'
import { useEffect, useRef } from "react"

import {showPoint} from '@/utils/paperjsWeapon'
import imgurl from '@/assets/只狼.jpeg'

export default function SniperComp() {
  const canvasRef = useRef(null)
  const initCanvas = () => {
    if (!canvasRef.current) return
    paper.setup(canvasRef.current);
  };
  const drawPic = () => {
    const raster = new paper.Raster(imgurl);
    raster.onLoad = () => {
      raster.fitBounds(paper.view.bounds, false);
    };
  };
  useEffect(() => {
    window.devicePixelRatio = 1
    initCanvas();
    drawPic();
  }, [])
  return (
    <div className={cn(
      "relative w-full h-full",
      "flex justify-center items-center"
    )}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}