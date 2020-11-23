import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "Todo list",
    items: [
      // {
      //   id: null,
      //   description: null,
      //   complete: null,
      //   category: null,
      //   dueDate: null,
      // },
    ],
    categories: ['All' ,'Personal', 'School', 'Work', 'Home' ],
    homePage: false,
  }
};

export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todoItemInfo } = action.payload;
      state.list.items.push(todoItemInfo)
    },

    // setComplete: (state, action) => {
    //   const { id, complete } = action.payload;
    //   state.list.items[id].complete = complete;
    //   console.log(id)
    // },

    setComplete: (state, action) => {
      //const { id, complete } = action.payload;
      const foundItem = state.list.items.find(item => item.id === action.payload)
      //console.log(action.payload)
      //console.log(`innan if ${foundItem}`)
      if(foundItem) {
        foundItem.complete = !foundItem.complete
      }
      //console.log(`efter if ${foundItem}`)
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.list.items = state.list.items.filter(
        item => item.id !== id
      )
    },

    removeAllTodos: (state) => {
      state.list.items = []
    },

    createTodo: (state) => {
      state.homePage = true;
    },
    
    navHomePage: (state) => {
      state.homePage = false;
    }
  }
})

/*ATT GÖRA*/
//lägg till mer filter möjligheter DUE DATE(är detta möjligt), COMPLETE/NOT COMPLETE
//Ta bort category och description i initialState. (starta tomt) (null???)
//confirmation alert när man klickar på "remove all"


/*HAR VI GJORT*/
//Skapa en landning sida som visar alla todos (check)
//visa dagens datum (check)
//filtrera på kategori  (första sidan) (check)
//När jag vill lägga till todo skickas jag till sida 2 (check)
//när jag lägger till todo skickas tillbaka till första sidan (check)
//möjlighet att makerar klar, ta bort alt ta bort alla
//Välja Due Date på sida två när jag skapar min kategori (datepicker)
//möjlighet att filterar på ALL kategorier



