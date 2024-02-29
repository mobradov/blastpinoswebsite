import Image from 'next/image';


import pino1 from '../../../public/images/pinos/normal/0b1425327843622a700385a353d3ce8e723510ce.png';
import pino2 from '../../../public/images/pinos/normal/0bb3a6cc3fd7c7fd7af1593104d14993dfb74936.png';
import pino3 from '../../../public/images/pinos/normal/0d96bbe7b6bb05ac0a4369b1207c2087309d7d53.png';
import pino4 from '../../../public/images/pinos/normal/2d1dc17279068e397fd240357c6736bdc7aa1706.png';
import pino5 from '../../../public/images/pinos/normal/5a1b7933f3835b9e9c6a42bf41947d1e5c2f4392.png';
import pino6 from '../../../public/images/pinos/normal/5a2b2b1af5774df51551c9f74f875a2226c7f74a.png';
import pino7 from '../../../public/images/pinos/normal/5eb2b56235682c7f6e269d66de221e8fa65abc00.png';
import pino8 from '../../../public/images/pinos/normal/6a407bcf8a828615fb5f8daecdce7d787d0ff991.png';
import pino9 from '../../../public/images/pinos/normal/8e911f570cdf5193b4f1eb6ac3b33d078721504a.png';
import pino10 from '../../../public/images/pinos/normal/9bbd2cb98a6972d82cc64898858b2de342eeef7c.png';


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
        pino10
    ];

    return (
        <div className="my-24 flex justify-between relative h-[600px]">
            <CheckeredBox position="top-0 right-0" />
            <CheckeredBox position="bottom-0 left-0" />

            <section className="mr-24 w-1/3 flex flex-col items-start space-y-4 mt-20">
                <div className="px-4 py-1.5 bg-darkish shadow-lg text-base font-light leading-6 font-kanit text-white flex justify-center items-center">
                    Welcome to the
                </div>
                <div className="mt-2 space-y-2">
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
            
            <section className="w-2/3 mt-20 ml-20">
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