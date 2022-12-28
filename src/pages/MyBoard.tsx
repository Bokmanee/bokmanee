import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";
import Board from "../atoms/Board";
import BokPouch from "../atoms/BokPouch";
import { WhButton } from "../atoms/Button";
import ShareModal from "../components/modal/ShareModal";

import { appFireStore } from '../firebase/config';
import { collection, query, where, orderBy, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { UserInterface } from './Join';
import { MessageInputInterface } from './RegisterBok';

// export interface BoardType {
//   userInfo: UserInterface;
// }

const MyBoard = ({ userInfo }: any) => {
  const navigate = useNavigate();
  const [isShare, setIsShare] = useState(false);
  const outSection = useRef(null);

  console.log(userInfo);

  const [messageList, setMessageList] = useState<MessageInputInterface[]>([]);

  useEffect(() => {
    const q = query(
      collection(appFireStore, 'message'),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      // @ts-ignore
      setMessageList(arr)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  // const onClick = async (e: any) => {
  //   const docId = e.target.id;
  //   const ref = doc(appFireStore, 'message', docId);
  //   await updateDoc(ref, {
  //     status: "DONE",
  //   })
  // }

  // console.log(messageList);

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
          <ShareModal />
        </section>
      )}
      <Header rightChild={<BokClick />} />
      <div className="wrap-myboard">
        <Board
          username={userInfo.displayName}
          message1="님이 받은"
          message2="새해 응원 메시지를 확인해보세요  !"
        />
        <div className="grid-bok scroll-custom">
          {messageList.map((data) => {
            if (userInfo.uid === data.uid) {
              return (
                <BokPouch
                  onClick={() => {
                    navigate(`/receivedMessage_from/${data.email.split('@')[0]}`, {
                      state: {
                        message: data.message,
                        nickname: data.nickName,
                      }
                    })
                  }}
                  key={data.id}
                  color="red"
                  nickname={data.nickName} />
              )
            }
          })
          }
        </div>
        {/* <p style={{ textAlign: 'center', color: 'white' }}>
          아직 받은 편지가 없습니다. <br />
          친구들에게 링크를 공유해보세요!
        </p> */}
        <WhButton
          onClick={() => {
            setIsShare(true);
          }}
        >
          링크 공유하기
        </WhButton>
      </div>
    </>
  );
};

export default MyBoard;
