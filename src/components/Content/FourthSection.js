const FourthSection = () => {
    return (
        <div className="relative w-9/12 p-20 my-24 bg-lightgray">
            <div className="absolute top-0 right-0 w-16 h-16">
                <div className="w-full h-full flex flex-wrap">
                    <div className="w-1/2 h-1/2 bg-dark"></div>
                    <div className="w-1/2 h-1/2"></div>
                    <div className="w-1/2 h-1/2"></div>
                    <div className="w-1/2 h-1/2 bg-dark"></div>
                </div>
            </div>
            <div className="absolute bottom-[-64px] left-[-64px] w-16 h-16">
                <div className="w-full h-full flex flex-wrap">
                    <div className="w-1/2 h-1/2 bg-lightgray"></div>
                    <div className="w-1/2 h-1/2"></div>
                    <div className="w-1/2 h-1/2"></div>
                    <div className="w-1/2 h-1/2 bg-lightgray"></div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="custom-heading m-8">CC0</h1>
                <p className="custom-paragraph text-center px-12">
                    Ether Fellas are cc0, meaning we have given up all rights
                    related to the artwork and given them to the owner at the
                    time that they own the NFT. You own the art and the token
                </p>
            </div>
        </div>
    );
};

export default FourthSection;
