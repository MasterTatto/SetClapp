import {type ReactNode} from "react";
import {motion} from 'framer-motion';

interface PropsI {
    children: ReactNode,
    className?: string,
}

const Wrapper = ({children, className}: PropsI) => {
    return (
        <motion.div initial={{y: 500, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                        duration: 1
                    }} className={`${className} p-2 bg-white shadow-lg rounded-md`}>
            {children}
        </motion.div>
    );
};

export default Wrapper;