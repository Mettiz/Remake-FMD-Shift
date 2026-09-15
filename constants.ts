/**
 * ShiftFlow System Constants - v1.0.2 (Synced with Live Firestore)
 */
import { ShiftEntry, Personnel } from "./types";

export const OFFICIAL_HOLIDAYS = [
  "1404/01/01",
  "1404/01/02",
  "1404/01/03",
  "1404/01/04",
  "1404/01/11",
  "1404/01/12",
  "1404/01/13",
  "1404/02/04",
  "1404/03/14",
  "1404/03/15",
  "1404/03/16",
  "1404/03/24",
  "1404/04/14",
  "1404/04/15",
  "1404/05/23",
  "1404/05/31",
  "1404/06/02",
  "1404/06/10",
  "1404/06/19",
  "1404/09/03",
  "1404/10/13",
  "1404/10/27",
  "1404/11/15",
  "1404/11/22",
  "1404/12/20",
  "1404/12/29"
];

export const INITIAL_PERSONNEL: Personnel[] = [
  {
    "color": "#e11d48",
    "roles": [
      "Shift"
    ],
    "isActive": true,
    "name": "مهندس سلیمان فلاح"
  },
  {
    "color": "#f97316",
    "roles": [
      "Shift"
    ],
    "isActive": true,
    "name": "مهندس دهقان"
  },
  {
    "name": "مهندس سالاروند",
    "isActive": true,
    "roles": [
      "Shift"
    ],
    "color": "#7c3aed"
  },
  {
    "color": "#059669",
    "roles": [
      "Shift"
    ],
    "isActive": true,
    "name": "مهندس سپهر آرا"
  },
  {
    "color": "#d946ef",
    "roles": [
      "Shift"
    ],
    "name": "مهندس حیدری",
    "isActive": true
  },
  {
    "isActive": true,
    "name": "آقای رحیمی",
    "color": "#d97706",
    "roles": [
      "Shift"
    ]
  },
  {
    "name": "مهندس لسانی",
    "isActive": true,
    "color": "#00c23d",
    "roles": [
      "Supervisor"
    ]
  }
];

