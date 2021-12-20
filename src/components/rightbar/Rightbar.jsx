
import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"

export const Rightbar=({profile})=>{
    const HomeRightbar=()=>{
        return(
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Gabbs </b>and <b>3 Others</b> have birthdays today</span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="righbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar=()=>{
        return(
            <>
                <h4 className="rightbarTitle">User Infromation</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfokey">City:</div>
                        <div className="rightbarInfoValue">New York</div>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfokey">From:</div>
                        <div className="rightbarInfoValue">Madrid</div>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfokey">Relationship:</div>
                        <div className="rightbarInfoValue">Single</div>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <div className="rightbarFollowingName">Tyson Lukale</div>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <div className="rightbarFollowingName">Tyson Lukale</div>
                    </div>
                     <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <div className="rightbarFollowingName">Tyson Lukale</div>
                    </div>
                </div>

            </>
        );
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}