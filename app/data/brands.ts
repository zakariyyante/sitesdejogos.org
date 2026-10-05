export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  url: string; // This will hold the base64 encoded URL
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "nossa-aposta-portugal",
    name: "Nossa Aposta",
    logo: "/images/nossaposta.png",
    rating: 9.9,
    description: "Máquinas Clássicas. Descubra a melhor seleção de slots clássicas e uma experiência de jogo autêntica em Portugal.",
    url: "aHR0cHM6Ly93d3cubm9zc2FhcG9zdGEucHQvYm9hcy12aW5kYXMtY2FtcGFuaGE/UEFSPTUzMmdhNDkyNGNpZHBpZE5vc3NhQXBvc3RhLWFmZmlkMjY3NA==",
    isMobile: true,
    votes: 2450,
  },
  {
    id: "bwin-portugal",
    name: "Bwin",
    logo: "/images/bwin.png",
    rating: 9.8,
    description: "Torneios de Máquinas. Participe em competições exclusivas, ganhe prémios e suba no ranking com as melhores máquinas.",
    url: "aHR0cHM6Ly9tZWRpYXNlcnZlci5lbnRhaW5wYXJ0bmVycy5jb20vcmVuZGVyQmFubmVyLmRvP3pvbmVJZD0yMTU5MTA2JmJ0YWc9QndpbiZ0cGRlaD0=",
    isMobile: true,
    votes: 1820,
  },
];
