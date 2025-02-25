import { useEffect } from 'react';

import { reissueToken } from '@/server/auth/auth';
import { deleteToken, getRefreshToken, setAccessToken, setRefreshToken } from '@/utils/token';
import { useLoggedInStore } from '@/zustands/member/store';

export const useAutoLogin = (setAppLoaded: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { setIsLoggedIn } = useLoggedInStore();

  const start = Date.now();

  useEffect(() => {
    const checkLoggedIn = async () => {
      console.log('자동로그인 실행');

      try {
        const refreshToken = await getRefreshToken();
        console.log('리프레쉬 : ', refreshToken);

        if (!refreshToken) {
          setIsLoggedIn(false);
          await deleteToken();
          setAppLoaded(true);
          return;
        }

        try {
          console.log('토큰 재발급 실행');
          const newTokens = await reissueToken({ refreshToken });
          console.log(newTokens);

          await Promise.all([
            setAccessToken(newTokens.accessToken),
            setRefreshToken(newTokens.refreshToken),
          ]);
        } catch (error: any) {
          console.log(error);
          setIsLoggedIn(false);
          await deleteToken();
          setAppLoaded(true);
          return;
        }

        setIsLoggedIn(true);
        setAppLoaded(true);
      } catch (error: any) {
        setIsLoggedIn(false);
        await deleteToken();
        setAppLoaded(true);
        return;
      }
    };
    checkLoggedIn();
  }, []);
};
