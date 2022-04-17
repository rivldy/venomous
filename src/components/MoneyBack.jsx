import WalletImg from '../wallet.svg'

export default function MoneyBack() {
    return (
        <div className="w-full bg-white">
            <div className="container py-10">
                <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
                        <img src={WalletImg} alt="30 Days Money Back Guarantee" className="h-[250px] md:h-[280px] lg:h-[300px]" />
                    </div>
                    <div className="flex-1 flex flex-col space-y-4 order-first lg:order-last text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold">30-day money-back guarantee</h2>
                        <p className="text-lg">Enjoy full access to the award-winning VPN completely risk-free. If you are not 100% satisfied, tell us within 30 days of buying NordVPN and get a full refund.</p>
                        <button className="btn btn-jumbo btn-primary w-full md:w-fit md:mx-auto lg:mx-0">Try Venomous Risk-Free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}