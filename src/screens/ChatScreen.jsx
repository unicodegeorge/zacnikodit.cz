import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import GlobalMessages from '../components/global_chat/GlobalMessages';
import { auth } from '../firebase/firebase-config';

function ChatScreen() {
    
    return (
        <>
        <GlobalMessages />
        </>
    )
}
export default ChatScreen;
