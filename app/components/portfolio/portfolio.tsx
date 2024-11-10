import Image from 'next/image';
import hero from '@/app/public/hero4.jpg';
import hero2 from '@/app/public/hero5.jpg';

const PortFolio = () => {
  return (
    <div className="h-auto py-16 px-4 sm:px-8">
   
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-12">Portfolio Projects</h1>

  
      <div className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-serif text-orange-500 mb-4">Project 1</h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">E-commerce Mobile App Design</h3>
        <p className="text-base sm:text-lg mb-8">
          Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s when the specimen book was first created. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Image
            className="rounded-lg shadow-lg ml-96"
            src={hero}
            alt="E-commerce App Design"
            width={400}
            height={250}
            objectFit="cover"
          />
        </div>
      </div>

    
      <div>
        <h2 className="text-3xl sm:text-4xl font-serif text-orange-500 mb-4">Project 2</h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Social Media Mobile App Design</h3>
        <p className="text-base sm:text-lg mb-8">
          Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s when the specimen book was first created. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        
        <div className="flex justify-center sm:justify-start">
          <Image
            className="rounded-lg shadow-lg ml-96"
            src={hero2}
            alt="Social Media App Design"
            width={400}
            height={250}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PortFolio;