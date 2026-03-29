import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface NewsEvent {
    title: string;
    date: Time;
    description: string;
}
export interface BrandInfo {
    tagline: string;
    foundingYear: bigint;
    aboutText: string;
}
export interface Product {
    name: string;
    description: string;
    category: string;
}
export interface backendInterface {
    getBrandInfo(): Promise<BrandInfo>;
    getNewsEvents(): Promise<Array<NewsEvent>>;
    getProducts(): Promise<Array<Product>>;
}
