const FANCOIL_TYPES = "FANCOIL_TYPES";
const ACCESSORIES_TYPES = "ACCESSORIES_TYPES";
const CHANGE_TARGET_ID = "CHANGE_TARGET_ID";

let initialState = {

  currentId: 1,
  currentLeft: 0,
  isLoaded: false,

  fancoilTypes: [

    // {id: "1", title: 'Заголовок', series: "описание" },
    // {id: "2", title: 'Заголовок', series: "описание" },
    // {id: "3", title: 'Заголовок', series: "описание" },
    // {id: "4", title: 'Заголовок', series: "описание" },
    // {id: "5", title: 'Заголовок', series: "описание" },
    
  ],

  accessoriesTypes: [

    {id: "1", title: 'Заголовок аксессуара1', desc: 'Описание аксессуара' },
    {id: "2", title: 'Заголовок аксессуара2', desc: 'Описание аксессуара' },
    {id: "3", title: 'Заголовок аксессуара3', desc: 'Описание аксессуара' },
    {id: "4", title: 'Заголовок аксессуара4', desc: 'Описание аксессуара' },
    {id: "5", title: 'Заголовок аксессуара5', desc: 'Описание аксессуара' }
    
  ]
}


const MainPageReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case FANCOIL_TYPES:
      {
        let stateCopy = { ...state, fancoilTypes: action.fancoilTypes, isLoaded: action.isLoaded };
        return stateCopy;
      }

    case ACCESSORIES_TYPES:
      {
        let stateCopy = { ...state, accessoriesTypes: action.accessoriesTypes, isLoaded: action.isLoaded };

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

export const setAccessoriesTypes = (accessoriesTypes,isLoaded) => {
  return { type: ACCESSORIES_TYPES, accessoriesTypes,isLoaded }
};

export const changeTargetId = (currentId, currentLeft) => {
  return { type: CHANGE_TARGET_ID, currentId, currentLeft }
};

export default MainPageReducer;