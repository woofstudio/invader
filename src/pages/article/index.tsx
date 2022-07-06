import { NextPage } from 'next'
import {
  Catagories,
  EditorPick,
  FanPage,
  HighlightVideo,
  LatestArticles,
} from '../../components/article'

const Articles: NextPage = () => {
  return (
    <div>
      <EditorPick />
      <LatestArticles />
      <Catagories />
      <FanPage />
      <HighlightVideo />
    </div>
  )
}

export default Articles
