import Image from "next/image";

import medalGold from "../../assets/medal_gold.svg"
import medalSilver from "../../assets/medal-silver.svg"
import medalCooper from "../../assets/medal-cooper.svg"

export function Ranking() {
    return(
        <div className="w-full max-w-[440px] space-y-5">
                <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de indicações</h2>

                <div className="space-y-4">
                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                       <span className="text-sm text-gray-300 leading-none"><span>1</span> | Eduardo Martins</span> 

                       <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>

                       <Image src={medalGold} alt="Medal Gold" className="absolute top-0 right-8"/>
                    </div>

                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                       <span className="text-sm text-gray-300 leading-none"><span>2</span> | Maria Luisa</span> 

                       <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">905</span>

                       <Image src={medalSilver} alt="Medal Gold" className="absolute top-0 right-8"/>
                    </div>

                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                       <span className="text-sm text-gray-300 leading-none"><span>3</span> | Lucas Moura</span> 

                       <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">856</span>

                       <Image src={medalCooper} alt="Medal Gold" className="absolute top-0 right-8"/>
                    </div>
                </div>
            </div>
    )
}