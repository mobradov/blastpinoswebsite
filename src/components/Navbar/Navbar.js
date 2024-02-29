import headerIcon from '../../assets/icons/header-icon.png';
import twitterIcon from '../../assets/icons/twitter-icon.png';
import etherscanIcon from '../../assets/icons/etherscan-icon.png';
import openseaIcon from '../../assets/icons/opensea-icon.png';

import Image from 'next/image';

import SocialLink from '../Shared/SocialLink';

const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center space-x-80 sm:w-full mt-8">
            
            <div className="flex items-center gap-8 space-x-80">
                <div className="flex gap-4">
                    <SocialLink
                        href="https://twitter.com/BlastPinosNFT"
                        icon={twitterIcon}
                        alt="Link to Blast Pinos on Twitter"
                    />
                    <SocialLink
                        href="https://etherscan.io/address/0xdcf9bd5f26b58b82d4a8ec8fdf52069c7417c9c7"
                        icon={etherscanIcon}
                        alt="Link to the Blast Pinos contract"
                    />
                    <SocialLink
                        href="https://opensea.io/collection/ether-fellas"
                        icon={openseaIcon}
                        alt="Link to Blast Pinos on OpenSea"
                    />
                </div>
                <div className="flex items-center gap-4 font-righteous uppercase tracking-widest text-xl sm:text-lg font-normal mb-4 sm:mb-0">
                <span>
                    <Image src={headerIcon} alt="Blast Pinos Logo" />
                </span>
                Blast Pinos
            </div>
                <div className="relative inline-block transition duration-200 hover:scale-105">
                    <button
                        className="w-44 h-12 bg-blyellow uppercase tracking-wider font-righteous text-base small-shadow text-black"
                        onClick={() => {
                            const element = document.getElementById('mint');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Mint Here
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
