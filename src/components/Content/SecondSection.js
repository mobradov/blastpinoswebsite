import AdvancedAGIRobot from '../../../public/images/fellas/legendaries/AdvancedAGIRobot.png';
import CosmicAngel from '../../../public/images/fellas/legendaries/CosmicAngel.png';
import CosmosOverlord from '../../../public/images/fellas/legendaries/CosmosOverlord.png';
import DiamondMonster from '../../../public/images/fellas/legendaries/DiamondMonster.png';
import ElectricalMadScientist from '../../../public/images/fellas/legendaries/ElectricalMadScientist.png';
import KingOfKings from '../../../public/images/fellas/legendaries/KingofKings.png';
import NeonRider from '../../../public/images/fellas/legendaries/NeonRider.png';
import PepeFrog from '../../../public/images/fellas/legendaries/PepeFrog.png';
import TheEtherKing from '../../../public/images/fellas/legendaries/TheEtherKing.png';
import UltimateHacker from '../../../public/images/fellas/legendaries/UltimateHacker.png';

import Image from 'next/image';

const SecondSection = () => {
    const firstRowImages = [AdvancedAGIRobot, CosmicAngel, CosmosOverlord];
    const secondRowImages = [
        DiamondMonster,
        ElectricalMadScientist,
        KingOfKings,
        NeonRider,
    ];
    const thirdRowImages = [PepeFrog, TheEtherKing, UltimateHacker];

    return (
        <div className="relative flex my-14">
            <section className="flex flex-col items-start gap-6 w-1/2 mt-12">
                <h1 className="custom-heading">The art</h1>
                <p className="custom-paragraph w-9/12">
                    Ether Fellas art was made over the course of 2 months, we
                    have 15 different types coupled with 180+ traits and
                    millions of combinations. We have taken our time to perfect
                    each one. Many iterations were made to fix and perfect each
                    trait. The generation itself took over 65 rules and a custom
                    script, ensuring each Fella was created to perfection!{' '}
                    <br /> <br />
                    There are 10 Legendary Fellas awaiting the few lucky enough
                    to mint them.
                </p>
            </section>

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
            <div className="absolute left-0 bottom-[-7%] w-full h-[55%] scale-110 bg-lightgray"></div>
        </div>
    );
};

export default SecondSection;
