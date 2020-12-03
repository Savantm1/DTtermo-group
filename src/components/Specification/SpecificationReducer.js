const DELETE_POSITION_FROM_SPEC = "DELETE_POSITION_FROM_SPEC";

let initialState = {

  fancoils: [
  { art: "123", type: "Канальный", model: "32C1", kol: '4' },
  { art: "213", type: "Канальный", model: "32C1", kol: "2" },
  { art: "122133", type: "Канальный", model: "32C1", kol: "2" },
  { art: "113", type: "Канальный", model: "32C1", kol: "1" },
  ],

  accessories: [
    { art: "123", type: "Пульта", model: "32C31", kol: '4' },
    { art: "213", type: "Индикатор", model: "321C1", kol: "2" },
    { art: "122133", type: "Дисплей", model: "32ыC1", kol: "2" },
    { art: "113", type: "Контроллер", model: "32Cч1", kol: "1" },
    ],

}

const SpecificationReducer = (state = initialState, action) => {

  switch (action.type) {

    case DELETE_POSITION_FROM_SPEC:
      {
        let stateCopy = { ...state };
      }

    default:
   
        return state;
  }

}

export default SpecificationReducer;

export const DeletePositionFromSpec = () => {
  return { type: DELETE_POSITION_FROM_SPEC }
};