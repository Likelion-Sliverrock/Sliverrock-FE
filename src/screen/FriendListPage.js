import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendList from "../components/FriendList";
import MatchingTab from "../components/MatchingTab";
import Tab from "../components/Tab";
import "../styles/FriendListPage.css";
import axios from "axios";
import { setFriendList } from "../app/store";

function FriendListPage() {
  const friendListData = useSelector((state) => state.friendList);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 친구 목록을 가져오는 비동기 함수
    const fetchFriendList = async () => {
      try {
        // 백엔드 API로부터 친구 목록을 가져오기
        const response = await axios.get("/matching/friend", {
          headers: {
            Authorization: "여기에 무엇을 적어야할까요..",
          },
        });
        dispatch(setFriendList(response.data)); // Redux 스토어 업데이트
      } catch (error) {
        console.log(error);
      }
    };

    // fetchFriendList 함수 호출
    fetchFriendList();
  }, [dispatch]);

  // console.log(friendListData);

  return (
    <div>
      <h1 className="title">{`${friendListData.length}명의 실버락이 있어요`}</h1>
      {friendListData.map((friend) => (
        <FriendList key={friend.id} friend={friend} />
      ))}
      <MatchingTab />
      <Tab />
    </div>
  );
}

export default FriendListPage;
