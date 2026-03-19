import Wrapper from "../../../../components/warpper";
import {Button, Table, type TableProps} from "antd";
import {type ItemI, useTableStore} from "../../../../store/tableStore.ts";
import type {ModalContentI} from "../../index.tsx";

interface IProps {
    openModal: ({variant, item}: ModalContentI) => void
}

const ListTable = ({openModal}: IProps) => {
    const {items, search} = useTableStore()

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const columns: TableProps<ItemI>['columns'] = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Дата рождения',
            dataIndex: 'birthday',
            key: 'birthday',
            sorter: (a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime(),
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            key: 'action',

            render: (_, cur) => {

                return <div className={'flex items-center gap-3 w-full'}>
                    <Button className={'w-full'} color="primary" danger
                            onClick={() => openModal({variant: "delete", item: cur})}>
                        Удалить
                    </Button>
                    <Button className={'w-full'} color="primary" variant="outlined"
                            onClick={() => openModal({variant: "edit", item: cur})}>
                        Редактировать
                    </Button>
                </div>
            },
        },
    ]
    return (
        <Wrapper>
            <Table scroll={{x: 'max-content'}} pagination={false} rowKey={"id"} dataSource={filteredItems}
                   columns={columns}/>
        </Wrapper>
    );
};

export default ListTable;