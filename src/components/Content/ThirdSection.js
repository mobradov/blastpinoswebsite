import ethercity from '../../../public/images/content/ethercity_art.gif';
import Image from 'next/image';

const ThirdSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center text-center my-24">
            <div className="flex flex-col items-center justify-center w-7/12 mb-12">
                <h1 className="custom-heading my-8">Ether City</h1>
                <p className="custom-paragraph text-start px-6">
                    Introducing the famed Ether City, a place of opportunity,
                    friendship and love. A bustling metropolis that never ceases
                    to amaze its inhabitants, attracting tourists from other
                    chains and entrepreneurs from around the world. All Ethereum
                    NFTs are from here, and Ether Fellas are the most sought
                    after.
                </p>
            </div>
            <Image
                src={ethercity}
                alt="Ether City"
                className="w-9/12 big-shadow"
            />
        </div>
    );
};

export default ThirdSection;
