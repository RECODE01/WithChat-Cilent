import InviteFriendModal from "components/commons/modal/inviteFriendModal";
import * as JH from "./channel.styles";

export default function ChannelUI(props: any) {
  return (
    <JH.Wrapper openCreateChannelModal={props.openCreateChannelModal}>
      <div className="ChannelHeader">
        <div className="HeaderLeft" onClick={props.onClickOpenChannelList}>
          <p>채팅 채널</p>
        </div>
        <div className="IconWrapper">
          <JH.ChannelAddIcon onClick={props.onClickOpenCreateModal} />
          <JH.ChannelInvite onClick={props.onClickInviteFriendModal} />
          <JH.ChannelSetting />
        </div>
      </div>

      {props.openCreateChannelModal && (
        <JH.CreateModal>
          <p>채팅 채널 개설하기</p>
          <input
            placeholder="채널의 이름을 입력해주세요!"
            onChange={props.onChangeChannelName}
          />
          <div className="buttonWrapper">
            <div className="button" onClick={props.onClickCreateChannel}>
              개설하기
            </div>
            <div className="button" onClick={props.onClickOpenCreateModal}>
              취소하기
            </div>
          </div>
        </JH.CreateModal>
      )}

      {props.channelList?.map((el: any) => (
        <JH.ChannelWrapper
          key={el.key}
          channelClicked={props.channelClicked}
          roomId={el.id}
        >
          <div
            className="ChannelName"
            id={el.id}
            onClick={props.onClickChannel}
          >
            # {el.name}
          </div>
          {/* {el.id ? (
           
          ) : (
            <div className="IconWrapper"></div>
          )} */}
        </JH.ChannelWrapper>
      ))}
      {props.openInviteFriendModal && (
        <InviteFriendModal
          open={props.openInviteFriendModal}
          onClickModal={props.onClickInviteFriendModal}
        />
      )}
    </JH.Wrapper>
  );
}
