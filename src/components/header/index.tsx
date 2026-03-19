import {Typography} from 'antd';
import {motion} from 'framer-motion';

const {Title} = Typography;

const Header = () => {
    return (
        <motion.div
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 1
            }}
            className={'bg-purple-300 w-full p-3'}>
            <Title className={'!m-0 !text-white'}>Сетклапп</Title>
        </motion.div>
    );
};

export default Header;