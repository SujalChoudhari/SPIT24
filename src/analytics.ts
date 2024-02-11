import { Burnupdown } from "./components/burnupdown";

export const analytics = {
    totalExpenditure: "23,452Rs.",
    totalBudget: "50,000Rs.",
    inProgress: "25%",
    developFrontend: "50%",
    designWireframe: "44%",
    testFeatures: "10%",
    launchCampaign: "25%",
    hireTeam: "34%",
    productivity: {
        sujal: 0.9,
        soham: 0.8,
        anish: 0.6,
        saniyaa: 0.5
    },
    expVsBudData: [{
        id: "Expenditure",
        data: [
            { x: "Jan", y: 43 },
            { x: "Feb", y: 137 },
            { x: "Mar", y: 61 },
            { x: "Apr", y: 145 },
            { x: "May", y: 26 },
            { x: "Jun", y: 154 },
        ],
    },
    {
        id: "Budget",
        data: [
            { x: "Jan", y: 60 },
            { x: "Feb", y: 48 },
            { x: "Mar", y: 177 },
            { x: "Apr", y: 78 },
            { x: "May", y: 96 },
            { x: "Jun", y: 204 },
        ],
    }],
    tasks:
    {
        designedWireframe: "25%",
        developFrontend: "34%",
        testFeatures: "24%"
    },
    hrsIntoProject: "134hrs",
    predictedCompletionTime: "80hrs",
    totalRevisionsMade: "4",
    issuesFixed: "138",
    pendingIssues: "33",
    pendingTasks: "10",
    burnup: [
        {
            id: "Expected",
            data: [
                { x: "5th", y: 0 },
                { x: "6th", y: 10 },
                { x: "7th", y: 20 },
                { x: "8th", y: 50 },
                { x: "9th", y: 70 },
                { x: "10th", y: 100 },
            ],
        },
        {
            id: "Curret",
            data: [
                { x: "5th", y: 0 },
                { x: "6th", y: 7 },
                { x: "7th", y: 18 },
                { x: "8th", y: 55 },
                { x: "9th", y: 59 },
                { x: "10th", y: 78 },
            ],
        },
    ],
    burndown: [
        {
            id: "Expected",
            data: [
                { x: "5th", y: 100 },
                { x: "6th", y: 60 },
                { x: "7th", y: 55 },
                { x: "8th", y: 54 },
                { x: "9th", y: 20 },
                { x: "10th", y: 0 },
            ],
        },
        {
            id: "Current",
            data: [
                { x: "5th", y: 100 },
                { x: "6th", y: 90 },
                { x: "7th", y: 78 },
                { x: "8th", y: 60 },
                { x: "9th", y: 40 },
                { x: "10th", y: 38 },
            ],
        },
    ]
}