export const SCHEDULE_DATA: ShiftEntry[] = [
  {
    "dayName": "شنبه",
    "id": 1,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "date": "1404/09/01",
    "isHoliday": false
  },
  {
    "dayShiftPerson": "مهندس دهقان",
    "dayName": "یک‌شنبه",
    "id": 2,
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "date": "1404/09/02"
  },
  {
    "isHoliday": true,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "date": "1404/09/03",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس سالاروند",
    "id": 3,
    "dayName": "دوشنبه"
  },
  {
    "dayName": "سه‌شنبه",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی",
    "id": 4,
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "date": "1404/09/04"
  },
  {
    "dayName": "چهارشنبه",
    "date": "1404/09/05",
    "id": 5,
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "nightShiftPerson": "مهندس دهقان",
    "dayShiftPerson": "مهندس سالاروند"
  },
  {
    "date": "1404/09/06",
    "id": 6,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false,
    "dayName": "پنج‌شنبه",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "id": 7,
    "date": "1404/09/07",
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "جمعه",
    "isHoliday": true,
    "dayShiftPerson": "مهندس دهقان",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "onCallPerson": "مهندس لسانی",
    "date": "1404/09/08",
    "nightShiftPerson": "مهندس سالاروند",
    "isHoliday": false,
    "id": 8,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "شنبه"
  },
  {
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "id": 9,
    "dayName": "یک‌شنبه",
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "date": "1404/09/09",
    "dayShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "nightShiftPerson": "مهندس دهقان",
    "dayShiftPerson": "مهندس سالاروند",
    "id": 10,
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "date": "1404/09/10",
    "dayName": "دوشنبه"
  },
  {
    "onCallPerson": "مهندس لسانی",
    "dayName": "سه‌شنبه",
    "date": "1404/09/11",
    "id": 11,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false
  },
  {
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayShiftPerson": "مهندس دهقان",
    "date": "1404/09/12",
    "id": 12,
    "dayName": "چهارشنبه",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "isHoliday": false,
    "id": 13,
    "nightShiftPerson": "مهندس سالاروند",
    "date": "1404/09/13",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "پنج‌شنبه",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "date": "1404/09/14",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": true,
    "onCallPerson": "مهندس لسانی",
    "id": 14,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "جمعه"
  },
  {
    "dayName": "شنبه",
    "date": "1404/09/15",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس دهقان",
    "isHoliday": false,
    "id": 15,
    "dayShiftPerson": "مهندس سالاروند"
  },
  {
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "id": 16,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی",
    "date": "1404/09/16",
    "dayName": "یک‌شنبه"
  },
  {
    "id": 17,
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayShiftPerson": "مهندس دهقان",
    "dayName": "دوشنبه",
    "onCallPerson": "مهندس لسانی",
    "date": "1404/09/17"
  },
  {
    "dayName": "سه‌شنبه",
    "nightShiftPerson": "مهندس سالاروند",
    "date": "1404/09/18",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "id": 18,
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false
  },
  {
    "dayName": "چهارشنبه",
    "id": 19,
    "isHoliday": false,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی",
    "date": "1404/09/19",
    "nightShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "date": "1404/09/20",
    "dayName": "پنج‌شنبه",
    "id": 20,
    "isHoliday": false,
    "dayShiftPerson": "مهندس سالاروند",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس دهقان"
  },
  {
    "dayName": "جمعه",
    "isHoliday": true,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "date": "1404/09/21",
    "id": 21,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "date": "1404/09/22",
    "dayName": "شنبه",
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "id": 22,
    "dayShiftPerson": "مهندس دهقان"
  },
  {
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "id": 23,
    "nightShiftPerson": "مهندس سالاروند",
    "date": "1404/09/23",
    "dayName": "یک‌شنبه"
  },
  {
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "date": "1404/09/24",
    "onCallPerson": "مهندس لسانی",
    "id": 24,
    "dayName": "دوشنبه",
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false
  },
  {
    "dayShiftPerson": "مهندس سالاروند",
    "nightShiftPerson": "مهندس دهقان",
    "date": "1404/09/25",
    "id": 25,
    "onCallPerson": "مهندس لسانی",
    "dayName": "سه‌شنبه",
    "isHoliday": false
  },
  {
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "id": 26,
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی",
    "date": "1404/09/26",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "چهارشنبه"
  },
  {
    "date": "1404/09/27",
    "dayShiftPerson": "مهندس دهقان",
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "id": 27,
    "dayName": "پنج‌شنبه",
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی"
  },
  {
    "id": 28,
    "isHoliday": true,
    "onCallPerson": "مهندس لسانی",
    "date": "1404/09/28",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "جمعه",
    "nightShiftPerson": "مهندس سالاروند"
  },
  {
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی",
    "dayName": "شنبه",
    "date": "1404/09/29",
    "id": 29,
    "nightShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "date": "1404/09/30",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس دهقان",
    "isHoliday": false,
    "dayShiftPerson": "مهندس سالاروند",
    "dayName": "یک‌شنبه",
    "id": 30
  },
  {
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "یک‌شنبه",
    "id": 101,
    "onCallPerson": "مهندس لسانی",
    "date": "1405/06/01",
    "isHoliday": false
  },
  {
    "dayShiftPerson": "مهندس دهقان",
    "isHoliday": true,
    "date": "1405/06/02",
    "onCallPerson": "مهندس لسانی",
    "id": 102,
    "dayName": "دوشنبه",
    "nightShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "dayName": "سه‌شنبه",
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی",
    "dayShiftPerson": "مهندس سالاروند",
    "id": 103,
    "date": "1405/06/03"
  },
  {
    "isHoliday": false,
    "nightShiftPerson": "مهندس دهقان",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی",
    "id": 104,
    "date": "1405/06/04",
    "dayName": "چهارشنبه"
  },
  {
    "dayName": "پنج‌شنبه",
    "nightShiftPerson": "مهندس سالاروند",
    "date": "1405/06/05",
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "id": 105
  },
  {
    "onCallPerson": "مهندس لسانی",
    "id": 106,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "date": "1405/06/06",
    "dayName": "جمعه",
    "isHoliday": true
  },
  {
    "date": "1405/06/07",
    "id": 107,
    "dayShiftPerson": "مهندس دهقان",
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "dayName": "شنبه",
    "nightShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false,
    "id": 108,
    "date": "1405/06/08",
    "dayShiftPerson": "مهندس سالاروند",
    "dayName": "یک‌شنبه",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "dayName": "دوشنبه",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس دهقان",
    "isHoliday": false,
    "date": "1405/06/09",
    "id": 109,
    "dayShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "nightShiftPerson": "مهندس سالاروند",
    "date": "1405/06/10",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "id": 110,
    "dayName": "سه‌شنبه",
    "isHoliday": true,
    "onCallPerson": "مهندس لسانی"
  },
  {
    "date": "1405/06/11",
    "onCallPerson": "مهندس لسانی",
    "id": 111,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "چهارشنبه",
    "isHoliday": false
  },
  {
    "dayName": "پنج‌شنبه",
    "dayShiftPerson": "مهندس دهقان",
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": false,
    "date": "1405/06/12",
    "onCallPerson": "مهندس لسانی",
    "id": 112
  },
  {
    "date": "1405/06/13",
    "id": 113,
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "isHoliday": true,
    "dayName": "جمعه",
    "dayShiftPerson": "مهندس سالاروند",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "isHoliday": false,
    "date": "1405/06/14",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "nightShiftPerson": "مهندس دهقان",
    "onCallPerson": "مهندس لسانی",
    "id": 114,
    "dayName": "شنبه"
  },
  {
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "onCallPerson": "مهندس لسانی",
    "date": "1405/06/15",
    "isHoliday": false,
    "id": 115,
    "nightShiftPerson": "مهندس سالاروند",
    "dayName": "یک‌شنبه"
  },
  {
    "id": 116,
    "isHoliday": false,
    "dayShiftPerson": "مهندس سپهر آرا",
    "dayName": "دوشنبه",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس سالاروند",
    "date": "1405/06/16"
  },
  {
    "isHoliday": false,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "nightShiftPerson": "مهندس دهقان",
    "id": 117,
    "dayName": "سه‌شنبه",
    "date": "1405/06/17",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "dayName": "چهارشنبه",
    "onCallPerson": "مهندس لسانی",
    "dayShiftPerson": "مهندس حیدری",
    "date": "1405/06/18",
    "id": 118,
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "dayShiftPerson": "مهندس دهقان",
    "isHoliday": true,
    "id": 119,
    "date": "1405/06/19",
    "dayName": "پنج‌شنبه",
    "nightShiftPerson": "مهندس سپهر آرا",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "nightShiftPerson": "آقای رحیمی",
    "dayName": "جمعه",
    "id": 120,
    "isHoliday": true,
    "dayShiftPerson": "مهندس سالاروند",
    "onCallPerson": "مهندس لسانی",
    "date": "1405/06/20"
  },
  {
    "date": "1405/06/21",
    "isHoliday": false,
    "dayShiftPerson": "مهندس سپهر آرا",
    "id": 121,
    "dayName": "شنبه",
    "onCallPerson": "مهندس لسانی",
    "nightShiftPerson": "مهندس حیدری"
  },
  {
    "onCallPerson": "مهندس لسانی",
    "id": 122,
    "isHoliday": false,
    "date": "1405/06/22",
    "nightShiftPerson": "مهندس سالاروند",
    "dayShiftPerson": "آقای رحیمی",
    "dayName": "یک‌شنبه"
  },
  {
    "isHoliday": false,
    "dayShiftPerson": "مهندس حیدری",
    "id": 123,
    "onCallPerson": "مهندس لسانی",
    "dayName": "دوشنبه",
    "date": "1405/06/23",
    "nightShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "id": 124,
    "isHoliday": false,
    "dayName": "سه‌شنبه",
    "dayShiftPerson": "مهندس سالاروند",
    "nightShiftPerson": "آقای رحیمی",
    "onCallPerson": "مهندس لسانی",
    "date": "1405/06/24"
  },
  {
    "isHoliday": false,
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "id": 125,
    "date": "1405/06/25",
    "nightShiftPerson": "مهندس دهقان",
    "dayName": "چهارشنبه",
    "onCallPerson": "مهندس لسانی"
  },
  {
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false,
    "id": 126,
    "dayName": "پنج‌شنبه",
    "date": "1405/06/26",
    "nightShiftPerson": "مهندس حیدری",
    "dayShiftPerson": "آقای رحیمی"
  },
  {
    "dayShiftPerson": "مهندس دهقان",
    "id": 127,
    "nightShiftPerson": "مهندس سپهر آرا",
    "dayName": "جمعه",
    "date": "1405/06/27",
    "onCallPerson": "مهندس لسانی",
    "isHoliday": true
  },
  {
    "nightShiftPerson": "مهندس سلیمان فلاح",
    "dayName": "شنبه",
    "dayShiftPerson": "مهندس سالاروند",
    "id": 128,
    "date": "1405/06/28",
    "onCallPerson": "مهندس لسانی",
    "isHoliday": false
  },
  {
    "nightShiftPerson": "مهندس دهقان",
    "onCallPerson": "مهندس لسانی",
    "id": 129,
    "dayName": "یک‌شنبه",
    "date": "1405/06/29",
    "isHoliday": false,
    "dayShiftPerson": "مهندس سلیمان فلاح"
  },
  {
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "date": "1405/06/30",
    "dayName": "دوشنبه",
    "id": 130,
    "nightShiftPerson": "مهندس سالاروند",
    "isHoliday": false,
    "onCallPerson": "مهندس لسانی"
  },
  {
    "id": 131,
    "onCallPerson": "مهندس لسانی",
    "dayShiftPerson": "مهندس سلیمان فلاح",
    "date": "1405/06/31",
    "dayName": "سه‌شنبه",
    "isHoliday": false,
    "nightShiftPerson": "مهندس سلیمان فلاح"
  }
];
