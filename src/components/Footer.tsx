import { motion } from 'framer-motion'
export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
<footer className='w-full divide-y divide-solid py-20 px-16 flex flex-col gap-20 bg-gray-800 shadow-md text-white'>
  <div className='flex gap-28'>
  <motion.div 
    {...staggerChildren}
    className='flex gap-10 justify-between'
  >
    <span className='flex-1 font-bold text-4xl'>Logo</span>
    <span className='flex-1 font-semibold text-xl'>Coluna Um</span>
    <span className='flex-1 font-semibold text-xl'>Coluna Dois</span>
    <span className='flex-1 font-semibold text-xl'>Coluna Três</span>
  </motion.div>

  <motion.div 
    {...fadeInUp}
    className='flex flex-col gap-6'
  >
    <h2 className='font-semibold text-xl'>Inscrever</h2>
    <p>Inscreva-se em nosso boletim para ficar atualizado sobre recursos e lançamentos.</p>
    <form className='flex gap-4'>
      <input 
        type="email" 
        placeholder="Email" 
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Inscrever
      </button>
    </form>
    <p className="text-gray-500 text-sm">Ao se inscrever, você concorda com nossa Política de Privacidade e consente em receber atualizações da nossa empresa.</p>
  </motion.div>
</div>
<hr className="border-gray-200"/>
</footer>
  )
}
