import Action from "./ui/action";
import ListTable from "./ui/listTable";
import {useEffect, useState} from "react";
import Modal from "../../components/modal";
import ModalAdd from "./ui/modalsContent/modal_add";
import ModalEdit from "./ui/modalsContent/modal_edit";
import ModalRemove from "./ui/modalsContent/modal_remove";
import {useFormik} from "formik";
import {type ItemI, useTableStore} from "../../store/tableStore.ts";
import {toast} from "react-toastify";
import {validate} from "./utils/validate.ts";

type ModalContentVariant = "add" | "edit" | "delete" | null;

export interface ModalContentI {
    variant: ModalContentVariant,
    item?: ItemI | null
}

const ViewTable = () => {
    const {addItem, updateItem} = useTableStore()

    const [isModalOpen, setIsModalOpen] = useState<ModalContentI>({variant: null, item: null});

    const formik = useFormik<Omit<ItemI, "id">>({
        initialValues: {
            name: "",
            age: 0,
            birthday: "",
        },
        validate: validate,
        onSubmit: (values) => {
            if (isModalOpen.variant === 'add') {
                addItem(values)
                setIsModalOpen({variant: null, item: null})
                toast.success("Добавлено!")
            }
            if (isModalOpen.variant === 'edit') {
                updateItem(isModalOpen.item!.id, values)
                setIsModalOpen({variant: null, item: null})
                toast.success("Обновлено!")
            }
        }
    })

    const handleCloseModal = () => setIsModalOpen({variant: null})

    const getTitleModal = () => {
        switch (isModalOpen.variant) {
            case "add":
                return "Добавление поля"
            case "edit":
                return `Редактирование поля - ${isModalOpen.item?.name}`
            case "delete":
                return `Удаление поля - ${isModalOpen.item?.name}`
            default:
                return "Неизвестное состояние"
        }
    }

    const getModalContent = () => {
        switch (isModalOpen.variant) {
            case "add":
                return <ModalAdd formik={formik} handleClose={handleCloseModal}/>
            case "edit":
                return <ModalEdit formik={formik} handleClose={handleCloseModal}/>
            case "delete":
                return <ModalRemove handleClose={handleCloseModal} id={isModalOpen.item!.id}/>
            default:
                return "Неизвестное состояние"

        }
    }

    const titleModal = getTitleModal()

    useEffect(() => {
        // Чистим состояние формика при закрытии модалки, что бы не сохранялись ошибки валидации и старые значения
        if (isModalOpen.variant === null) {
            formik.resetForm()
        }

    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen.variant === "edit") {
            const values = {...isModalOpen.item}

            if (values?.id) {
                delete values?.id
            }

            formik.setValues({
                name: values.name as string,
                age: values.age as number,
                birthday: values.birthday as string,
            })
        }
    }, [isModalOpen]);

    return (
        <div className={'w-full flex flex-col gap-4'}>
            <Modal
                title={titleModal}
                isOpen={Boolean(isModalOpen.variant)}
                handleClose={handleCloseModal}
            >
                {getModalContent()}
            </Modal>

            <Action openModal={() => setIsModalOpen({variant: "add"})}/>
            <ListTable openModal={({variant, item}: ModalContentI) => setIsModalOpen({variant, item})}/>
        </div>
    );
};

export default ViewTable;