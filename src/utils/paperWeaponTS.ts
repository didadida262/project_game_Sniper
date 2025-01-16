import paper from 'paper';

// // 删除指定project的某一层
export const removeLayer = (
  currentProject: paper.Project,
  layerName: string
) => {
  if (!currentProject) return;
  currentProject.activate();
  const target = currentProject.layers.filter(
    (layer) => layer.name === layerName
  )[0];
  if (target) {
    target.remove();
  }
};
// // // 指定项目、层，绘制坐标图形
// export const drawXY = (currentProject, layerName) => {
//   if (!currentProject) return;
//   const WIDTH = currentProject.view.bounds.width;
//   const HEIGHT = currentProject.view.bounds.height;
//   currentProject.activate();
//   removeLayer(currentProject, layerName);
//   const layerXY = new paper.Layer();
//   layerXY.name = layerName;
//   const currentCenter = currentProject.view.center;
//   const X = new paper.Path.Line({
//     from: new paper.Point(currentCenter.x - WIDTH / 2, currentCenter.y),
//     to: new paper.Point(currentCenter.x + WIDTH / 2, currentCenter.y),
//     strokeColor: "red",
//     strokeWidth: getViewBorderSize(currentProject)
//   });
//   const Y = new paper.Path.Line({
//     from: new paper.Point(currentCenter.x, currentCenter.y - HEIGHT / 2),
//     to: new paper.Point(currentCenter.x, currentCenter.y + HEIGHT / 2),
//     strokeColor: "red",
//     strokeWidth: getViewBorderSize(currentProject)
//   });
//   const coordinateData = new paper.PointText({
//     point: currentCenter.add(2, -5),
//     content: `(${currentCenter.x.toFixed(2)} , ${currentCenter.y.toFixed(2)})`,
//     fillColor: "red",
//     justification: "left",
//     fontWeight: "bold",
//     fontSize: getViewFontSize(currentProject)
//   });
//   // modifyDirection(coordinateData)
// };
// // 获取视图级别的字体大小
// export const getViewFontSize = (currentProject) => {
//   const ratio = currentProject.view.zoom;
//   return 16 / ratio;
// };
// // 获取视图级别的线大小
// export const getViewBorderSize = (currentProject) => {
//   const ratio = currentProject.view.zoom;
//   return 1 / ratio;
// };
// // // 中心点在坐标原点的圆，给定一个坐标值及radius，返回另一坐标值
// export const getAnotherPoint = (val: number, radius: number) => {
//   return Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(val), 2));
// };

// // 输出画平边圆弧的两个点
// export const getFlatPoints = (
//   directionAngle: number,
//   length: number,
//   radius: number
// ) => {
//   // 默认为0°
//   const y = length / 2;
//   const x = getAnotherPoint(y, radius);
//   const leftPoint = new paper.Point(x, y);
//   const rightPoint = new paper.Point(x, -y);
//   return [
//     leftPoint.rotate(-directionAngle, new paper.Point(0, 0)),
//     rightPoint.rotate(-directionAngle, new paper.Point(0, 0))
//   ];
// };
// // // 在目标层上绘制带平边的弧，若该层已有path，取两者交集,即：取交集合并式绘制
// export const drawFlat = (
//   currentProject: paper.Project,
//   layerName: string,
//   directionAngle: number,
//   length: number,
//   radius: number
// ) => {
//   if (!currentProject) return;
//   currentProject.activate();
//   const layerTarget = currentProject.layers.filter(
//     (layer) => layer.name === layerName
//   )[0];
//   if (!layerTarget) return;
//   const existedPath = layerTarget.children[0] as paper.Path;
//   const flatPoints = getFlatPoints(directionAngle, length, radius);
//   const through = flatPoints[0].rotate(180, new paper.Point(0, 0));
//   const newPath = new paper.Path.Arc({
//     from: flatPoints[0],
//     through: through,
//     to: flatPoints[1],
//     strokeColor: "#FFDE2C",
//     closed: true,
//     strokeWidth: 1
//   });
//   if (existedPath) {
//     const resPath = newPath.intersect(existedPath);
//     resPath.selected = true;
//     existedPath.remove();
//     newPath.remove();
//   } else {
//     const resPath = newPath.clone();
//     newPath.remove();
//   }
// };

