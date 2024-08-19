import SingIn from "@/components/SingIn";
import SingUp from "@/components/SingUp";

const Logaut = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#C0F2C6] py-8"> 
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full p-4 mt-16">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2">
                    <SingIn />
                </div>
                <div className="hidden md:block border-r border-gray-300 h-auto"></div> 
                <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2">
                    <SingUp />
                </div>
            </div>
        </div>
    );
};

export default Logaut;
