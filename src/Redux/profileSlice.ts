import { createSlice } from '@reduxjs/toolkit';

interface Lesson {
  subject: string;
  count: number;
}

interface ProfileState {
  name: string;
  lessons: Lesson[];
}

const initialState: ProfileState = {
  name: 'Михаил',
  lessons: [
    { subject: 'Ментальная Арифметика', count: 32 },
    { subject: 'Программирование', count: 0 },
    { subject: 'Скорочтение', count: 4 },
  ],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
