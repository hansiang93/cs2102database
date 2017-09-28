import { Project } from '../models/project';

export const DUMMY_PROJECTS: Project[] = [
    {
        projectID: "PPBqWA9",
        personID: "2d23d34f",
        title: "cafe cafe",
        description: "string",
        startDate: Date(),
        duration: "string",
        categories: ["food"],
        amountRequested: 9999999,
        funded: false
    } as Project,
    {
        projectID: "g533g3g",
        personID: "34g34g34g",
        title: "game code",
        description: "string",
        startDate: Date(),
        duration: "string",
        categories: ["games"],
        amountRequested: 88888,
        funded: false
    } as Project,
    {
        projectID: "dfgfgdg",
        personID: "sdccdsds",
        title: "tailor taylor",
        description: "string",
        startDate: Date(),
        duration: "string",
        categories: ["clothes"],
        amountRequested: 234324,
        funded: false
    } as Project,
];