export interface ISocial {
    social_network: string;
    url: string;
    icon: string;
}

export interface ISkills {
    title: string;
    icon: string;
    cont: Cont[];
}

export interface Cont {
    title: string;
    body: string[];
}

export interface IHeaderInfo {
    title: string;
    presentacion: string;
}

export interface IStudies {
    formacion: string;
    anio: string;
    institucion: string;
    titulo?: string;
    color: string;
    icon: string;
}

export interface IExperience {
    lugar: string;
    tareas: string;
    color: string;
    icon: string;
}

export interface IProject {
    titulo: string;
    img: string;
    enlace: string;
}