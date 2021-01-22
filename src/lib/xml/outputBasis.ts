import { OutputJson } from '../../types/OutputJson'

const ZDANOVACIE_OBDOBIE__ROK = '2020'

const sampleSchema: OutputJson = {
  dokument: {
    hlavicka: {
      dic: '',
      datumNarodenia: '',
      typDP: {
        rdp: '1',
        odp: '0',
        ddp: '0',
      },
      zdanovacieObdobie: {
        rok: ZDANOVACIE_OBDOBIE__ROK,
        datumDDP: '',
      },
      skNace: {
        k1: '',
        k2: '',
        k3: '',
        cinnost: '',
      },
      priezvisko: '',
      meno: '',
      titul: '',
      titulZa: '',
      adresaTrvPobytu: {
        ulica: '',
        cislo: '',
        psc: '',
        obec: '',
        stat: '',
      },
      nerezident: '0',
      prepojeniePar2: '0',
      adresaObvPobytu: {
        ulica: '',
        cislo: '',
        psc: '',
        obec: '',
      },
      zastupca: {
        priezvisko: '',
        meno: '',
        titul: '',
        titulZa: '',
        rodneCislo: '',
        ulica: '',
        cislo: '',
        psc: '',
        obec: '',
        stat: '',
        tel: '',
        email: '',
      },
    },
    telo: {
      r29: '0',
      r30: '',
      r31: {
        priezviskoMeno: '',
        rodneCislo: '',
      },
      r32: {
        uplatnujemNCZDNaManzela: '0',
        vlastnePrijmy: '',
        pocetMesiacov: '',
      },
      r33: {
        uplatNCZDNaKupelStarostlivost: '0',
        preukazZaplatUhrady: '',
      },
      r34: {
        dieta: [
          {
            priezviskoMeno: '',
            rodneCislo: '',
            kupelnaStarostlivost: '0',
            m00: '0',
            m01: '0',
            m02: '0',
            m03: '0',
            m04: '0',
            m05: '0',
            m06: '0',
            m07: '0',
            m08: '0',
            m09: '0',
            m10: '0',
            m11: '0',
            m12: '0',
          },
          {
            priezviskoMeno: '',
            rodneCislo: '',
            kupelnaStarostlivost: '0',
            m00: '0',
            m01: '0',
            m02: '0',
            m03: '0',
            m04: '0',
            m05: '0',
            m06: '0',
            m07: '0',
            m08: '0',
            m09: '0',
            m10: '0',
            m11: '0',
            m12: '0',
          },
          {
            priezviskoMeno: '',
            rodneCislo: '',
            kupelnaStarostlivost: '0',
            m00: '0',
            m01: '0',
            m02: '0',
            m03: '0',
            m04: '0',
            m05: '0',
            m06: '0',
            m07: '0',
            m08: '0',
            m09: '0',
            m10: '0',
            m11: '0',
            m12: '0',
          },
          {
            priezviskoMeno: '',
            rodneCislo: '',
            kupelnaStarostlivost: '0',
            m00: '0',
            m01: '0',
            m02: '0',
            m03: '0',
            m04: '0',
            m05: '0',
            m06: '0',
            m07: '0',
            m08: '0',
            m09: '0',
            m10: '0',
            m11: '0',
            m12: '0',
          },
        ],
      },
      r35udajeDalsieDeti: '0',
      r36: '',
      r37: {
        uplatDanBonusZaplatUroky: '0',
        zaplateneUroky: '',
        pocetMesiacov: '',
      },
      r38: '',
      r38a: '',
      r39: '',
      r40: '',
      tabulka1: {
        t1r1: {
          s1: '',
          s2: '',
        },
        t1r2: {
          s1: '',
          s2: '',
        },
        t1r3: {
          s1: '',
          s2: '',
        },
        t1r4: {
          s1: '',
          s2: '',
        },
        t1r5: {
          s1: '',
          s2: '',
        },
        t1r6: {
          s1: '',
          s2: '',
        },
        t1r7: {
          s1: '',
          s2: '',
        },
        t1r8: {
          s1: '',
          s2: '',
        },
        t1r9: {
          s1: '',
          s2: '',
        },
        t1r10: {
          s1: '',
          s2: '',
        },
        t1r11: {
          s1: '',
          s2: '',
        },
        t1r12: {
          s1: '',
          s2: '',
        },
        t1r13: {
          s1: '',
          s2: '',
        },
      },
      vydavkyPar6ods11_ods1a2: '0',
      vydavkyPar6ods11_ods3: '0',
      vydavkyPar6ods11_ods4: '0',
      vydavkyPar6ods10_ods1a2: '1', // checked by default as our for supports only flat expenses
      vydavkyPar6ods10_ods4: '0',
      vydavkyPoistPar6ods11_ods1a2: '',
      uplatnujemPar17ods17_ods1a2: '0',
      uplatnujemPar17ods17_ods3a4: '0',
      ukoncujemUplatnovaniePar17ods17_ods1a2: '0',
      ukoncujemUplatnovaniePar17ods17_ods3a4: '0',
      tabulka1a: {
        t1r1: {
          s1: '',
          s2: '',
        },
        t1r2: {
          s1: '',
          s2: '',
        },
        t1r3: {
          s1: '',
          s2: '',
        },
        t1r4: {
          s1: '',
          s2: '',
        },
        t1r5: {
          s1: '',
          s2: '',
        },
      },
      tabulka1b: {
        t1r1: {
          s1: '',
          s2: '',
        },
        t1r2: {
          s1: '',
          s2: '',
        },
      },
      r41: '',
      r42: '',
      r43: '',
      r44: '',
      r45: '',
      r46: '',
      r47: '',
      r48: '',
      r49: {
        rok: '2016',
        udaje: {
          r02: '',
          r03: '',
          r04: '',
          r05: '',
        },
      },
      r50: {
        rok: '2017',
        udaje: {
          r02: '',
          r03: '',
          r04: '',
          r05: '',
        },
      },
      r51: {
        rok: '2018',
        udaje: {
          r02: '',
          r03: '',
          r04: '',
          r05: '',
        },
      },
      r52: {
        rok: '2019',
        udaje: {
          r02: '',
          r03: '',
          r04: '',
          r05: '',
        },
      },
      r53: '',
      // r54: '',
      r55: '',
      r56: '',
      r57: '',
      r58: '',
      r59: '',
      r60: '',
      r61: '',
      r62: '',
      r63: '',
      r64: '',
      r65: '',
      tabulka2: {
        t2r1: {
          s1: '',
          s2: '',
        },
        t2r2: {
          s1: '',
          s2: '',
        },
        t2r3: {
          s1: '',
          s2: '',
        },
        t2r4: {
          s1: '',
          s2: '',
        },
        t2r5: {
          s1: '',
          s2: '',
        },
        t2r6: {
          s1: '',
          s2: '',
        },
        t2r7: {
          s1: '',
          s2: '',
        },
        t2r8: {
          s1: '',
          s2: '',
        },
        t2r9: {
          s1: '',
          s2: '',
        },
        t2r10: {
          s1: '',
          s2: '',
        },
        t2r11: {
          s1: '',
          s2: '',
        },
        t2r12: { s1: '' },
      },
      r66: '',
      r67: '',
      r68: '',
      tabulka3: {
        t3r1: {
          s1: '',
          s2: '',
        },
        t3r2: {
          s1: '',
          s2: '',
        },
        t3r3: {
          s1: '',
          s2: '',
        },
        t3r4: {
          s1: '',
          s2: '',
        },
        t3r5: {
          s1: '',
          s2: '',
        },
        t3r6: {
          s1: '',
          s2: '',
        },
        t3r7: {
          s1: '',
          s2: '',
        },
        t3r8: {
          s1: '',
          s2: '',
        },
        t3r9: {
          s1: '',
          s2: '',
        },
        t3r10: {
          s1: '',
          s2: '',
        },
        t3r11: {
          s1: '',
          s2: '',
        },
        t3r12: {
          s1: '',
          s2: '',
        },
        t3r13: {
          s1: '',
          s2: '',
        },
        t3r14: {
          s1: '',
          s2: '',
        },
        t3r15: {
          s1: '',
          s2: '',
        },
        t3r16: {
          s1: '',
          s2: '',
        },
        t3r17: {
          s1: '',
          s2: '',
        },
        t3r18: { s1: '' },
        t3r19: {
          s1: '',
          s2: '',
        },
      },
      r69: '',
      r70: '',
      r71: '',
      r72: '',
      r73: '',
      r74: '',
      r75: '',
      r76: '',
      r76a: '',
      r76b: '',
      r77: '',
      r78: '',
      r79: '',
      r80: '',
      r81: '',
      r82: '',
      r83: '',
      r84: '',
      r85: '',
      r86: '',
      r87: '',
      r88: '',
      r89: '',
      r90: '',
      r91: '',
      r92: '',
      r93: '',
      r94: '',
      r95: '',
      r96: '',
      r97: '',
      r98: '',
      r99: '',
      r100: '',
      r101: '',
      r102: '',
      r103: '',
      r104: '',
      r105: '',
      r106: '',
      r107: '',
      r108: '',
      r109: '',
      r110: '',
      r111: '',
      r112: '',
      r113: '',
      r114: '',
      r115: '',
      r116: '',
      r117: '',
      r118: '',
      r119: '',
      r120: '',
      r121: '',
      r122: '',
      r123: '',
      r124: '',
      r125: '',
      r126: '',
      r127: '',
      r128: '',
      r129: '',
      r130: '',
      r131: '',
      r132: '',
      r133: '',
      r134: '',
      r135: '',
      r136: '',
      r137: '',
      r138: '',
      r139: '',
      r140: '',
      r141: '',
      r142: '',
      r143: '',
      r144: '',
      r145: '',
      r146: '',
      r147: '',
      r148: '',
      r149: '0',
      r150: '',
      neuplatnujem: '0',
      splnam3per: '0',
      r151: '',
      r152: {
        ico: '',
        pravnaForma: '',
        obchMeno: {
          riadok: ['', ''],
        },
        ulica: '',
        cislo: '',
        psc: '',
        obec: '',
        suhlasZaslUdaje: '0',
      },
      osobitneZaznamy: {
        uvadza: '0',
        udajeOprijmoch: [
          {
            kodStatu: '',
            druhPrimuPar: '',
            druhPrimuOds: '',
            druhPrimuPis: '',
            prijmy: '',
            vydavky: '',
            zTohoVydavky: '',
          },
          {
            kodStatu: '',
            druhPrimuPar: '',
            druhPrimuOds: '',
            druhPrimuPis: '',
            prijmy: '',
            vydavky: '',
            zTohoVydavky: '',
          },
          {
            kodStatu: '',
            druhPrimuPar: '',
            druhPrimuOds: '',
            druhPrimuPis: '',
            prijmy: '',
            vydavky: '',
            zTohoVydavky: '',
          },
          {
            kodStatu: '',
            druhPrimuPar: '',
            druhPrimuOds: '',
            druhPrimuPis: '',
            prijmy: '',
            vydavky: '',
            zTohoVydavky: '',
          },
          {
            kodStatu: '',
            druhPrimuPar: '',
            druhPrimuOds: '',
            druhPrimuPis: '',
            prijmy: '',
            vydavky: '',
            zTohoVydavky: '',
          },
          {
            kodStatu: '',
            druhPrimuPar: '',
            druhPrimuOds: '',
            druhPrimuPis: '',
            prijmy: '',
            vydavky: '',
            zTohoVydavky: '',
          },
        ],
        rekreaciaPar19ods2: '0',
        rekreaciaSuma: '',
        zaznamy: '',
      },
      r153: '3',
      datumVyhlasenia: '',
      danovyPreplatokBonus: {
        vyplatitDanovyBonus: '0',
        vyplatitDanovyBonusUroky: '0',
        vratitDanPreplatok: '0',
        sposobPlatby: {
          poukazka: '0',
          ucet: '0',
          ucetZahranicie: '0',
        },
        bankovyUcet: { IBAN: '' },
        datum: '',
      },
      prilPodielyNaZisku: {
        pr1: '',
        pr2: '',
        pr3: '',
        pr4: {
          s1: '',
          s2: '',
        },
        pr5: {
          s1: '',
          s2: '',
        },
        pr6: {
          s1: '',
          s2: '',
        },
        pr7: '',
        pr8: '7',
        pr9: '',
        pr10: '',
        pr11: '',
        pr12: '',
        pr13: '',
        pr14: '',
        pr15: '',
        pr16: '',
        pr17: '',
        pr18: '',
        pr19: '',
        pr20: '',
        pr21: '',
        pr22: {
          s1: '',
          s2: '',
        },
        pr23: {
          s1: '',
          s2: '',
        },
        pr24: {
          s1: '',
          s2: '',
        },
        pr25: '',
        pr26: '35',
        pr27: '',
        pr28: '',
      },
      socZdravPoistenie: {
        pr1: {
          s1: '',
          s2: '',
        },
        pr2: '',
        pr3: '',
        pr4: '',
        pr5: '',
        pr6: '',
        pr7: '',
        pr8: '',
        pr9: '',
        pr10: '',
        pr11: '',
        pr12: '',
        pr13: '',
        pr14: '',
        pr15: '',
        priPrimoch6ods1a2VediemPU: '0',
        datum: '',
      },
    },
  },
}

export default sampleSchema
