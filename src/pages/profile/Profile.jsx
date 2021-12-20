
import "./profile.css"
import { Topbar } from "../../components/topbar/Topbar"
import {Sidebar} from "../../components/sidebar/Sidebar"
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from '../../components/rightbar/Rightbar';

const Profile=()=>{
    return(
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                        <img alt="" className="profileUserImg" src="assets/post/7.jpeg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Tyson Lukale</h4>
                        <span className="profileInfoDec">Tyson Profile</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile />
                </div>
            </div>

        </div>
    </>
    );
}
export default Profile;