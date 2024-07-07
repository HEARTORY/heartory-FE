import Background from "@/assets/images/Background Image.png";
export const Howto: React.FC = () => {
    return (
        <div
            className="w-full min-h-[70vh] bg-black flex flex-col items-center text-center"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
            }}
        >
            <h1 className="text-white font-bold uppercase mt-4 text-2xl ">
                How to use our app perfectly
            </h1>
            <h3 className=" w-[50%] mt-8 text-center text-gray-300 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </h3>
            <div className="flex justify-center items-center w-[80%]  bg-gray-100  mt-16 mb-16 md:w-[500px] md:h-[200px] ">
                <div className="w-full ">
                    <iframe
                        className="md:w-[500px] md:h-[280px]  w-full "
                        width="1020"
                        height="574"
                        src="https://www.youtube.com/embed/KdzynO9HhOo?rel=0&modestbranding=1"
                        title="Heartory Introduction"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Howto;
