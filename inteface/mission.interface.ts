export interface IMission{
    mission_name: string;
    launch_date_local: string;
    launch_site: ILaunch;
    links: ILinks;
    rocket:IRoket;
    second_stage: ISecond_stage;

}
export interface ILaunch{
    site_name_long: string;
}
export interface ILinks{
    article_link: null;
    video_link: string;
}
export interface IRoket{
    rocket_name:string;
    first_stage: IFirst_stage;

}
export interface IFirst_stage{
    cores:[ICores];
}
export interface ICores{
    flight: number;
    core: ICore;
}
export interface ICore{
    reuse_count:number;
    status: boolean;
}
export interface ISecond_stage{
    payloads: [IPayloads]
}
export interface IPayloads{

    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;

}
