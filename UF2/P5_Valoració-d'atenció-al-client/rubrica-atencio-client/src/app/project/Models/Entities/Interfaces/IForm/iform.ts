import { IStandard } from "../IStandard/istandard"

export interface IForm {
    standardList: Array<IStandard>;
    emptyFillList():void;
}
