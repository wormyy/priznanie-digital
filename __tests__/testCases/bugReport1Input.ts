import { TaxFormUserInput } from '../../src/types/TaxFormUserInput'

export const bugReport1Input: TaxFormUserInput = {
  t1r10_prijmy: '5000',
  priloha3_r11_socialne: '100',
  priloha3_r13_zdravotne: '100',
  r031_priezvisko_a_meno: 'anon',
  r031_rodne_cislo: 'anon',
  r032_uplatnujem_na_partnera: true,
  partner_step: 4,
  partner_podmienky: {
    '1': true,
  },
  r032_partner_vlastne_prijmy: '3500',
  r032_partner_pocet_mesiacov: '12',
  r001_dic: 'anon',
  r003_nace: 'anon',
  r004_priezvisko: 'anon',
  r005_meno: 'anon',
  meno_priezvisko: 'anon',
  r007_ulica: 'anon',
  r008_cislo: 'anon',
  r009_psc: 'anon',
  r010_obec: 'anon',
  r011_stat: 'anon',
  employed: true,
  r038: '3248,3',
  r039: '435,22',
  hasChildren: true,
  children: [
    {
      id: 1,
      priezviskoMeno: 'anon',
      rodneCislo: '1607201167',
      kupelnaStarostlivost: true,
      wholeYear: true,
      monthFrom: '0',
      monthTo: '11',
    },
    {
      id: 2,
      priezviskoMeno: 'anon',
      rodneCislo: '1057201167',
      kupelnaStarostlivost: true,
      wholeYear: true,
      monthFrom: '0',
      monthTo: '11',
    },
  ],
  platil_prispevky_na_dochodok: false,
  r075_zaplatene_prispevky_na_dochodok: '',
  r037_pocetMesiacov: '',
  r037_zaplatene_uroky: '',
  XIIoddiel_uplatnujem2percenta: false,
  r142_ico: '',
  r142_obchMeno: '',
  r142_ulica: '',
  r142_cislo: '',
  r142_psc: '',
  r142_obec: '',
  XIIoddiel_suhlasZaslUdaje: false,
  r033_partner_kupele: true,
  r033_partner_kupele_uhrady: '50',
  kupele: true,
  r036_deti_kupele: '20',
  r076a_kupele_danovnik: '30',
  childrenInSpa: true,
  danovnikInSpa: true,
  iban: 'anon',
  datum: '',
  partner_spolocna_domacnost: true,
  partner_bonus_uplatneny: false,
  email: 'anon',
  ...{
    r001_dic: '233123123',
    r003_nace: '62010 - Počítačové programovanie',
    r007_ulica: 'Mierova',
    r008_cislo: '4',
    r009_psc: '82105',
    r010_obec: 'Bratislava 3',
    r011_stat: 'Slovensko',
    datum: '22.02.2020',
    r031_rodne_cislo: '9609226286',
    meno_priezvisko: 'Fake Name',
    r004_priezvisko: 'anon',
    r005_meno: 'anon',
  },
}
