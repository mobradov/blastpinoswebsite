import pino1 from '../../../public/images/pinos/legendaries/blastpino11.png';
import pino2 from '../../../public/images/pinos/legendaries/blastpino14.png';
import pino3 from '../../../public/images/pinos/legendaries/blastpino17.png';
import pino4 from '../../../public/images/pinos/legendaries/blastpino18.png';
import pino5 from '../../../public/images/pinos/legendaries/blastpino19.png';

import pino6 from '../../../public/images/pinos/legendaries/blastpino1.png';
import pino7 from '../../../public/images/pinos/legendaries/blastpino2.png';
import pino8 from '../../../public/images/pinos/legendaries/blastpino3.png';
import pino9 from '../../../public/images/pinos/legendaries/blastpino4.png';
import pino10 from '../../../public/images/pinos/legendaries/blastpino5.png';


import Image from 'next/image';

const SecondSection = () => {
    const firstRowImages = [pino1, pino2, pino3];
    const secondRowImages = [
        pino4,
        pino5,
        pino6,
        pino7,
    ];
    const thirdRowImages = [pino8, pino9, pino10];

    return (
        <div className="relative flex my-14">
            <section className="hidden md:flex flex-col items-center gap-4 w-1/2 pr-14">
                <div className="grid gap-3 grid-cols-3">
                    {firstRowImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            className="w-[120px] h-[120px]"
                        />
                    ))}
                </div>

                <div className="grid gap-3 grid-cols-4">
                    {secondRowImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            className="w-[120px] h-[120px]"
                        />
                    ))}
                </div>

                <div className="grid gap-3 grid-cols-3">
                    {thirdRowImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            className="w-[120px] h-[120px]"
                        />
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-6 w-full sm:w-1/2 mt-36 mx-auto items-center">
    <h1 className="custom-heading text-center">The art</h1>
    <p className="custom-paragraph w-9/12 mb-4 text-center">
        Once upon a time, amidst the digital landscape of the Blast Chain, there emerged a visionary endeavor known as Blast Pinos. Born from the boundless imagination of its creators, this NFT project embarked on a journey of artistic exploration that would captivate the hearts and minds of collectors far and wide. The collection consists of 84 different traits with some rulesets combined.
    </p>
</section>


            
            <div className="absolute left-0 bottom-[-7%] w-full h-[80%] scale-110 bg-black -z-50 opacity-20"></div>
        </div>
    );
};

export default SecondSection;
