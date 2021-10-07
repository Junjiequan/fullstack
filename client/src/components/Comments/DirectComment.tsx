import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDirectReply } from "../../actions";
import * as C from "./CommentsElements";
import * as R from "./CommentsElements";
import InnerComment from "./InnerComment";
import { Replies } from "../../Types";
import { nanoid } from "nanoid";
import AnimateHeight from "react-animate-height";
import { FeedBackBtnPurple } from "../../utilities/buttons";
import { empty } from "../../utilities/notifications";
import type { Comments_type } from "../../Types";

const DirectComment = (item: Comments_type) => {
  const USER = useSelector((state: any) => state.user);
  const LOGGED = useSelector((state: any) => state.logged);
  const REPLIES = item.replies;
  const hasReply = REPLIES.length > 0;
  const [openReply, setOpenReply] = useState(false);
  const [height, setHeight] = useState<number | string>(0);
  const randomId = nanoid(10);
  const dispatch = useDispatch();
  const [textAreaTxt, setTextAreaTxt] = useState<any>("");

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (textAreaTxt === "") {
      empty();
    } else {
      dispatch(
        addDirectReply(item._key, {
          _key: randomId,
          username: USER.username,
          avatar: USER.img,
          user_id: USER.nickname,
          comment: textAreaTxt,
          replies: [],
        })
      );
      setOpenReply(!openReply);
      setHeight(!openReply ? "auto" : 0);
      setTextAreaTxt("");
    }
  };
  const handleKeypress = (e: any) => {
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
    <C.DirectComments data-verticle-line={hasReply}>
      <C.Avatar src={item.avatar} />
      <C.CommentWrapper>
        <C.ReplyWrapper>
          <C.Name>
            {item.username}
            <br />
            <C.Id>@{item.user_id}</C.Id>
          </C.Name>
          {LOGGED && (
            <C.Reply data-text={openReply ? "Cancel" : "Reply"} onClick={handleClick} aria-controls="reply container" />
          )}
        </C.ReplyWrapper>
        <C.CommentTextWrapper>
          <C.CommentText>{item.comment}</C.CommentText>

          <AnimateHeight duration={300} height={height}>
            <R.ReplyCommentWrapper data-reply-open={openReply} id="reply container" aria-expanded={openReply}>
              <R.TextArea
                rows={3}
                maxLength={170}
                name="reply"
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
          <C.InnerCommentWrapper>
            {REPLIES.map((props: Replies, index: number) => (
              <InnerComment {...props} key={index} data-directComments-key={item._key} />
            ))}
          </C.InnerCommentWrapper>
        </C.CommentTextWrapper>
      </C.CommentWrapper>
    </C.DirectComments>
  );
};

export default DirectComment;
