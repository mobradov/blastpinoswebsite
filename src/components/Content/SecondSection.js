import pino1 from '../../../public/images/pinos/legendaries/21ca3fcac7cbd70365d143422986475027239ed6.png';
import pino2 from '../../../public/images/pinos/legendaries/32fc84aaf624dbb60afc33dc23e1042676c2cb96.png';
import pino3 from '../../../public/images/pinos/legendaries/50f069f0adb0ae089a564fb51a3e456c3b9ef970.png';
import pino4 from '../../../public/images/pinos/legendaries/88dad86e446a6f65e8ad77a90987aa419aa57163.png';
import pino5 from '../../../public/images/pinos/legendaries/187df0af6ae0bf8b9327bec3a0739298031d43b0.png';
import pino6 from '../../../public/images/pinos/legendaries/191de049a59b4a7af63f99d849427b01c969bfb2.png';
import pino7 from '../../../public/images/pinos/legendaries/406e37e172dfb53aa8df6c06c04bdaeca2605535.png';
import pino8 from '../../../public/images/pinos/legendaries/730a34b7c006ddd5931929a6ce5111e6aa74ef69.png';
import pino9 from '../../../public/images/pinos/legendaries/811f5ad3bb5213c19ce363c2160b0b9ca347a7c4.png';
import pino10 from '../../../public/images/pinos/legendaries/9454a447025f117fafeb271990bed6e0a11bd72e.png';

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
            <section className="flex flex-col items-center gap-4 w-1/2 pr-14">
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
            <section className="flex flex-col items-start gap-6 w-1/2 mt-36 items-center">
                <h1 className="custom-heading">The art</h1>
                <p className="custom-paragraph w-9/12 mb-4">
                    
                Once upon a time, amidst the digital landscape of the Blast Chain, 
                there emerged a visionary endeavor known as Blast Pinos. Born from the boundless imagination of its creators, 
                this NFT project embarked on a journey of artistic exploration that would captivate the hearts and minds of collectors far and wide.
                The collection consists of 84 different traits with some rulesets combined.
                   
                </p>
            </section>

            
            <div className="absolute left-0 bottom-[-7%] w-full h-[80%] scale-110 bg-blyellow -z-50 opacity-20"></div>
        </div>
    );
};

export default SecondSection;
