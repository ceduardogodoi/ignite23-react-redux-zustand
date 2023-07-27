import ReactPlayer from 'react-player'
import { useAppDispatch } from '../store'
import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  if (!currentLesson) {
    return null
  }

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        playing
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}