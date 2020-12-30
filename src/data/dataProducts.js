import panDeMolde from '../assets/img/PanDeMolde.jpg';
import panBaguette from '../assets/img/baguette.jpg';
import melonBread from '../assets/img/MelonBread.jpg';
import buniuelos from "../assets/img/buniuelos.jpg";
import medialunas from "../assets/img/medialunas.jpg";
import donas from "../assets/img/donas.jpg";
import tortaPrimavera from "../assets/img/TortaPrimavera.jpg";
import tortaChocolate from "../assets/img/TortaDeChocolate.jpg";
import milHojasLimon from "../assets/img/MilHojasDeLimon.jpg";
import panDulce from "../assets/img/PanDulce.jpg";
import budin from "../assets/img/Budin.jpg";


/*Por el momento no voy a tocar mucho el componente donde tengo los demás productos
por cuestiones de tiempo, pero la idea sería que todos los productos vayan acá y que
contengan una propiedad booleana que indique si está en oferta o no. Posteriormente
pienso subirlo a Firebase*/

export const products = [
    {
        itemID: 1,
        category: 'panaderia',
        bread: panDeMolde,
        breadName: 'Pan de molde',
        price: 200,
        negativeVotes: 30,
        positiveVotes: 90,
        stock: 7,
        sale: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 2,
        category: 'panaderia',
        bread: panBaguette,
        breadName: 'Pan baguette',
        price: 140,
        negativeVotes: 50,
        positiveVotes: 100,
        stock: 5,
        sale: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 3,
        category: 'panaderia',
        bread: melonBread,
        breadName: 'Melon pan',
        price: 110,
        negativeVotes: 10,
        positiveVotes: 100,
        stock: 10,
        sale: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 4,
        category: 'panaderia',
        bread: buniuelos,
        breadName: 'Buñuelos',
        price: 150,
        negativeVotes: 18,
        positiveVotes: 60,
        stock: 10,
        sale:false,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    }, 
    {
        itemID: 5,
        category: 'panaderia',
        bread: medialunas,
        breadName: 'Medialunas',
        price: 300,
        negativeVotes: 25,
        positiveVotes: 75,
        stock: 12,
        sale: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    }, 
    {
        itemID: 6,
        category: 'panaderia',
        bread: donas,
        breadName: 'Donas',
        price: 180,
        negativeVotes: 10,
        positiveVotes: 75,
        stock: 12,
        sale: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 7,
        category: 'pasteleria',
        bread: tortaPrimavera,
        breadName: 'Torta Primavera',
        price: 780,
        negativeVotes: 20,
        positiveVotes: 115,
        stock: 12,
        sale: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 8,
        category: 'pasteleria',
        bread: tortaChocolate,
        breadName: 'Torta de Chocolate',
        price: 890,
        negativeVotes: 5,
        positiveVotes: 90,
        stock: 12,
        sale: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 9,
        category: 'pasteleria',
        bread: milHojasLimon,
        breadName: 'Torta Mil Hojas de Limón',
        price: 850,
        negativeVotes: 20,
        positiveVotes: 95,
        stock: 12,
        sale: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 10,
        category: 'navidad',
        bread: panDulce,
        breadName: 'Pan dulce',
        price: 250,
        negativeVotes: 5,
        positiveVotes: 95,
        stock: 12,
        sale: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },
    {
        itemID: 11,
        category: 'navidad',
        bread: budin,
        breadName: 'Budín',
        price: 75,
        negativeVotes: 22,
        positiveVotes: 75,
        stock: 12,
        sale: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    },  
];