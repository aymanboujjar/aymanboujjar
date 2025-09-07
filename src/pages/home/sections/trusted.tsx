import Title from "../../../components/Title";
import { trusted } from "../../../constants/trusted";
import { TransText } from "../../../components/TransText";

export default function Trusted() {

    return (
        <section>
            <div className="w-full px-16">
                <Title title={<TransText en="Trusted By" fr="Ils Me Font Confiance" />} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">

                    {trusted.map((tru, ind) => (
                            <a key={ind} href={tru.website} target="_blank"
                                className="flex flex-col gap-2 items-center bg-gray-900/50 backdrop-blur-sm text-white rounded p-6 cursor-pointer"
                            >
                                <img src={tru.image}
                                    className="w-[150px] h-[140px] object-cover"
                                    alt="trusted_logo" />
                                <p className="text-xl">{tru.name}</p>
                            </a>
                        ))}

                </div>
            </div>
        </section>
    )
}