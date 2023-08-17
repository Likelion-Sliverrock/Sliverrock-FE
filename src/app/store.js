import { createSlice, configureStore } from "@reduxjs/toolkit";
import clubImgTennis from "../styles/club_tennis.jpg";
import clubImgBadminton from "../styles/club_badminton.jpg";
import clubImgMT from "../styles/club.jpg";

let loginData = createSlice({
  name: "loginData",
  initialState: [
    {
      accessToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjE3Njg1N30.2bqf4Nv_hn5QABGIg2tPmVc1SPj8V9rdae8uCuzX8bc",
      refreshToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjI1OTY1N30.NGGRyHwQJl82m1JPkBJot1rGZYrIew_bTqDe7iSjZJo",
      userId: "4",
    },
  ],
  reducers: {
    setLoginData: (state, action) => {
      let now = action.payload;
      state = now;
      return state;
    },
  },
});

//근처 친구 목록(홈페이지)
let nearUserList = createSlice({
  name: "nearUserList",
  initialState: [],
  reducers: {
    setNearUserList: (state, action) => {
      let now = action.payload;
      state = now;
      return state;
    },
  },
});

//친구 요청 목록
let friendRequestList = createSlice({
  name: "friendRequestList",
  initialState: [],
  reducers: {
    setFriendRequestList: (state, action) => {
      let now = action.payload;
      state = now;
      return state;
    },
  },
});

//친구 목록
let friendList = createSlice({
  name: "friendList",
  initialState: [
    {
      nickname: "지원",
      birth: "1955",
      gender: "여성",
      introduce: "산책 갈사람",
      getS3Re: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      nickname: "근육맨",
      birth: "1960",
      gender: "남성",
      introduce: "3대 500임",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },
  ],
  reducers: {
    setFriendList: (state, action) => {
      const { nickname, birth, gender, introduce, getS3Res } = action.payload;
      state.nickname = nickname;
      state.birth = birth;
      state.gender = gender;
      state.introduce = introduce;
      state.getS3Res = getS3Res;
    },
  },
});

//club page
let club = createSlice({
  name: "club",
  initialState: [
    {
      name: "산악 동호회",
      img: clubImgMT,
    },

    {
      name: "배드민턴 동호회",
      img: clubImgBadminton,
    },

    {
      name: "테니스 동호회",
      img: clubImgTennis,
    },
  ],
  reducers: {
    setClub: (state, action) => {
      const { name, img } = action.payload;
      // state.name = name;
      // state.img = img;
      state.push({ name, img });
    },
  },
});

const matchingSlice = createSlice({
  name: "matching",
  initialState: null,
  reducers: {
    setMatchingId: (state, action) => {
      return action.payload;
    },
  },
});

export let { setLoginData } = loginData.actions;
export let { setNearUserList } = nearUserList.actions;
export const { setFriendRequestList } = friendRequestList.actions;
export const { setFriendList } = friendList.actions;
export const { setClub } = club.actions;
export const { setMatchingId } = matchingSlice.actions;

export default configureStore({
  reducer: {
    nearUserList: nearUserList.reducer,
    friendRequestList: friendRequestList.reducer,
    friendList: friendList.reducer,
    club: club.reducer,
    matchingSlice: matchingSlice.reducer,
    loginData: loginData.reducer,
  },
});
