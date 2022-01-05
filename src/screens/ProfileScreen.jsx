import React, {useState, useEffect} from "react";
import ProfileBoard from "../auth/components/ProfileBoard/ProfileBoard";
import ProfileSetup from "../auth/components/ProfileSetup/ProfileSetup";
import { auth } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
function ProfileScreen(props) {
    const [profileSetupDone, setProfileSetupDone] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() =>{
        if(user) {
            setProfileSetupDone(user.uid);
        }
    }, [loading]);
  
    return (
        <div>
            {!profileSetupDone && <ProfileSetup />}
            {profileSetupDone && <ProfileBoard />}
          
        </div>
    )
}
export default ProfileScreen;