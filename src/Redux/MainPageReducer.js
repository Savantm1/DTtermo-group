const FANCOIL_TYPES = "FANCOIL_TYPES";
const MAIN_ACCESSORIES_TYPES = "MAIN_ACCESSORIES_TYPES";

let initialState = {

  fancoilTypes: [

    { title: 'Заголовок', series: "описание" },
    { title: 'Заголовок', series: "описание" },
    { title: 'Заголовок', series: "описание" },
    { title: 'Заголовок', series: "описание" },
    { title: 'Заголовок', series: "описание" },
    
  ],

  mainAccessoriesTypes: [

    { title: 'Заголовок аксессуара1', desc: 'Описание аксессуара' },
    { title: 'Заголовок аксессуара2', desc: 'Описание аксессуара' },
    { title: 'Заголовок аксессуара3', desc: 'Описание аксессуара' },
    { title: 'Заголовок аксессуара4', desc: 'Описание аксессуара' },
    { title: 'Заголовок аксессуара5', desc: 'Описание аксессуара' }
    
  ]
}


const MainPageReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case FANCOIL_TYPES:
      {
        let stateCopy = { ...state, fancoilTypes:action.fancoilTypes };
        return stateCopy;
      }

      case MAIN_ACCESSORIES_TYPES:
        {
        let stateCopy = { ...state };
        return stateCopy;
      }
      
      default:
        return state;
  }
}

export const setFancoilTypes = (fancoilTypes) => {
  return { type: FANCOIL_TYPES, fancoilTypes }
};

export const setMainAccessoriesTypes = (mainAccessories) => {
  return { type: MAIN_ACCESSORIES_TYPES, mainAccessories }
};

export default MainPageReducer;