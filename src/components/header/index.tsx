import {Typography} from 'antd';

const {Title} = Typography;

const Header = () => {
    return (
        <div className={'bg-purple-300 w-full p-3'}>
            <Title className={'!m-0 !text-white'}>Сетклапп</Title>
        </div>
    );
};

export default Header;