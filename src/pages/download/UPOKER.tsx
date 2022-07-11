import { NextPage } from 'next'
import { Meta, metaConfig } from '../../config'

const UPOKER: NextPage = () => {
  return (
    <div>
      <Meta
        title={metaConfig.download.upoker.title}
        description={metaConfig.download.upoker.description}
      />
      <div>UPOKER</div>
    </div>
  )
}

export default UPOKER
