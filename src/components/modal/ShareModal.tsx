import React, { useEffect } from "react";
import { KakaoButton, WhButton } from "../../atoms/Button";
const { Kakao } = window;

const ShareModal = ({ userInfo }: any) => {
  const defaultUrl = "http://localhost:3000";
  const userAccountName = userInfo.email?.split("@")[0];
  const shareUrl = `${defaultUrl}/${userAccountName}/message_board`;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  const shareLinkToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "🐰 2023 우리 모두 복만이",
        description: `복을 나누는 토끼 "복만이"가 되어 친구들과 새해 응원메세지를 나눠 보세요!`,
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/ujin16.shop/Group+12.png",
        link: {
          mobileWebUrl: defaultUrl,
          webUrl: defaultUrl,
        },
      },
      buttons: [
        {
          title: "복만이 되러가기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <h1 className="ir">공유하기</h1>
      <div className="share-button-area">
        <WhButton onClick={() => copyLink(shareUrl)}>링크 복사하기</WhButton>
        <KakaoButton onClick={shareLinkToKakao}>카카오톡 공유하기</KakaoButton>
      </div>
    </>
  );
};

export default ShareModal;
