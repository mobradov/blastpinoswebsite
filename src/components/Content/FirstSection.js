import Image from 'next/image';

import sunsetArt from '../../../public/images/content/sunset_art.gif';
import customShape from '../../assets/vectors/vector1.svg';

import fella1 from '../../../public/images/fellas/normal/1.png';
import fella2 from '../../../public/images/fellas/normal/2.png';
import fella3 from '../../../public/images/fellas/normal/3.png';
import fella4 from '../../../public/images/fellas/normal/4.png';
import fella5 from '../../../public/images/fellas/normal/5.png';
import fella6 from '../../../public/images/fellas/normal/6.png';
import fella7 from '../../../public/images/fellas/normal/7.png';
import fella8 from '../../../public/images/fellas/normal/8.png';
import fella9 from '../../../public/images/fellas/normal/9.png';
import fella10 from '../../../public/images/fellas/normal/10.png';
import fella11 from '../../../public/images/fellas/normal/11.png';
import fella12 from '../../../public/images/fellas/normal/12.png';
import fella13 from '../../../public/images/fellas/normal/13.png';
import fella14 from '../../../public/images/fellas/normal/14.png';
import fella15 from '../../../public/images/fellas/normal/15.png';
import fella16 from '../../../public/images/fellas/normal/16.png';
import fella17 from '../../../public/images/fellas/normal/17.png';
import fella18 from '../../../public/images/fellas/normal/18.png';
import fella19 from '../../../public/images/fellas/normal/19.png';
import fella20 from '../../../public/images/fellas/normal/20.png';
import fella21 from '../../../public/images/fellas/normal/21.png';
import fella22 from '../../../public/images/fellas/normal/22.png';
import fella23 from '../../../public/images/fellas/normal/23.png';
import fella24 from '../../../public/images/fellas/normal/24.png';
import fella25 from '../../../public/images/fellas/normal/25.png';
import fella26 from '../../../public/images/fellas/normal/26.png';
import fella27 from '../../../public/images/fellas/normal/27.png';
import fella28 from '../../../public/images/fellas/normal/28.png';
import fella29 from '../../../public/images/fellas/normal/29.png';
import fella30 from '../../../public/images/fellas/normal/30.png';
import fella31 from '../../../public/images/fellas/normal/31.png';
import fella32 from '../../../public/images/fellas/normal/32.png';
import fella33 from '../../../public/images/fellas/normal/33.png';
import fella34 from '../../../public/images/fellas/normal/34.png';
import fella35 from '../../../public/images/fellas/normal/35.png';
import fella36 from '../../../public/images/fellas/normal/36.png';
import fella37 from '../../../public/images/fellas/normal/37.png';
import fella38 from '../../../public/images/fellas/normal/38.png';
import fella39 from '../../../public/images/fellas/normal/39.png';

const FirstSection = () => {
    const fellas = [
        fella1,
        fella2,
        fella3,
        fella4,
        fella5,
        fella6,
        fella7,
        fella8,
        fella9,
        fella10,
        fella11,
        fella12,
        fella13,
        fella14,
        fella15,
        fella16,
        fella17,
        fella18,
        fella19,
        fella20,
        fella21,
        fella22,
        fella23,
        fella24,
        fella25,
        fella26,
        fella27,
        fella28,
        fella29,
        fella30,
        fella31,
        fella32,
        fella33,
        fella34,
        fella35,
        fella36,
        fella37,
        fella38,
        fella39,
    ];

    return (
        <div className="my-24 flex justify-between relative h-[600px]">
            <CheckeredBox position="top-0 right-0" />
            <CheckeredBox position="bottom-0 left-0" />

            <section className="w-1/3 flex flex-col items-start space-y-4">
                <div className="px-4 py-1.5 bg-darkish shadow-lg text-base font-light leading-6 font-kanit text-white flex justify-center items-center">
                    Welcome to the
                </div>
                <div className="mt-4 space-y-2">
                    {['Ether', 'Fellas', 'web', 'site'].map((word, i) => (
                        <div
                            key={i}
                            className="font-righteous font-normal text-white text-[120px] leading-[110px] tracking-tighter flex-none"
                        >
                            {word}
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-1/3 p-8">
                <div className="h-[512px] w-full overflow-y-auto grid grid-cols-3 gap-2 hide-scrollbar big-shadow">
                    {fellas
                        .slice()
                        .reverse()
                        .map((fella, index) => (
                            <Image
                                key={index}
                                src={fella}
                                alt={`Ether Fella ${index}`}
                                className="w-[110px] h-[110px] object-cover object-center"
                                loading="eager"
                            />
                        ))}
                </div>
            </section>

            <section className="mt-8 px-8 w-1/3 relative ml-14">
                <div className="w-[300px] h-[300px] relative">
                    <img
                        src={sunsetArt}
                        alt="Modified GIF"
                        loading="eager"
                        className="absolute top-0 left-0 w-full h-full object-cover transform rotate-[-2deg] scale-x-[-1]"
                        style={{
                            maskImage: `url(${customShape})`,
                            maskRepeat: 'no-repeat',
                            maskSize: 'cover',
                            WebkitMaskImage: `url(${customShape})`,
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskSize: 'cover',
                        }}
                    />
                </div>
                <p className="mt-8 custom-paragraph">
                    We are a 74x74 pixel art project dropping this June on the
                    Ethereum Blockchain. <br /> <br /> Explore a diverse range
                    of traits and combinations matched together seamlessly to
                    deliver the best Ether Fellas possible.
                </p>
            </section>
        </div>
    );
};

const CheckeredBox = ({ position }) => (
    <div className={`${position} absolute w-16 h-16`}>
        <div className="flex flex-wrap w-full h-full">
            <div className="w-1/2 h-1/2 bg-lightgray"></div>
            <div className="w-1/2 h-1/2"></div>
            <div className="w-1/2 h-1/2"></div>
            <div className="w-1/2 h-1/2 bg-lightgray"></div>
        </div>
    </div>
);

export default FirstSection;
