type worksExperienceType = {
    id: number;
    start: number;
    end: number;
    workplace: string;
    position: string;
    description: string;
    label: string[];
}

type projectsType = {
    id: number;
    title: string;
    link: string;
    description: string;
    label: string[];
}

export const worksExperience : worksExperienceType[] = [
    {
        id: 1,
        start: 2021,
        end: 2021,
        workplace: "Universidad de Sonsonate",
        position: "University Professor",
        description: "Chess instructor, I dedicated myself to train competent athletes to participate in national university tournaments obtaining some champions.",
        label: ["Professor", "Instructor"]
    },
    {
        id: 2,
        start: 2022,
        end: 2023,
        workplace: "Grupo Kreare",
        position: "Software Developer",
        description: "Development of the website of a consulting firm that advises, designs and implements pedagogical strategies, creative processes and awareness campaigns for children, youth and adults using movement and art as the basis of didactic resources.",
        label: ["Front End", "Back End", "Database Administrator", "SEO", "Desginer", "CPanel", "Technical Support"]
    },
    {
        id: 3,
        start: 2021,
        end: 2024,
        workplace: "Dirección Nacional de Formación Docente",
        position: "Software Developer",
        description: "Front end development of a Teacher Portal for the entire national teaching profession. Support in the development of the back end, database administrator and academic registry. Management of teacher data and responses to information requests.",
        label: ["Front End", "Back End", "Database Administrator", "CPanel", "Technical Support"]
    }
];

export const projects : projectsType[] = [
    {
        id: 1,
        title: "Portal Docente del Ministerio de Educación de El Salvador",
        link: "https://formaciondocente.edu.sv",
        description: "Portal docente de El Salvador is a website that seeks to consolidate all the experiences and training that each teacher of the national teaching profession of El Salvador has had throughout his or her professional career. It has other important elements that I have not considered mentioning separately because it would be duplicated information. It has a space for self-managed training courses, an administration space where different roles, metrics and statistics of these trainings are assigned, as well as a portal for the different qualifications.",
        label: ["HTML","CSS","JavaScript","PHP","Laravel","SQL","MySQL","PHPMyAdmin","AppScript","Google WorkSpace","JSON"]
    },
    {
        id: 2,
        title: "Grupo Kreare",
        link: "https://grupokreare.com",
        description: "Kreare Group is an informative website (for the moment), which consolidates the information of the consulting firm that bears the same name of the website. It has an administration panel and Frameworks created from scratch. Focused on performance and adapted to the client's requests.",
        label: ["HTML","CSS","JavaScript","PHP","SQL","MySQL","PHPMyAdmin","JSON"]
    }
]