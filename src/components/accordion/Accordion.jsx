
const Accordion = () => {
    return (
        <div className="space-y-2 md:w-2/5 w-full flex flex-col mx-auto ">
            <h1 className="mb-5 text-center md:text-2xl text-xl font-bold">Your Question answer here</h1>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Will it be worth it for me to get the house?
                </div>
                <div className="collapse-content">
                    <p>Yes of course everyone gives better service than us</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Is there any system of renting the house and returning the money later
                </div>
                <div className="collapse-content">
                    <p>Yes you can do it within 10 days</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Is the house suitable for all seasons?
                </div>
                <div className="collapse-content">
                    <p>Of course you can always relax</p>
                </div>
            </div>         
        </div>
    );
};

export default Accordion;