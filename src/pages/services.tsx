import { ArrowRight } from "lucide-react";
import foto1 from '../assets/berçário.jpg'
import foto2 from '../assets/maternal.jpg'
import foto3 from '../assets/jardim.jpg'

export function Services() {
  return (
    <>
     {/* Programs Section */}
     <section id="servicos" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Programas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atividades desenvolvidas para cada faixa etária
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Berçário",
                age: "6 meses a 1 ano",
                description: "Cuidados especiais e estímulos adequados para bebês",
                image: `${foto2}`
                
              },
              {
                title: "Maternal",
                age: "2 a 3 anos",
                description: "Desenvolvimento motor e primeiras descobertas",
                image: `${foto1}`
              },
              {
                title: "Jardim",
                age: "4 a 5 anos",
                description: "Preparação para alfabetização e socialização",
                image: `${foto3}`
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-blue-500 font-medium mb-2">{program.age}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button className="text-blue-500 font-medium flex items-center hover:text-blue-600">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
