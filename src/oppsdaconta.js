import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
    @api id;
    @api name;
    @api amount;
    @api stage;
}