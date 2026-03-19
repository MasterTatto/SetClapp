import type {FormikProps} from "formik";
import type {ItemI} from "../store/tableStore.ts";

export interface IPropsModalAddEdit {
    formik: FormikProps<Omit<ItemI, "id">>
    handleClose: () => void
}