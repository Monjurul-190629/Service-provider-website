import SectionTitle from "../Shared/SectionTitle";


const PackageSection = () => {
    return (
        <div className="mt-20">
            <SectionTitle heading={'Package'}></SectionTitle>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                <div className="card w-96 bg-purple-400 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://healingspringswellness.com/wp-content/uploads/2020/12/AdobeStock_354245058.jpeg" alt="Employee" className="rounded-xl w-[400px] h-[180px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold">$5</h2>
                        <p className="text-xl font-semibold">To add 5 employees you have to pay only $5 dollars.</p>
                        <div className="card-actions mt-2">
                            <p className="font-bold border-b-2 border-black p-2">So, lets enjoy our site.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-purple-400 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://online.campbellsville.edu/wp-content/uploads/Employe-Eengagement-Ideas-CU.jpg" alt="Employee" className="rounded-xl w-[400px] h-[180px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold">$8</h2>
                        <p className="text-xl font-semibold">To add 10 employees you have to pay only $8 dollars.</p>
                        <div className="card-actions mt-2">
                            <p className="font-bold border-b-2 border-black p-2">So, lets enjoy our site.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-purple-400 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="http://www.cardbc.com/employment-opportunities.jpg" alt="Employee" className="rounded-xl w-[400px] h-[180px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold">$15</h2>
                        <p className="text-xl font-semibold">To add 20 employees you have to pay only $15 dollars.</p>
                        <div className="card-actions mt-2">
                            <p className="font-bold border-b-2 border-black p-2">So, lets enjoy our site.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageSection;