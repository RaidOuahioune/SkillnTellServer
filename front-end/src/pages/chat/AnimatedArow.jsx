import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

export let AnimatedArrow = () => {
    return (
        <motion.div
            lop
            animate={{ y: [0, 10, 0], opacity: 1, scale: 1 }}
            transition={{
                duration: 3,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
                repeat: Infinity,
            }}
            initial={{ opacity: 1, scale: 1 }}
        >
            <div className="flex justify-center ">
                <button
                    className="flex flex-col hover:bg-violet p-2"
                    onClick={() => console.log("Hey")}
                >
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-sec"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        className="text-sec"
                        icon={faChevronDown}
                    ></FontAwesomeIcon>
                </button>
            </div>
        </motion.div>
    );
};
