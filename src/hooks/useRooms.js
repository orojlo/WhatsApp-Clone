import { RoomService } from '@material-ui/icons';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
export default function useRooms() {
  const {snapshot} = useCollection(
        db.collection('rooms').orderBy('timestamp', "desc")
    )

    snapshot?.docs.map(doc => ({
        id: doc.id,
        userId: doc.id,
        ...doc.data()
    }))


    return RoomService;
}