// // // 平边隐藏版本。注意： 合并时只会合并非closed的path，最终输出的是一个group
// export const drawFlatHidden = (
//   currentProject: paper.Project,
//   layerName: string,
//   directionAngle: number,
//   length: number,
//   radius: number
// ) => {
//   if (!currentProject) return;
//   currentProject.activate();
//   const layerTarget = currentProject.layers.filter(
//     (layer) => layer.name === layerName
//   )[0];
//   if (!layerTarget) return;
//   const existedPath = layerTarget.children[0] as paper.Path;
//   const flatPoints = getFlatPoints(directionAngle, length, radius);
//   const through = flatPoints[0].rotate(180, new paper.Point(0, 0));
//   const currentPath = new paper.Group();
//   const circle = new paper.Path.Circle({
//     center: new paper.Point(0, 0),
//     radius: radius,
//     strokeColor: "#FFDE2C"
//   });
//   const path = new paper.Path({
//     strokeColor: "#FFDE2C",
//     dashArray: [2]
//   });
//   path.add(flatPoints[0]);
//   path.add(flatPoints[1]);
//   currentPath.addChild(circle.clone());
//   currentPath.addChild(path.clone());
//   circle.remove();
//   path.remove();
//   if (existedPath) {
//     // const resPath = currentPath.intersect(existedPath)
//     // resPath.selected = true
//     // existedPath.remove()
//     // currentPath.remove()
//     const resPath = new paper.Group();
//     existedPath.children.forEach((item: paper.Path) => {
//       if (item.closed === false) {
//         resPath.addChild(item.clone());
//       }
//     });
//     currentPath.children.forEach((item) => {
//       resPath.addChild(item.clone());
//     });
//     existedPath.remove();
//     currentPath.remove();
//   } else {
//     const resPath = currentPath.clone();
//     currentPath.remove();
//   }
// };

// // 在目标层上绘制带凹槽的弧，若该层已有path，取两者交集,即：取交集合并式绘制
// export const drawNotch = (
//   currentProject: paper.Project,
//   layerName: string,
//   directionAngle: number,
//   grooveLength: number,
//   grooveAngle: number,
//   radius: number
// ) => {
//   if (!currentProject) return;
//   currentProject.activate();
//   const layerTarget = currentProject.layers.filter(
//     (layer) => layer.name === layerName
//   )[0];
//   const existedPath = layerTarget.children[0] as paper.Path;
//   const notchPoints = getNotchPoints(
//     directionAngle,
//     grooveLength,
//     grooveAngle,
//     radius
//   );

//   const through = notchPoints[0].rotate(180, new paper.Point(0, 0));
//   const currentPath = new paper.Path.Arc({
//     from: notchPoints[0],
//     through: through,
//     to: notchPoints[2],
//     strokeColor: "#FFDE2C",
//     closed: false,
//     strokeWidth: 1
//   });
//   currentPath.add(notchPoints[1]);
//   currentPath.closed = true;
//   if (existedPath) {
//     const resPath = currentPath.intersect(existedPath);
//     existedPath.remove();
//     currentPath.remove();
//   } else {
//     const resPath = currentPath.clone();
//     currentPath.remove();
//   }
// };

// // Notch隐藏版本
// export const drawNotchHidden = (
//   currentProject: paper.Project,
//   layerName: string,
//   directionAngle: number,
//   grooveLength: number,
//   grooveAngle: number,
//   radius: number
// ) => {
//   if (!currentProject) return;
//   currentProject.activate();
//   const layerTarget = currentProject.layers.filter(
//     (layer) => layer.name === layerName
//   )[0];
//   const existedPath = layerTarget.children[0] as paper.Path;
//   const notchPoints = getNotchPoints(
//     directionAngle,
//     grooveLength,
//     grooveAngle,
//     radius
//   );

