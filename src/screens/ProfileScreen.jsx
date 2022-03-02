import React, {useState, useEffect} from "react";
import ProfileBoard from "../auth/components/ProfileBoard/ProfileBoard";
import ProfileSetup from "../auth/components/ProfileSetup/ProfileSetup";
import { auth, isProfileSetupDone } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";


function ProfileScreen(props) {
    const [profileSetupDone, setProfileSetupDone] = useState(undefined);
    const [user] = useAuthState(auth);

    useEffect(() =>{
        if(user) {
            const asyncSetProfileSetupDone = async () => {
                const setupDone = await isProfileSetupDone(user.uid);
                setProfileSetupDone(setupDone);
                console.log(setupDone);
            }
            asyncSetProfileSetupDone();
            console.log(profileSetupDone)
        }
    }, [user]);
  
    return (
        <div>
                 
                 {profileSetupDone === false || undefined? <ProfileSetup setProfileSetupDone={setProfileSetupDone}/> :<h3>WHY</h3> && <ProfileBoard />}
          
        </div>
    )
}
export default ProfileScreen;