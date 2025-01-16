
import cn from 'classnames'

interface IProps {
  scoreData: any
}

export default function ScoreBoard(props: IProps) {
  const {scoreData} = props
  return (
    <div className={cn(
      "w-[180px] h-full markBorderC",
      "flex flex-col justify-start gap-y-[10px]",
      "text-[#FFFFFF]",
      "px-[10px] py-[10px]"
    )}>
      <span>Name: {scoreData.name}</span>
      <span>Score: {scoreData.score}</span>
    </div>
  )
}