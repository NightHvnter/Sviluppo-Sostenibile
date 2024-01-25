import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Goals {
  id: number;
  name: string;
  description: string;
  color: string;
  imgSrc: string;
}

export const goals: Goals[] = [
  {
    id: 1,
    name: 'Sconfiggere la povertà',
    description: 'Porre fine alla poverta, raggiungendo la sicurezza alimentare, la nutrizione migliorata e la ricerca di risorse per avere una vita sostenibile. La povertà va ben oltre alla mancanza di risorse per vivere in maniera sostenibile, tra le sue manifestazioni sono presenti la fame, la malnutrizione, il mancato accesso all\'istruzione ecc. Entro il 2030 ci si impegna ad avere una crescita economica inclusiva allo scopo di creare posti di lavoro ed uguaglianza.',
    color: 'rgba(229,35,61,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-01.jpg'
  },
  {
    id: 2,
    name: 'Sconfiggere la fame',
    description: 'Se gestite bene, l\'agricoltura, la silvicoltura e la pesca possono offrire cibo nutriente per tutti e generare redditi adeguati, sostenendo uno sviluppo rurale centrato sulle persone e proteggendo l’ambiente allo stesso tempo. Entro il 2030, ci si impegna a garantire un\'accesso sicuro all\'alimentazione e la fine della malnutrizione, inoltre ci si impegna a soddisfare le necessita\' di donne in gravidanza, adolescenti, donne in allattamento e persone anziane.',
    color: 'rgba(221,167,58,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-02.jpg'
  },
  {
    id: 3,
    name: 'Salute e benessere',
    color: 'rgba(76,161,70,1)',
    description: 'Garantire una vita sana e promuovere il benessere per tutti, a tutte le età.Sono stati compiuti notevoli progressi nell\'accesso all\'acqua pulita e all\'igiene, nella riduzione della malaria, tubercolosi, della poliomelite e della diffusione di HIV/AIDS, ma nonostante ciò è comunque necessario uno sforzo maggiore per sradicare un\'ampia varietà di malattie e per ridurre la mortalità infantile.',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-03.jpg'
  },
  {
    id: 4,
    name: 'Istituzione di qualità',
    description: 'Garantire un\'istruzione inclusiva, equa e di qualità, promuovendo opportunità di apprendimento per tutta la vita. Il livello di alfabetizzazione si è alzato notevolmente ma servono ulteriori sforzi per fare in modo che in ogni parte del mondo si possa avere accesso ad un\'istruzione che sia equa e di qualita\' per ragazze e ragazzi. Inoltre si vuole garantire l\'eliminazione delle disparità di genere e garantire un accesso equo a qualsiasi formazione professionale delle categorie protette.',
    color: 'rgba(199,33,47,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-04.jpg'
  },
  {
    id: 5,
    name: 'Parità di genere',
    description: 'Raggiungere la parità di genere e l\'empowerment di tutte le donne e le ragazze. Nonostante siano stati fatti dei progressi in fatto di parità di genere, molte donne vengono ancora discriminate e fatte vittime di violenza in ogni parte del mondo. La parità di genere non è solo un diritto umano fondamentale ma una condizione NECESSARIA per l\'avvio di un mondo prospero e privo di violenze. E\' dunque necessario garantire la fine di ogni genere di discriminazione e violenza su donne e bambine sia nella sfera pubblica che in quella privata e dunque adottare una politica sana per la realizzazione della parità di genere.',
    color: 'rgba(239,64,45,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-05.jpg'
  },
  {
    id: 6,
    name: 'Acqua pulita e servizi igenici sanitari',
    description: 'Garantire la disponibilità e la gestione sostenibile dell\'acqua e dei servizi igienico-sanitari per tutti. Avere acqua accessibile e pulita è un aspetto essenziale per la sopravvivenza nel nostro mondo, nonostante l\'acqua non ci manchi, purtroppo a causa di infrastrutture scadenti milioni di persone muoiono di malattia dovuta all\'approvvigionamento di acqua, servizi sanitari ed igienici scadenti. L\'obiettivo principale sarà quello di garantire l\'accesso sicuro ed economico all\'acqua potabile ed ottenere servizi igienici e sanitari adeguati.',
    color: 'rgba(39,191,230,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-06.jpg'
  },
  {
    id: 7,
    name: 'Energia pulita e accessibile',
    description: 'L\'energia è un elemento fondamentale per tutte le sfide e le opportunità più importanti che il mondo deve affrontare e ha il compito di trasformare l\'economia, il pianeta e la vita. Dunque si deve garantire un accesso a servizi energetici che siano convenienti, affidabili e moderni e di conseguenza migliorarne l\'efficenza.',
    color: 'rgba(251,196,18,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-07.jpg'
  },
  {
    id: 8,
    name: 'Lavoro dignitoso e crescita economica',
    description: 'Promuovere una crescita economica sostenibile, inclusiva e sostenere il pieno impiego e il lavoro dignitoso per tutti. In molti luoghi, avere un lavoro non garantisce la possibilità di sottrarsi alla povertà. Questo progresso lento e disuguale richiede di riconsiderare e riorganizzare le nostre politiche economiche e sociali tese all\'eliminazione della povertà. Una prolungata mancanza di opportunità di lavoro dignitose, investimenti insufficienti e sottoconsumo portano a un\'erosione del contratto sociale di base a fondamento delle società democratiche. Dunque bisogna raggiungere standard di produttività molto più alti attraverso la diversificazione il progresso tecnologico e l\'innovazione.',
    color: 'rgba(163,28,68,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-08.jpg'
  },
  {
    id: 9,
    name: 'Imprese innovazione e infrastrutture',
    description: 'Gli investimenti in infrastrutture sono cruciali per realizzare lo sviluppo sostenibile e per rafforzare le capacità delle comunità in molti paesi. Si riconosce ormai da tempo che la crescita della produttività e dei redditi, così come migliori risultati nella sanità e nell\'istruzione, richiedono investimenti nelle infrastrutture. Dunque bisogna costruire infrastrutture resilienti, promuovere l\'industrializzazione sostenibile e incoraggiare l\'innovazione.',
    color: 'rgba(242,106,46,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-09.jpg'
  },
  {
    id: 10,
    name: 'Ridurre le disuguaglianze',
    description: 'La comunità internazionale ha fatto progressi significativi per sottrarre le persone alla povertà. Tuttavia, l\'ineguaglianza persiste e rimangono grandi disparità di accesso alla sanità, all\'educazione e ad altri servizi. Inoltre, mentre la disparità di reddito tra i diversi paesi sembrerebbe essersi ridotta, la disparità all\'interno di un medesimo paese è aumentata. Ridurre le disuguaglianze all\'interno e tra i paesi.',
    color: 'rgba(224,20,131,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-10.jpg'
  },
  {
    id: 11,
    name: 'Città e comunità sostenibili',
    description: 'Le città sono centri per nuove idee, per il commercio, la cultura, la scienza, la produttività, lo sviluppo sociale e molto altro. Tuttavia, persistono molte sfide per mantenere i centri urbani come luoghi di lavoro e prosperità, e che allo stesso tempo non danneggino il territorio e le risorse. Dunque si dovrà rendere le città e gli insediamenti umani inclusivi, sicuri, resilienti e sostenibili.',
    color: 'rgba(248,157,42,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-11.jpg'
  },
  {
    id: 12,
    name: 'Consumo e produzione responsabili',
    description: 'Per consumo e produzione sostenibili si intende la promozione dell’efficienza delle risorse e dell’energia, di infrastrutture sostenibili, così come la garanzia dell’accesso ai servizi di base, a lavori dignitosi e rispettosi dell’ambiente e a una migliore qualità di vita per tutti. Il consumo e la produzione sostenibile puntano a “fare di più e meglio con meno”, aumentando i benefici in termini di benessere tratti dalle attività economiche, attraverso la riduzione dell\'impiego di risorse, del degrado e dell\'inquinamento nell\'intero ciclo produttivo, migliorando così la qualità della vita. Per garantire tutto questo si dovranno realizzare modelli di produzione e consumo sostenibili.',
    color: 'rgba(191,141,44,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-12.jpg'
  },
  {
    id: 13,
    name: 'Lotta contro il cambiamento climatico',
    description: 'Il cambiamento climatico interessa i paesi di tutti i continenti e sta sconvolgendo le economie nazionali, con costi alti per persone, comunità e paesi che saranno ancora più gravi un domani. Le persone stanno sperimentando gli impatti significativi del cambiamento climatico tra l\'innalzamento del livello del mare e altri fenomeni meteorologici ancora più estremi. Bisognerà adottare misure urgenti per combattere il cambiamento climatico e i suoi impatti su noi persone e sul pianeta stesso.',
    color: 'rgba(64,127,70,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-13.jpg'
  },
  {
    id: 14,
    name: 'La vita sott\'acqua',
    description: 'Gli oceani del mondo influenzano i sistemi globali che rendono la Terra un luogo vivibile per il genere umano. Un\'attenta gestione di questa fondamentale risorsa globale è alla base di un futuro sostenibile.  Dunque dovremo conservare e utilizzare in modo sostenibile gli oceani, i mari e le risorse marine per uno sviluppo sostenibile e in particolar modo prevenire e ridurre in modo significativo ogni forma di inquinamento marino, in particolar modo quello derivante da attività esercitate sulla terraferma ',
    color: 'rgba(31,151,212,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-14.jpg'
  },
  {
    id: 15,
    name: 'La vita sulla terra',
    description: 'Le foreste coprono una buona parte della superficie terrestre e, oltre a offrire cibo sicuro e riparo, esse sono essenziali per il contrasto al cambiamento climatico e la protezione della biodiversità. La deforestazione e la desertificazione pongono sfide considerevoli in termini di sviluppo sostenibile, e hanno condizionato le vite e i mezzi di sostentamento di milioni di persone. Dunque per preservare la vita terrena bisognerà assolutamente proteggere, ripristinare e promuovere un uso sostenibile degli ecosistemi terrestri.',
    color: 'rgba(89,186,71,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-15.jpg'
  },
  {
    id: 16,
    name: 'Pace, giustizia e istituzioni solide',
    description: 'Questo obiettivo in particolare è dedicato alla promozione di società pacifiche ed inclusive ai fini dello sviluppo sostenibile, e si propone inoltre di fornire l’accesso universale alla giustizia, e a costruire istituzioni responsabili ed efficaci a tutti i livelli. Dunque bisognerà ridurre ovunque e in maniera significativa tutte le forme di violenza e il tasso di mortalità ad esse correlato, porre fine all’abuso, allo sfruttamento, al traffico di bambini e a tutte le forme di violenza e tortura nei loro confronti e promuovere lo stato di diritto a livello nazionale e internazionale e garantire un pari accesso alla giustizia per tutti.',
    color: 'rgba(19,106,159,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-16.jpg'
  },
  {
    id: 17,
    name: 'Partnership per gli obiettivi',
    description: 'È necessaria un\'azione urgente per mobilitare, reindirizzare e liberare il potere trasformativo di risorse private per realizzare gli Obiettivi di questa agenda. Investimenti a lungo termine sono necessari nei settori chiave, soprattutto nei Paesi in via di sviluppo. Bisognerà dunque rinforzare i mezzi di implementazione e rivitalizzare il partenariato globale per lo sviluppo sostenibile.',
    color: 'rgba(20,73,107,1)',
    imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-17.jpg'
  }
]

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  choosenGoal: number = -1;

  toHome() {
    this.router.navigateByUrl('home');
  }

  toGit(){
    window.open('https://github.com/NightHvnter/Sviluppo-Sostenibile/');
  }

  toAgenda2030() {
    this.router.navigateByUrl('agenda-2030');
  }

  toGoal(goal: string, id: number) {
    sessionStorage.setItem('currentGoal', (id-1).toString())
    this.router.navigateByUrl(`agenda-2030/${goal}`);
  }

  toSources() {
    this.router.navigateByUrl('sources');
  }

  constructor(private router: Router) { }
}
