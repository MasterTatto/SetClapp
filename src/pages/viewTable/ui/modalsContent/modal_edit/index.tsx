import {Button} from "antd";
import type {IPropsModalAddEdit} from "../../../../../utils/types.ts";
import Input from "../../../../../common/ui-kit/input";

const ModalEdit = ({formik, handleClose}: IPropsModalAddEdit) => {
    return (
        <div className={"flex flex-col gap-4 w-full"}>
            <Input placeholder="Введите имя"
                   error={formik.touched.name && formik.errors.name}
                   status={formik.errors.name && formik.touched.name ? "error" : "validating"}
                   onBlur={formik.handleBlur} onChange={formik.handleChange} name={"name"}
                   value={formik.values.name}/>
            <Input placeholder="Введите дату рождения"
                   error={formik.touched.birthday && formik.errors.birthday}
                   status={formik.errors.birthday && formik.touched.birthday ? "error" : "validating"} type={"date"}
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   name={"birthday"}
                   value={formik.values.birthday}/>
            <Input placeholder="Введите возраст"
                   error={formik.touched.age && formik.errors.age}
                   status={formik.errors.age && formik.touched.age ? "error" : "validating"} type={"number"}
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange} name={"age"}
                   value={formik.values.age}/>

            <div className={'w-full flex items-center justify-end gap-3'}>
                <Button variant={'outlined'} color={"default"}
                        onClick={handleClose}>Отмена</Button>
                <Button variant={'filled'} color={"primary"} onClick={() => formik.handleSubmit()}>Сохранить</Button>
            </div>
        </div>
    );
};

export default ModalEdit;