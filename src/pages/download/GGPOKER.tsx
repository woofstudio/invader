import { NextPage } from 'next'
import { Meta, metaConfig } from '../../config'

const GGPOKER: NextPage = () => {
  return (
    <div>
      <Meta
        title={metaConfig.download.ggpoker.title}
        description={metaConfig.download.ggpoker.description}
      />
      <div>GGPOKER</div>
    </div>
  )
}

export default GGPOKER
