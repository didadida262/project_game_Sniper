
import cn from 'classnames'
import paper from 'paper'
import { useEffect, useRef, useState } from "react"

import {showPoint, drawXYSniper, randomPoint,getRandomColor,removeLayer} from '@/utils/paperjsWeapon'
import fightGun from '@/assets/audio/fight-sound-effect.mp3'
import imgurl from '@/assets/只狼.jpeg'
import ScoreBoard from '@/sniper/ScoreBoard'
import shoutGun from '@/assets/audio/submachine-gun.mp3'

export default function SniperComp() {
  const canvasRef = useRef(null) as any
  const [scoreData, setscoreData] = useState({
    name: 'player1',
    score: 0
  })
  let enemy = null as any
  let tool = null as any
  const initCanvas = () => {
    if (!canvasRef.current) return
    canvasRef.current.style.cursor = "none";
    paper.setup(canvasRef.current);
  };
  const generateEnemy = () => {
    removeLayer(paper.project, "layerEnemy");
    const layerEnemy = new paper.Layer();
    layerEnemy.name = "layerEnemy";
    enemy = new paper.Path.Circle({
      center: randomPoint(paper.project),
      radius: 20,
      fillColor: 'white'
    });
  }
  
  // const drawPic = () => {
  //   const raster = new paper.Raster(imgurl);
  //   raster.onLoad = () => {
  //     raster.fitBounds(paper.view.bounds, false);
  //   };
  // };
  const fire = (point: paper.Point) => {
    // 播放音效、发射子弹
    const audio = new Audio(shoutGun); // 音效文件路径
    audio.play();
    if (!enemy) return
    if (enemy.contains(point)) {
      // 命中
      console.log('命中')
      enemy.remove()
      const audio = new Audio(fightGun); // 音效文件路径
      audio.play();
      generateEnemy()
      setscoreData((prev) => {
        const newValue = {
          ...prev,
          score: prev.score + 10
        }
        return newValue
      })
    } 
    console.log('未命中')
  }
  const initTool = () => {
    tool = new paper.Tool();
    tool.onMouseDown = (e: any) => {
      console.log("down", e.point);
      // gun fire
      fire(e.point)
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
    generateEnemy()

    
  }, [])
  return (
    <div className={cn(
      "relative w-full h-full",
      "flex justify-around",
      'bg-black'
    )}>
      <canvas ref={canvasRef} className="w-[calc(100%_-_200px)] h-full markBorderC" />
      <ScoreBoard scoreData={ scoreData} />
    </div>
  )
}