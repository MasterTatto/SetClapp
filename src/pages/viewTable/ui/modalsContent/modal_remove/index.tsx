import {Button} from "antd";
import {useTableStore} from "../../../../../store/tableStore.ts";
import {toast} from "react-toastify";
import Text from "antd/es/typography/Text";

interface IProps {
    handleClose: () => void
    id: string
}

const ModalRemove = ({handleClose, id}: IProps) => {
    const {removeItem} = useTableStore()

    const handleDelete = () => {
        removeItem(id)
        toast.success("Удалено!")
        handleClose()
    }

    return (
        <div className={'w-full flex flex-col gap-4'}>
            <Text>Данное действие нельзя будет отменить</Text>
            <div className={'w-full flex items-center justify-end gap-3'}>
                <Button variant={'outlined'} color={"default"}
                        onClick={handleClose}>Отмена</Button>
                <Button variant={'filled'} color={"primary"} onClick={handleDelete}>Удалить</Button>
            </div>
        </div>
    );
};

export default ModalRemove;