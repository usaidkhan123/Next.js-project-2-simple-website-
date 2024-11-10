const Services = () => {
    return ( 
        <div className="bg-orange-200 py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-center py-4 mb-8">Our Services</h1>
            
            {/* Grid Layout for Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8">
                
                {/* Marketing Section */}
                <section className="h-60 w-full bg-white rounded-lg p-6 flex flex-col justify-center items-center">
                    <h1 className="font-mono text-xl font-semibold text-center mb-4">Marketing</h1>
                    <p className="text-center text-sm sm:text-base">
                        Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s.
                    </p>
                </section>

                {/* Seo/Sem Section */}
                <section className="h-60 w-full bg-white rounded-lg p-6 flex flex-col justify-center items-center">
                    <h1 className="font-mono text-xl font-semibold text-center mb-4">SEO/SEM</h1>
                    <p className="text-center text-sm sm:text-base">
                        Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s.
                    </p>
                </section>

                {/* Viral Campaign Section */}
                <section className="h-60 w-full bg-white rounded-lg p-6 flex flex-col justify-center items-center">
                    <h1 className="font-mono text-xl font-semibold text-center mb-4">Viral Campaign</h1>
                    <p className="text-center text-sm sm:text-base">
                        Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Services;
