import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  completed: boolean;
}

interface CalendarState {
  events: Event[];
}

const initialState: CalendarState = {
  events: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
    },
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    toggleEventCompletion: (state, action: PayloadAction<string>) => {
      const event = state.events.find(event => event.id === action.payload);
      if (event) {
        event.completed = !event.completed;
      }
    }
  },
});

export const { setEvents, addEvent, toggleEventCompletion } = calendarSlice.actions;
export default calendarSlice.reducer;
