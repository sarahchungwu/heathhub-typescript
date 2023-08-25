import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

type Props = { setSelectedPage: (value: SelectedPage) => void }

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          <HText>MORE THAN JUST GYM</HText>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
