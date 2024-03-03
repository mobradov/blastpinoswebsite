import Image from 'next/image';
import pino1 from '../../../public/images/pinos/normal/blastpino1.png';
import pino2 from '../../../public/images/pinos/normal/blastpino2.png';
import pino3 from '../../../public/images/pinos/normal/blastpino3.png';
import pino4 from '../../../public/images/pinos/normal/blastpino4.png';
import pino5 from '../../../public/images/pinos/normal/blastpino5.png';
import pino6 from '../../../public/images/pinos/normal/blastpino6.png';
import pino7 from '../../../public/images/pinos/normal/blastpino7.png';
import pino8 from '../../../public/images/pinos/normal/blastpino8.png';
import pino9 from '../../../public/images/pinos/normal/blastpino9.png';
import pino10 from '../../../public/images/pinos/normal/blastpino10.png';
import pino12 from '../../../public/images/pinos/normal/blastpino12.png';
import pino13 from '../../../public/images/pinos/normal/blastpino13.png';
import pino15 from '../../../public/images/pinos/normal/blastpino15.png';
import pino16 from '../../../public/images/pinos/normal/blastpino16.png';
import pino20 from '../../../public/images/pinos/normal/blastpino20.png';
import pino21 from '../../../public/images/pinos/normal/blastpino21.png';
import pino22 from '../../../public/images/pinos/normal/blastpino22.png';
import pino23 from '../../../public/images/pinos/normal/blastpino23.png';
import pino24 from '../../../public/images/pinos/normal/blastpino24.png';
import pino25 from '../../../public/images/pinos/normal/blastpino25.png';
import pino26 from '../../../public/images/pinos/normal/blastpino26.png';



const FirstSection = () => {
    const pinos = [
        pino1,
        pino2,
        pino3,
        pino4,
        pino5,
        pino6,
        pino7,
        pino8,
        pino9,
        pino10,
        pino12,
        pino13,
        pino15,
        pino16,
        pino20,
        pino21,
        pino22,
        pino23,
        pino24,
        pino25,
        pino26
    ];

    return (
        <div className="my-24 flex justify-between relative h-[600px]">
            <CheckeredBox position="top-0 right-0" />
            <CheckeredBox position="bottom-0 left-0" />

            <section className="hidden md:flex mr-24 w-1/3 flex flex-col items-start space-y-4 mt-20">
                <div className="px-4 py-1.5 bg-darkish shadow-lg text-base font-light leading-6 font-kanit text-white flex justify-center items-center">
                    Welcome to the
                </div>
                <div className="mt-2 space-y-2 ">
                    {['Blast', 'Pinos', 'web', 'site'].map((word, i) => (
                        <div
                            key={i}
                            className="font-righteous font-normal text-blyellow text-[80px] leading-[80px] tracking-tighter flex-none"
                        >
                            {word}
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="w-2/3 mt-20 ml-20 -z-50">
                <div className="h-[400px] w-full overflow-y-auto grid grid-cols-3 gap-2 hide-scrollbar big-shadow">
                    {pinos
                        .slice()
                        .reverse()
                        .map((pinos, index) => (
                            <Image
                                key={index}
                                src={pinos}
                                alt={`Blast Pino ${index}`}
                                className="w-[100px] h-[100px] object-cover object-center"
                                loading="eager"
                            />
                        ))}
                </div>
            </section>
            

            
        </div>
    );
};

const CheckeredBox = ({ position }) => (
    <div className={`${position} absolute w-16 h-16`}>
        <div className="flex flex-wrap w-full h-full">
            <div className="w-1/2 h-1/2 bg-blyellow"></div>
            <div className="w-1/2 h-1/2"></div>
            <div className="w-1/2 h-1/2"></div>
            <div className="w-1/2 h-1/2 bg-blyellow"></div>
        </div>
    </div>
);

export default FirstSection;