//   const through = notchPoints[0].rotate(180, new paper.Point(0, 0));
//   const currentPath = new paper.Group();
//   const circle = new paper.Path.Circle({
//     center: new paper.Point(0, 0),
//     radius: radius,
//     strokeColor: "#FFDE2C"
//   });
//   const path = new paper.Path({
//     strokeColor: "#FFDE2C",
//     dashArray: [2]
//     // closed: true
//   });
//   path.add(notchPoints[0]);
//   path.add(notchPoints[1]);
//   path.add(notchPoints[2]);
//   currentPath.addChild(circle.clone());
//   currentPath.addChild(path.clone());
//   circle.remove();
//   path.remove();
//   currentPath.name = "notchHidden";
//   if (existedPath) {
//     const resPath = new paper.Group();
//     existedPath.children.forEach((item: paper.Path) => {
//       if (item.closed === false) {
//         resPath.addChild(item.clone());
//       }
//     });
//     currentPath.children.forEach((item) => {
//       resPath.addChild(item.clone());
//     });
//     existedPath.remove();
//     currentPath.remove();
//   } else {
//     const resPath = currentPath.clone();
//     currentPath.remove();
//   }
// };

// export const getMidPoint = (point1: paper.Point, point2: paper.Point) => {
//   const center = point1.add(point2).divide(2);
//   return center;
// };

// // 给定圆内任意一点，返回两条以该点原中心点的两条直线数据
// export const getLineData = (point: paper.Point, radius: number) => {
//   const X = getAnotherPoint(point.y, radius);
//   const Y = getAnotherPoint(point.x, radius);
//   return [
//     // 横轴
//     {
//       leftPointX: -X,
//       leftPointY: point.y,
//       rightPointX: X,
//       rightPointY: point.y
//     },
//     // 纵轴
//     {
//       leftPointX: point.x,
//       leftPointY: -Y,
//       rightPointX: point.x,
//       rightPointY: Y
//     }
//   ];
// };

// // 输出凹槽所需的三个点信息
// export const getNotchPoints = (
//   directionAngle: number,
//   grooveLength: number,
//   grooveAngle: number,
//   radius: number
// ) => {
//   const grooveWidth =
//     grooveLength * Math.sin((grooveAngle / 2 / 180) * Math.PI);
//   const grooveHeight =
//     grooveLength * Math.cos((grooveAngle / 2 / 180) * Math.PI);
//   // 默认为0°
//   const y = grooveWidth;
//   const x = getAnotherPoint(y, radius);
//   const leftPoint = new paper.Point(x, y);
//   const rightPoint = new paper.Point(x, -y);
//   const center = getMidPoint(leftPoint, rightPoint);
//   const mid = center.normalize().multiply(center.length - grooveHeight);
//   return [
//     leftPoint.rotate(-directionAngle, new paper.Point(0, 0)),
//     mid.rotate(-directionAngle, new paper.Point(0, 0)),
//     rightPoint.rotate(-directionAngle, new paper.Point(0, 0))
//   ];
// };

// // 获取当前视图的随机点
// export const getRandomPoint = (currentProject: paper.Project) => {
//   const bounds = currentProject.view.bounds;
//   const WIDTH = bounds.width;
//   const HEIGHT = bounds.height;
//   const topLeft = bounds.topLeft;
//   const stepPoint = new paper.Point(
//     Math.random() * WIDTH,
//     Math.random() * HEIGHT
//   );
//   return topLeft.add(stepPoint);
// };
// // 测试功能函数
// export const testPaper = (currentProject: paper.Project) => {
//   if (!currentProject) return;
//   currentProject.activate();
//   const c1 = new paper.Path.Circle({
//     center: new paper.Point(-100, 0),
//     radius: 110,
//     fillColor: "green"
//   });
//   const c2 = new paper.Path.Circle({
//     center: new paper.Point(100, 0),
//     radius: 110,
//     fillColor: "red"
//   });
//   const res = c1.intersect(c2);
//   res.selected = true;
//   c1.remove();
//   c2.remove();
// };

