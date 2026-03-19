import {type ReactNode} from "react";

interface PropsI {
    children: ReactNode,
    className?: string,
}

const Wrapper = ({children, className}: PropsI) => {
    return (
        <div className={`${className} p-2 bg-white shadow-lg rounded-md`}>
            {children}
        </div>
    );
};

export default Wrapper;