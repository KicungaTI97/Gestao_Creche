import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import image from '../assets/image5.jpg'
import image9 from '../assets/image9.jpg'
import image8 from '../assets/image8.jpg'
import image12 from '../assets/image12.jpg'
import image10 from '../assets/image10.jpg'
import image3 from '../assets/image3.jpg'
import image6 from '../assets/image6.jpg'
import profile from '../assets/profile-pic.png'
import { NavLink} from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Calendar } from 'lucide-react'
import { WhatsAppChat } from './WhatsAppButton'

export function Home() {
 

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Configurações de animação reutilizáveis
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
    <>
      {/* Barra de progresso */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex py-24 px-20 gap-10 items-center bg-gradient-to-r from-blue-100/50 to-white"
      >
        <motion.div 
          {...fadeInUp}
          className='flex-1'
        >
          <h1 className="text-foreground font-bold text-5xl">Bem-vindo ao nosso Centro de Cuidados Infantis</h1>
          <p className="text-gray-500">Aqui, priorizamos o bem-estar e o desenvolvimento das crianças. Navegue facilmente pelas seções para conhecer mais sobre nossos serviços e equipe.</p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-5"
          >
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center">
                  Agendar Visita
                  <Calendar className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-blue-500 text-muted px-8 py-3 rounded-full hover:bg-blue-100 transition-colors">
                  Saiba Mais
                </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img src={image} className="object-cover w-full md:rounded-md shadow-lg hover:shadow-xl transition-shadow" alt="Imagem de criança" />
        </motion.div>
      </motion.section>

      {/* Como Funciona Section */}
      <section className="py-28 px-20 gap-10 items-center w-full place-items-center">
        <motion.div 
          {...fadeInUp}
          className='w-[768px] flex flex-col place-items-center gap-4'
        >
          <span className="text-blue-500">Cuidado</span>
          <h1 className="font-bold text-5xl text-foreground text-center">Como Funciona o Nosso Centro Infantil</h1>
          <p className="text-gray-500 text-center">Nosso centro de cuidados infantis oferece um ambiente seguro e acolhedor, onde as crianças podem aprender e brincar. Com uma equipe dedicada, garantimos que cada atividade seja enriquecedora e divertida.</p>
        </motion.div>

        <motion.div 
          {...staggerChildren}
          className='flex gap-10 my-20'
        >
          {[
            { img: image8, title: "Orário e Actividade Diária", desc: "As atividades são programadas de acordo com o desenvolvimento das crianças, promovendo aprendizado através do brincar." },
            { img: image12, title: "Métodos Pedagógicos Utilizados", desc: "Adotamos abordagens lúdicas que estimulam a criatividade e a socialização." },
            { img: image6, title: "Compromisso com a Segurança e Bem-Estar", desc: "Priorizamos a segurança das crianças em todas as atividades realizadas." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="max-w-sm rounded overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img className="w-full transform hover:scale-105 transition-transform duration-300" src={item.img} alt={item.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          {...fadeInUp}
          className='gap-2'
        >
          <button className="hover:border-blue-500 py-3 px-6 border transition-colors">Saiba mais</button>
          <button className="hover:border-blue-500 py-3 px-6 transition-colors">Fale conosco</button>
        </motion.div>
      </section>

      {/* Serviços Section */}
      <section className="py-28 px-20 gap-10 items-center w-full place-items-center bg-gradient-to-r from-blue-100/50 to-gray-50">
        <motion.div 
          {...fadeInUp}
          className='w-[768px] flex flex-col place-items-center gap-4'
        >
          <h1 className="font-bold text-4xl text-center text-foreground">Serviços oferecidos para o bem-estar e desenvolvimento das crianças</h1>
        </motion.div>

        <motion.div 
          {...staggerChildren}
          className='flex gap-10 my-20'
        >
          {[
            { img: image10, title: "Atividades diárias que promovem aprendizado e socialização entre os pequenos", desc: "Oferecemos cuidados diários, atividades extracurriculares e refeições saudáveis.", link: "Saiba" },
            { img: image3, title: "Atividades extracurriculares que estimulam a criatividade e o aprendizado", desc: "Nossas atividades extracurriculares incluem artes, música e esportes.", link: "Descubra" },
            { img: image9, title: "Refeições saudáveis e balanceadas para o crescimento das crianças", desc: "Servimos refeições nutritivas, preparadas com ingredientes frescos e saudáveis.", link: "Experimente" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="max-w-sm rounded overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img className="w-full transform hover:scale-105 transition-transform duration-300" src={item.img} alt={item.title} />
              <div className="px-6 py-4">
                <h1 className="font-bold text-xl mb-2">{item.title}</h1>
                <p className="text-gray-700 text-base">{item.desc}</p>
                <NavLink to="" className="flex items-center mt-8 text-blue-500 hover:text-blue-600 transition-colors">
                  {item.link} <MdOutlineKeyboardArrowRight size={24}/>
                </NavLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <motion.section 
        {...fadeInUp}
        className="py-28 px-16 items-center w-full place-items-center"
      >
        <div className='w-[768px] place-items-center flex flex-col gap-8'>
          <span className="text-3xl font-bold text-blue-500">CrecheKids</span>
          <h1 className="font-bold text-2xl text-foreground text-center">"O centro de cuidados infantis superou nossas expectativas. A atenção e carinho com que tratam nossas crianças é incomparável!"</h1>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col place-items-center gap-4'
          >
            <img src={profile} alt="" className='rounded-full w-16 h-16 shadow-lg'/>
            <div className='pl-4 place-items-center'>
              <h2 className="font-bold text-xl text-gray-800">João Kicunga</h2>
              <p className="text-gray-500 text-base">Pai, Benguela</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className='py-28 px-20 gap-20 w-full flex'>
        <motion.div 
          {...fadeInUp}
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-5xl'>Perguntas</h1>
            <p>Aqui estão as respostas para as perguntas mais frequentes dos pais e responsáveis.</p>
          </div>
          <button className="hover:border-blue-500 py-3 px-6 border transition-colors">Saiba mais</button>
        </motion.div>

        <motion.div 
          {...staggerChildren}
          className='flex flex-col gap-12'
        >
          {[
            { title: "Qual é o horário de funcionamento?", desc: "O centro funciona de segunda a sexta-feira, das 7h às 18h. Durante os feriados, o horário pode variar. É sempre bom verificar nossa agenda." },
            { title: "Como faço a matricula?", desc: "Para matricular seu filho, você deve preencher o formulário de inscrição disponível em nosso site. Após isso, agendaremos uma visita ao centro. A matrícula é confirmada após a entrega de toda a documentação necessária." },
            { title: "Quais a actividades são oferecidas?", desc: "Oferecemos uma variedade de atividades, incluindo artes, música, esportes e educação infantil. Nossas atividades são planejadas para estimular o desenvolvimento integral das crianças. As atividades variam conforme a faixa etária." },
            { title: "Como posso contactar vocês?", desc: "Você pode nos contatar pelo telefone ligando para (11) 9999-9999 ou pelo e-mail disponíveis em nossa página de contato. Também estamos ativos nas redes sociais. Fique à vontade para nos enviar uma mensagem! ou envie um email para contato@centroinfantil.com." },
            { title: "Oque levar no primeiro dia?", desc: "No primeiro dia, você pode revisar as atividades, verificar a carga horária e fazer o pagamento de matrícula." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className='flex flex-col gap-4'
            >
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <WhatsAppChat />
    </>
  );
}