// export const showPoint = (point: paper.Point, color: string) => {
//   const p = new paper.Path.Circle({
//     center: point,
//     radius: 8,
//     fillColor: color
//   });
// };

// export const showImg = (point: paper.Point, Img: string) => {
//   const container = new paper.Path.Rectangle({
//     position: point,
//     size: new paper.Size(200, 200),
//     strokeWidth: 1,
//     strokeColor: "red"
//   });
//   const raster = new paper.Raster({
//     source: require("@/assets/Sam.webp")
//   });
//   raster.onLoad = () => {
//     raster.fitBounds(container.bounds, true);
//     modifyDirectionPic(raster);
//   };
//   console.log("raster", raster);
// };
// export const showRect = (point: paper.Point) => {
//   const container = new paper.Path.Rectangle({
//     position: point,
//     size: new paper.Size(100, 300),
//     strokeColor: "white",
//     strokeWidth: 5
//   });
// };
// export const showText = (point: paper.Point, text: string) => {
//   const p = new paper.PointText({
//     point: point,
//     content: text,
//     fontSize: 20,
//     justification: "center",
//     fillColor: "green",
//     fontWeight: "bold"
//   });
// };

// // 在给定path中，不越界的绘制格子
// export const drawGrid = (
//   currentProject: paper.Project,
//   layerName,
//   path: paper.Path,
//   size: any,
//   radius: number
// ) => {
//   if (!currentProject) return;
//   currentProject.activate;
//   removeLayer(currentProject, layerName);
//   const layer = new paper.Layer();
//   layer.name = layerName;
//   console.warn("drawGrid>>>");
//   console.log("path>>>", path);
//   const gridWidth = size[0];
//   const gridHeight = size[1];
//   for (let i = 0; i < radius; i++) {
//     for (let j = 0; j < radius; j++) {
//       const currentPointData = [i + gridWidth / 2, j];
//       const currentPoint = new paper.Point(
//         currentPointData[0],
//         currentPointData[1]
//       );
//       const curretLineData = getLineData(currentPoint, radius);
//       const YData = curretLineData[1];
//       const YStartPoint = new paper.Point(YData.leftPointX, YData.leftPointY);
//       const YEndPoint = new paper.Point(YData.rightPointX, YData.rightPointY);
//       const path = new paper.Path.Line({
//         form: YStartPoint,
//         to: YEndPoint,
//         strokeColor: "white",
//         strokeWidth: 5
//       });
//       layer.addChild(path.clone());
//       path.remove();
//     }
//   }
// };

// // 纠正由于坐标系翻转导致文本的镜像效果
// export const modifyDirection = (path: any) => {
//   path.rotate(180);
//   path.scaling = new paper.Point(-1, 1);
// };
// // 纠正由于坐标系翻转导致文本的镜像效果
// export const modifyDirectionPic = (raster: any) => {
//   // raster.rotate(180)
//   const newScaling = new paper.Point(raster.scaling.x, -raster.scaling.y);
//   raster.scaling = newScaling;
// };

// export const setProjectZoom = (pro, zoom) => {
//   const currentZoom = pro.view.matrix.a;
//   const matrix1 = new paper.Matrix().scale(1 / currentZoom, 1 / currentZoom);
//   const matrix2 = new paper.Matrix().scale(zoom, zoom);
//   pro.view.transform(matrix1);
//   pro.view.transform(matrix2);
// };

// export const initPaperCanvae = (canvas) => {
//   paper.setup(canvas);
//   const project = paper.project;
//   return project;
// };

// export const getRandomDirection = (position: paper.Point, range: number) => {
//   const newX = position.x - range / 2 + range;
//   const newY = position.y - range / 2 + range;
//   const newPoint = new paper.Point(newX, newY);
//   console.log("position>>>", position);
//   console.log("newPoint>>>", newPoint);
//   return newPoint;
// };
