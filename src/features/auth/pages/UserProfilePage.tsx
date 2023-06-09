import { lazy, Suspense } from 'react';
import { useAppSelector } from '../../../app/hooks';
import Loader from '../../../common/components/Loader';

const UserProfileCard = lazy(() => import('../UserProfileCard'));

function UserProfilePage() {
  const user = useAppSelector((state) => state.auth.user);
  if (!user) return null;

  return (
    <Suspense fallback={<Loader height="400px" />}>
      <UserProfileCard user={user} />
    </Suspense>
  );
}

export default UserProfilePage;
