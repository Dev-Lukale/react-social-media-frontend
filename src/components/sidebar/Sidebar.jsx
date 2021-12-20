import './sidebar.css';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import {Users} from "../../dummyData"
import Closefriend from '../closeFriend/CloseFriend';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleOutlineIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineOutlinedIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventOutlinedIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolOutlinedIcon className="sidebarListIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            {Users.map(u=>(
              <Closefriend key={u.id} user={u}/>
            ))}

        </ul>
      </div>
    </div>
  );
};
