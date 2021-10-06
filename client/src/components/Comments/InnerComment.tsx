import { useState } from "react";
import * as I from "./CommentsElements";
import * as R from "./CommentsElements";
import { useDispatch, useSelector } from "react-redux";
import { addInnerReply } from "../../actions";
import { FeedBackBtnPurple } from "../../utilities/buttons";
import { nanoid } from "nanoid";
import AnimateHeight from "react-animate-height";
import { empty } from "../../utilities/notifications";
import { Replies } from "../../Types";

const InnerComment = (item: Replies) => {
  const USER = useSelector((state: any) => state.user);

  const [openReply, setOpenReply] = useState(false);
  const [height, setHeight] = useState<number | string>(0);
  const randomId = nanoid(10);
  const dispatch = useDispatch();
  const [textAreaTxt, setTextAreaTxt] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (textAreaTxt === "") {
      empty();
    } else {
      dispatch(
        addInnerReply(
          {
            key: randomId,
            username: USER.username,
            avatar: USER.img,
            user_id: USER.nickname,
            comment: textAreaTxt,
          },
          item.key
        )
      );
      setOpenReply(!openReply);
      setHeight(!openReply ? "auto" : 0);
      setTextAreaTxt("");
    }
  };
  const handleKeypress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenReply(!openReply);
    setHeight(height === 0 ? "auto" : 0);
  };
  return (
    <I.InnerComments>
      <I.Avatar src={item.avatar} />
      <I.CommentWrapper>
        <I.ReplyWrapper>
          <I.Name>
            {item.username}
            <br />
            <I.Id>@{item.user_id}</I.Id>
          </I.Name>
          <I.Reply data-text={openReply ? "Cancel" : "Reply"} onClick={handleClick} aria-controls="reply container" />
        </I.ReplyWrapper>
        <I.CommentTextWrapper>
          <I.CommentText>{item.comment}</I.CommentText>

          <AnimateHeight duration={300} height={height}>
            <R.ReplyCommentWrapper data-reply-open={openReply} id="reply container" aria-expanded={openReply}>
              <R.TextArea
                rows={3}
                maxLength={170}
                name="reply_direct"
                value={textAreaTxt}
                onChange={(e) => setTextAreaTxt(e.target.value)}
                onKeyDown={handleKeypress}
                placeholder="Ctrl + Enter"
              />
              <FeedBackBtnPurple
                data-text="Post Reply"
                form="reply-txt"
                aria-label="submit reply"
                onClick={handleSubmit}
              />
            </R.ReplyCommentWrapper>
          </AnimateHeight>
        </I.CommentTextWrapper>
      </I.CommentWrapper>
    </I.InnerComments>
  );
};

export default InnerComment;
