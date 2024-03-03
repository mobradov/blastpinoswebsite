import headerIcon from '../../assets/icons/header-icon.png';
import twitterIcon from '../../assets/icons/twitter-icon.png';
import etherscanIcon from '../../assets/icons/etherscan-icon.png';
import openseaIcon from '../../assets/icons/opensea-icon.png';

import Image from 'next/image';

import SocialLink from '../Shared/SocialLink';

const Footer = () => {
    return (
        <div className="flex flex-wrap justify-between items-center pt-5 my-8 sm:w-full">
            <hr className="border-t border-white w-full my-4" />
            <div className="flex items-center gap-4 text-xl sm:text-lg font-normal uppercase tracking-widest font-righteous">
               
                Blast Pinos
            </div>
            <div className="hidden sm:flex items-center gap-8">
                <div className="flex gap-4">
                <SocialLink
                        href="https://twitter.com/BlastPinosNFT"
                        icon={twitterIcon}
                        alt="Link to Blast Pinos on Twitter"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;
/*nachtträglich zurücktun
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
                    */