const FANCOIL_TYPES = "FANCOIL_TYPES";
const MAIN_ACCESSORIES_TYPES = "MAIN_ACCESSORIES_TYPES";
const CHANGE_TARGET_ID = "CHANGE_TARGET_ID";

let initialState = {

  currentId: 1,
  currentLeft: 0,
  isLoaded: false,

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
        let stateCopy = { ...state, fancoilTypes:action.fancoilTypes, isLoaded: action.isLoaded };
        return stateCopy;
      }

    case MAIN_ACCESSORIES_TYPES:
      {
        let stateCopy = { ...state };
        return stateCopy;
       }

    case CHANGE_TARGET_ID:
      {
        let stateCopy = { ...state, currentId: action.currentId, currentLeft: action.currentLeft };
        return stateCopy;
      }
      
      default:
        return state;
  }
}

export const setFancoilTypes = (fancoilTypes,isLoaded) => {
  return { type: FANCOIL_TYPES, fancoilTypes, isLoaded }
};

export const setMainAccessoriesTypes = (mainAccessories) => {
  return { type: MAIN_ACCESSORIES_TYPES, mainAccessories }
};

export const changeTargetId = (currentId, currentLeft) => {
  return { type: CHANGE_TARGET_ID, currentId, currentLeft }
};

export default MainPageReducer;