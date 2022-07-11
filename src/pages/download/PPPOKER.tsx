import { NextPage } from 'next'
import { Meta, metaConfig } from '../../config'

const PPPOKER: NextPage = () => {
  return (
    <div>
      <Meta
        title={metaConfig.download.pppoker.title}
        description={metaConfig.download.pppoker.description}
      />
      <div>PPPOKER</div>
    </div>
  )
}

export default PPPOKER
