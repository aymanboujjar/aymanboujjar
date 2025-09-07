import Title from "../../../components/Title";
import { interests } from "../../../constants/aboutInfo";
import { TransText } from "../../../components/TransText";

const InterestCard = ({ interest } : InterestCardProp) => {
    return (
        <div className="bg-gray-900/50 backdrop-blur-sm z-10 text-white rounded-xl p-6">
            <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{interest.icon}</span>
                <h3 className="text-2xl font-bold text-alpha">
                    <TransText {...interest.name} />
                </h3>
            </div>
            <p className="">
                <TransText {...interest.description} />
            </p>
        </div>
    );
};

export default function AboutInterests() {
    return (
        <section className="px-16 py-20">
            <div className="w-full">
                <Title title={<TransText en="Personal Interests" fr="Centres d'Intérêt" />} />
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {interests.map((interest, index) => (
                            <InterestCard key={index} interest={interest} />
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
