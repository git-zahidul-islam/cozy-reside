
const TopNav = () => {
    return (
        <div className="md:flex hidden justify-around items-center bg-gray-400 py-1">
            <h1>Contact: 018*****</h1>            
            <div className="flex gap-2 items-center">
                <p className="text-4xl font-extrabold">Find Us</p>
                <div>
                    <a href="#" className="text-xs block">Facebook link</a>
                    <a href="#" className="text-xs block">Twitter link</a>
                </div>
            </div>
        </div>
    );
};

export default TopNav;