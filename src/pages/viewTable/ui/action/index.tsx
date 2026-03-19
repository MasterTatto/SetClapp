import Wrapper from "../../../../components/warpper";
import {Button} from "antd";
import Title from "antd/es/typography/Title";

interface IProps {
    openModal: () => void
}

const Action = ({openModal}: IProps) => {
    return (
        <Wrapper className={'flex items-center justify-between max-sm:flex-col max-sm:gap-4'}>
            <Title level={4} className={'!m-0'}>Список пользователей</Title>
            <Button onClick={openModal} size={'large'} className={'max-sm:w-full'} type="primary">Добавить поле</Button>
        </Wrapper>
    );
};

export default Action;