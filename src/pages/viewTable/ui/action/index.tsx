import Wrapper from "../../../../components/warpper";
import {Button} from "antd";
import Title from "antd/es/typography/Title";
import Search from "antd/es/input/Search";
import {useTableStore} from "../../../../store/tableStore.ts";

interface IProps {
    openModal: () => void
}

const Action = ({openModal}: IProps) => {
    const {setSearch} = useTableStore()

    const onSearch = (value: string) => {
        setSearch(value.trim());
    };
    return (
        <Wrapper className={'flex items-center justify-between max-sm:flex-col max-sm:gap-4'}>
            <Title level={4} className={'!m-0'}>Список пользователей</Title>
            <Search placeholder="Поиск по имени" className={'max-w-[340px] max-sm:max-w-full'} onSearch={onSearch}/>
            <Button onClick={openModal} size={'large'} className={'max-sm:w-full'} type="primary">Добавить поле</Button>
        </Wrapper>
    );
};

export default Action;