import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Linkify from "react-linkify";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Skeleton } from "@material-ui/lab";

type Props = {
  displayName?: string;
  message?: string;
  time?: string;
  isSelf?: boolean;
  hideAvatar?: boolean;
  hidePrimary?: boolean;
};

const useStyles = makeStyles(() => ({
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ChatMessage: React.FC<Props> = ({
  displayName,
  message,
  time,
  isSelf,
}) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography
            className={classes.secondary}
            variant="caption"
            color="primary"
          >
            <Skeleton width={70} />
            <Skeleton width={50} />
          </Typography>
        }
        secondary={<Skeleton variant="rect" height={40} />}
      />
    </ListItem>
  );
  // return (
  //   <ListItem
  //     style={{
  //       padding: 0,
  //       marginBottom: 0,
  //     }}
  //   >
  //     <ListItemText
  //       style={{ margin: 0 }}
  //       primary={
  //         <Typography
  //           className={classes.secondary}
  //           variant="caption"
  //           color="primary"
  //         >
  //           <b>
  //             {displayName} {isSelf && "(You)"}
  //           </b>
  //           <b>{time}</b>
  //         </Typography>
  //       }
  //       secondary={
  //         <Box border="1px solid #dddcdc" borderRadius={10} m={1} px={2}>
  //           <ReactMarkdown remarkPlugins={[gfm]}>{message || ""}</ReactMarkdown>
  //         </Box>
  //       }
  //     />
  //   </ListItem>
  // );
};

export default React.memo(ChatMessage);
