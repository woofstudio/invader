import { NextPage } from 'next/types'
import { Meta, metaConfig } from '../../config'

const POKERBROS: NextPage = () => {
  return (
    <div>
      <Meta
        title={metaConfig.download.pokerbros.title}
        description={metaConfig.download.pokerbros.description}
      />
      <div>POKERBROS</div>
    </div>
  )
}

export default POKERBROS
