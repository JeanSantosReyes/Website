import { IHeaderInfo, IStudies } from '../interfaces';

export const header_info: IHeaderInfo = {
    title: 'Jean Santos Reyes',
    presentacion: 'Soy una persona responsable, respetuosa, honesta y de principios sólidos. Me esfuerzo constantemente para ofrecer lo mejor de mí, con el objetivo de alcanzar las metas que me propongo de manera efectiva y eficiente.'
}

export const studies: IStudies[] = [
    {
        formacion: 'ESTUDIOS PRIMARIOS',
        anio: '2001 - 2008',
        institucion: 'ESCUELA FISCAL MIXTA “JUAN LEON MERA”',
        color: '#9C27B0',
        icon: 'bi bi-mortarboard-fill',
    },
    {
        formacion: 'ESTUDIOS SECUNDARIOS',
        anio: '2009 - 2015',
        institucion: 'UNIDAD EDUCATIVA FISCAL “VEINTITRES DE OCTUBRE”',
        titulo: 'BACHILLER EN CIENCIAS',
        color: '#607D8B',
        icon: 'bi bi-mortarboard-fill',
    },
    {
        formacion: 'SUPERIOR',
        anio: '2016 - 2021',
        institucion: 'UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ',
        titulo: 'INGENIERO EN SISTEMAS',
        color: '#FF9800',
        icon: 'bi bi-mortarboard-fill',
    }
];