import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";
import Board from "../atoms/Board";
import BokPouch from "../atoms/BokPouch";
import UserBoard from "./UserBoard";
import { WhButton } from "../atoms/Button";
import ShareModal from "../components/modal/ShareModal";

import { appFireStore } from "../firebase/config";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { MessageInputInterface } from "./RegisterBok";

const MyBoard = () => {
  const navigate = useNavigate();
  const [isShare, setIsShare] = useState(false);
  const outSection = useRef(null);

  const [messageList, setMessageList] = useState<MessageInputInterface[]>([]);

  useEffect(() => {
    const q = query(
      collection(appFireStore, "message"),
      where("uid", "==", userInfos.uid),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // @ts-ignore
      setMessageList(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const location = useLocation();
  const userInfos = location.state;
  console.log(location.state);

  const userToken = localStorage.getItem("token");

  return (
    <>
      {isShare && (
        <section
          className="modal-area"
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              setIsShare(false);
            }
          }}
        >
          <ShareModal userInfo={userInfos} />
        </section>
      )}
      <Header rightChild={<BokClick />} />
      <div className="wrap-myboard">
        {userInfos.uid === userToken ? (
          <>
            <Board
              username={userInfos.displayName}
              message1="님이 받은"
              message2="새해 응원 메시지를 확인해보세요 !"
            />
            {messageList === null || messageList.length === 0 ? (
              <div className="box-none">
                <p className="txt-none">
                  아직 받은 편지가 없습니다. 친구들에게 링크를 공유해보세요 !
                </p>
              </div>
            ) : (
              <div className="grid-bok scroll-custom">
                {messageList.map((data) => {
                  if (userInfos.uid === data.uid) {
                    return (
                      <BokPouch
                        onClick={() => {
                          navigate(
                            `/receivedMessage_from/${data.email.split("@")[0]}`,
                            {
                              state: {
                                message: data.message,
                                nickname: data.nickName,
                              },
                            },
                          );
                        }}
                        key={data.id}
                        color="red"
                        nickname={data.nickName}
                      />
                    );
                  }
                })}
              </div>
            )}

            <WhButton
              onClick={() => {
                setIsShare(true);
              }}
            >
              링크 공유하기
            </WhButton>
          </>
        ) : (
          <>
            <Board
              username={userInfos.displayName}
              message1="님에게"
              message2="새해 응원 메시지를 남겨보세요 !"
            />
            <UserBoard />
          </>
        )}
      </div>
    </>
  );
};

export default MyBoard;
